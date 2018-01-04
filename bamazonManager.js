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
	inquirer.prompt([{
		type: "list",
		name: "action",
		message: "Please select an action",
		choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
	}])
	.then(function(answer) {
		switch(answer.action) {
			case "View Products for Sale": 
		}
	})
}

//VIEW PRODUCTS



//VIEW LOW INVENTORY




//ADD TO INVENTORY



//ADD NEW PRODUCT