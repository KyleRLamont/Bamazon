var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
    displayProducts();
});

function displayProducts() {
    var query = "Select * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        var displayTable = new Table({
            head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
            colWidths: [10, 25, 25, 10, 14]
        });
        for (var i = 0; i < res.length; i++) {
            displayTable.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(displayTable.toString());
        purchasePrompt();
    });
}

function purchasePrompt() {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Please enter Item ID you like to purhcase.",
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "How many items do you wish to purchase?",
            filter: Number
        },
    ]).then(function (answers) {
        var quantityNeeded = answers.Quantity;
        var IDrequested = answers.ID;
        purchaseOrder(IDrequested, quantityNeeded);
    })
};

function purchaseOrder(ID, quantity) {
    var query = "SELECT * FROM products WHERE item_id =";
    

    connection.query(query + ID, function (err, res) {

        if (err) throw err;
        
        var onhand = res[0].stock_quantity;
        var price = res[0].price;
        var name = res[0].product_name;
        

        if (quantity <= onhand) {
            var totalCost = price * quantity;
            console.log("Good news, your item is in stock!");
            console.log("Your total cost for " + quantity + " " + name + " is " + totalCost + ". Thank you!");

            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + quantity + " WHERE item_id=" + ID);
        } else {
            console.log("Insufficient quantity: Sorry we do not have enough " + name + "to complete your order.");
        };
        displayProducts();
    });
};