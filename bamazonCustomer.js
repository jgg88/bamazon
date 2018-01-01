var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "",
	database: "bamazon"
});

connection.connect(function(err) {
	if (err) throw err;

	start();
});

function start() {
	connection.query("SELECT * FROM product", function(err, res) {
		if (err) throw err;
		console.log("------------BAMAZON-------------")
		console.log("--------------------------------")

		for (var i = 0; i < res.length; i++) {
			console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "In stock: " + res[i].stock_quantity);
		}
		console.log("--------------------------------")
	

	inquirer
		.prompt([{
			name: "idOfProduct",
			type: "input",
			message: "What is the ID of the product you wish to purchase?"
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
			message: "How many of this product would you like to purchase?"
			validate: function(value) {
				if (isNaN(value)) {
					return false;
				} else {
					return true;
				}
			}
		}])
		.then(function(answer) {
			



		});

	});
}


//CONSOLE.TABLE PACKAGE