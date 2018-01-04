var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon"
});

function start() {
	connection.query("SELECT * FROM product", function(err, res) {
		if (err) throw err;
		console.log("------------BAMAZON-------------")
		console.log("--------------------------------")
		console.table(res);
		console.log("--------------------------------")
	

	inquirer
		.prompt([{
			name: "idOfProduct",
			type: "input",
			message: "What is the ID of the product you wish to purchase?",
			validate: function(value) {
				if (isNaN(value) === false && parseInt(value) <= res.length && parseInt(value) > 0) {
					return true;
				} else {
					return false;
				}
			}
		},
		{
			name: "productQuantity",
			type: "input",
			message: "How many of this product would you like to purchase?",
			validate: function(value) {
				if (isNaN(value)) {
					return false;
				} else {
					return true;
				}
			}
		}])
		.then(function(answer) {
			var productID = (answer.idOfProduct)-1;
			var quantity = parseInt(answer.productQuantity);
			var total = parseFloat(((res[productID].price)*quantity).toFixed(2));

			if(res[productID].stock_quantity >= quantity) {
				connection.query("UPDATE Product SET ? WHERE ?", [
					{stock_quantity: (res[productID].stock_quantity - quantity)},
					{item_id: answer.idOfProduct}
				], function(err, res) {
					if (err) throw err;
					console.log("\nThank you! Your total is $" + total.toFixed(2) + ".\n");
					reprompt();
				});

			} else {
				console.log("We're sorry, the product you are looking for is out of stock!");
				reprompt();
			}

		});

	});
}

function reprompt() {
	inquirer.prompt([{
		name: "continue",
		type: "confirm",
		message: "Would you like to make another purchase?"
	}])
	.then(function(answer) {
		if(answer.continue) {
			start();
		} else {
			console.log("Thank you for using BAMAZON!");
		}
	});
}

start();