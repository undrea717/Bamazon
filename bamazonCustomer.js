var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function start() {
  inquirer
    .prompt({
      name: "Idnumber",
      type: "list",
      message: "Please pick the ID of the product they would like to buy.",
      choices: ["Notebook", "Pencil", "Book_Bag", "Shirt", "Pants", "Jacket", "iPhone", "Television", "Earrings", "Necklace"]
    })
    .then(function(answer) {
    	console.log(answer)
    	console.log(answer.Idnumber)
      // based on their answer, either call the bid or the post functions
      if (answer.Idnumber === "Notebook") {
       noteBook();
      }
      else if(answer.Idnumber === "Pencil"){
       pencil();
      }
       else if(answer.Idnumber === "Book_Bag"){
       bookBag();
      }
       else if(answer.Idnumber === "Shirt"){
       shirt();
      }
       else if(answer.Idnumber === "Pants"){
       pants();
      }
       else if(answer.Idnumber === "Jacket"){
       jacket();
      } 
      else if(answer.Idnumber === "iPhone"){
       iPhone();
      } 
      else if(answer.Idnumber === "Television"){
      television();
      }
       else if(answer.Idnumber === "Earrings"){
      earrings();
      }
       else if(answer.Idnumber === "Necklace"){
      necklace();
      }
    });
}

var shoppingCart = [];

function noteBook(){
	inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "How many would you like?"
      },
  	])
  	.then(function(answer){

  		console.log(answer,'this')
  		
		// pull price and store in array decrease stock 
		connection.query("SELECT * FROM product WHERE ?", { product_name: 'Notebook'}, function(err, res) {
      
        var quantity = res[0].stock_quantiy;
        var purchase = answer.item;
        var price = res[0].price;

        // console.log(quantity);
        // console.log(purchase);

	        if(quantity >= purchase){
	        	var total =  purchase * price;
	        	var newQuantity =  quantity - purchase;
	        	// console.log(total);
	        	// console.log(newQuantity);

	        	connection.query(
	            "UPDATE product SET ? WHERE ?", 
	            [
	              {
	                stock_quantiy: newQuantity
	              },
	              {
	              	product_name: "Notebook"
	              }
	              
	            ],
		                function(error) {
	              if (error) throw err;
	             
	              // start();
	            }
	          );

	        	shoppingCart.push({
	        		item: "Notebook",
	        		total: "$"+total
	        	});
	        }
		


			else {
					console.log(" Insufficient quantity!")
			}
		// 	console.log(shoppingCart);
		})
		checkout();
  	})
  	
  }

  function pencil(){
	inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "How many would you like?"
      },
  	])
  	.then(function(answer){

  		console.log(answer,'this');
  		
		// pull price and store in array decrease stock 
		connection.query("SELECT * FROM product WHERE ?", { product_name: 'Pencil'}, function(err, res) {
      
        var quantity = res[0].stock_quantiy;
        var purchase = answer.item;
        var price = res[0].price;

        // console.log(quantity);
        // console.log(purchase);

	        if(quantity >= purchase){
	        	var total =  purchase * price;
	        	var newQuantity =  quantity - purchase;
	        	// console.log(total);
	        	// console.log(newQuantity);

	        	connection.query(
	            "UPDATE product SET ? WHERE ?", 
	            [
	              {
	                stock_quantiy: newQuantity
	              },
	              {
	              	product_name: "Pencil"
	              }
	              
	            ],
                function(error) {
	              	if (error) {
	              		throw err;
	              		
	              		// start();
	          		}
	            }
	          );

	        	shoppingCart.push({
	        		item: "Pencil",
	        		total: "$"+total
	        	});
	        }
		


			else {
					console.log(" Insufficient quantity!")
			}
			// console.log(shoppingCart);
		})
		checkout();
  	})
  	
}

function bookBag(){
	inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "How many would you like?"
      },
  	])
  	.then(function(answer){

  		console.log(answer,'this')
  		
		// pull price and store in array decrease stock 
		connection.query("SELECT * FROM product WHERE ?", { product_name: 'Book_Bag'}, function(err, res) {
      
        var quantity = res[0].stock_quantiy;
        var purchase = answer.item;
        var price = res[0].price;

        // console.log(quantity);
        // console.log(purchase);

	        if(quantity >= purchase){
	        	var total =  purchase * price;
	        	var newQuantity =  quantity - purchase;
	        	// console.log(total);
	        	// console.log(newQuantity);

	        	connection.query(
	            "UPDATE product SET ? WHERE ?", 
	            [
	              {
	                stock_quantiy: newQuantity
	              },
	              {
	              	product_name: "Book_Bag"
	              }
	              
	            ],
		                function(error) {
	              if (error) throw err;
	             
	              // start();
	            }
	          );

	        	shoppingCart.push({
	        		item: "Book_Bag",
	        		total: "$"+total
	        	});
	        }
		


			else {
					console.log(" Insufficient quantity!")
			}
			// console.log(shoppingCart);
		})
		checkout();
  	})
  	
}

function shirt(){
	inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "How many would you like?"
      },
  	])
  	.then(function(answer){

  		console.log(answer,'this')
  		
		// pull price and store in array decrease stock 
		connection.query("SELECT * FROM product WHERE ?", { product_name: 'Shirt'}, function(err, res) {
      
        var quantity = res[0].stock_quantiy;
        var purchase = answer.item;
        var price = res[0].price;

        // console.log(quantity);
        // console.log(purchase);

	        if(quantity >= purchase){
	        	var total =  purchase * price;
	        	var newQuantity =  quantity - purchase;
	        	// console.log(total);
	        	// console.log(newQuantity);

	        	connection.query(
	            "UPDATE product SET ? WHERE ?", 
	            [
	              {
	                stock_quantiy: newQuantity
	              },
	              {
	              	product_name: "Shirt"
	              }
	              
	            ],
		                function(error) {
	              if (error) throw err;
	             
	              // start();
	            }
	          );

	        	shoppingCart.push({
	        		item: "Shirts",
	        		total: "$"+total
	        	});
	        }
		


			else {
					console.log(" Insufficient quantity!")
			}
			// console.log(shoppingCart);
		})
		checkout();
  	})
  	
}

function pants(){
	inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "How many would you like?"
      },
  	])
  	.then(function(answer){

  		console.log(answer,'this')
  		
		// pull price and store in array decrease stock 
		connection.query("SELECT * FROM product WHERE ?", { product_name: 'Pants'}, function(err, res) {
      
        var quantity = res[0].stock_quantiy;
        var purchase = answer.item;
        var price = res[0].price;

        // console.log(quantity);
        // console.log(purchase);

	        if(quantity >= purchase){
	        	var total =  purchase * price;
	        	var newQuantity =  quantity - purchase;
	        	// console.log(total);
	        	// console.log(newQuantity);

	        	connection.query(
	            "UPDATE product SET ? WHERE ?", 
	            [
	              {
	                stock_quantiy: newQuantity
	              },
	              {
	              	product_name: "Pants"
	              }
	              
	            ],
		                function(error) {
	              if (error) throw err;
	            
	              // start();
	            }
	          );

	        	shoppingCart.push({
	        		item: "Pants",
	        		total: "$"+total
	        	});
	        }
		


			else {
					console.log(" Insufficient quantity!")
			}
			// console.log(shoppingCart);
		})
		checkout();
  	})
  	
}

function jacket(){
	inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "How many would you like?"
      },
  	])
  	.then(function(answer){

  		console.log(answer,'this')
  		
		// pull price and store in array decrease stock 
		connection.query("SELECT * FROM product WHERE ?", { product_name: 'Jacket'}, function(err, res) {
      
        var quantity = res[0].stock_quantiy;
        var purchase = answer.item;
        var price = res[0].price;

        // console.log(quantity);
        // console.log(purchase);

	        if(quantity >= purchase){
	        	var total =  purchase * price;
	        	var newQuantity =  quantity - purchase;
	        	// console.log(total);
	        	// console.log(newQuantity);

	        	connection.query(
	            "UPDATE product SET ? WHERE ?", 
	            [
	              {
	                stock_quantiy: newQuantity
	              },
	              {
	              	product_name: "Jacket"
	              }
	              
	            ],
		                function(error) {
	              if (error) throw err;
	             
	              // start();
	            }
	          );

	        	shoppingCart.push({
	        		item: "Jacket",
	        		total: "$"+total
	        	});
	        }
		


			else {
					console.log(" Insufficient quantity!")
			}
			// console.log(shoppingCart);
		})
		checkout();
  	})
  	
}

function iPhone(){
	inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "How many would you like?"
      },
  	])
  	.then(function(answer){

  		console.log(answer,'this')
  		
		// pull price and store in array decrease stock 
		connection.query("SELECT * FROM product WHERE ?", { product_name: 'iPhone'}, function(err, res) {
      
        var quantity = res[0].stock_quantiy;
        var purchase = answer.item;
        var price = res[0].price;

        // console.log(quantity);
        // console.log(purchase);

	        if(quantity >= purchase){
	        	var total =  purchase * price;
	        	var newQuantity =  quantity - purchase;
	        	// console.log(total);
	        	// console.log(newQuantity);

	        	connection.query(
	            "UPDATE product SET ? WHERE ?", 
	            [
	              {
	                stock_quantiy: newQuantity
	              },
	              {
	              	product_name: "iPhone"
	              }
	              
	            ],
		                function(error) {
	              if (error) throw err;
	              
	              // start();
	            }
	          );

	        	shoppingCart.push({
	        		item: "iPhone",
	        		total: "$"+total
	        	});
	        }
		


			else {
					console.log(" Insufficient quantity!")
			}
			// console.log(shoppingCart);
		})
		checkout();
  	})
  	
}

function television(){
	inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "How many would you like?"
      },
  	])
  	.then(function(answer){

  		console.log(answer,'this')
  		
		// pull price and store in array decrease stock 
		connection.query("SELECT * FROM product WHERE ?", { product_name: 'Television'}, function(err, res) {
      
        var quantity = res[0].stock_quantiy;
        var purchase = answer.item;
        var price = res[0].price;

        // console.log(quantity);
        // console.log(purchase);

	        if(quantity >= purchase){
	        	var total =  purchase * price;
	        	var newQuantity =  quantity - purchase;
	        	// console.log(total);
	        	// console.log(newQuantity);

	        	connection.query(
	            "UPDATE product SET ? WHERE ?", 
	            [
	              {
	                stock_quantiy: newQuantity
	              },
	              {
	              	product_name: "Television"
	              }
	              
	            ],
		                function(error) {
	              if (error) throw err;
	              
	              // start();
	            }
	          );

	        	shoppingCart.push({
	        		item: "Television",
	        		total: "$"+total
	        	});
	        }
		


			else {
					console.log(" Insufficient quantity!")
			}
			// console.log(shoppingCart);
		})
		checkout();
  	})
  	
}

function earrings(){
	inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "How many would you like?"
      },
  	])
  	.then(function(answer){

  		console.log(answer,'this')
  		
		// pull price and store in array decrease stock 
		connection.query("SELECT * FROM product WHERE ?", { product_name: 'Earrings'}, function(err, res) {
      
        var quantity = res[0].stock_quantiy;
        var purchase = answer.item;
        var price = res[0].price;

        // console.log(quantity);
        // console.log(purchase);

	        if(quantity >= purchase){
	        	var total =  purchase * price;
	        	var newQuantity =  quantity - purchase;
	        	// console.log(total);
	        	// console.log(newQuantity);

	        	connection.query(
	            "UPDATE product SET ? WHERE ?", 
	            [
	              {
	                stock_quantiy: newQuantity
	              },
	              {
	              	product_name: "Earrings"
	              }
	              
	            ],
		                function(error) {
	              if (error) throw err;
	             
	              // start();
	            }
	          );

	        	shoppingCart.push({
	        		item: "Earrings",
	        		total: "$"+total
	        	});
	        }
		


			else {
					console.log(" Insufficient quantity!")
			}
			// console.log(shoppingCart);
		})
		checkout();
  	})
  	
}

function necklace(){
	inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "How many would you like?"
      },
  	])
  	.then(function(answer){

  		console.log(answer,'this')
  		
		// pull price and store in array decrease stock 
		connection.query("SELECT * FROM product WHERE ?", { product_name: 'Necklace'}, function(err, res) {
      
        var quantity = res[0].stock_quantiy;
        var purchase = answer.item;
        var price = res[0].price;

        // console.log(quantity);
        // console.log(purchase);

	        if(quantity >= purchase){
	        	var total =  purchase * price;
	        	var newQuantity =  quantity - purchase;
	        	// console.log(total);
	        	// console.log(newQuantity);

	        	connection.query(
	            "UPDATE product SET ? WHERE ?", 
	            [
	              {
	                stock_quantiy: newQuantity
	              },
	              {
	              	product_name: "Necklace"
	              }
	              
	            ],
		                function(error) {
	              if (error) throw err;
	             
	              // start();
	            }
	          );

	        	shoppingCart.push({
	        		item: "Necklace",
	        		total: "$"+total
	        	});
	        }
		


			else {
					console.log(" Insufficient quantity!")
			}
			// console.log(shoppingCart);
		})
		checkout();
  	})
  	
}

function checkout(){
	inquirer
    .prompt({
      name: "confirm",
      type: "confirm",
      message: "Are you ready to checkout?",
      default: true
      })
    .then(function(inquirerResponse){
    	if (inquirerResponse.confirm) {
    		console.log(shoppingCart);
    		console.log("Would you like to start you Bamazon Credit Today?")
    	}
    	else{
    		start();
    	}
    })
}

