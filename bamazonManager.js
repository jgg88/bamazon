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

function start()

//VIEW PRODUCTS



//VIEW LOW INVENTORY




//ADD TO INVENTORY



//ADD NEW PRODUCT