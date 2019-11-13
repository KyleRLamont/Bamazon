# Bamazon

## Download Repository
Copy the link to clone:
<https://github.com/KyleRLamont/Bamazon.git>

## Problem: 
If you ever wanted to browse an Amazon like site, but didn't want to use a pesky browser, I present BAmazon! The node.js online retail store (*not an actual store).

## Organization: 
The app is organized as-
1. Global variables for all functions to use, as well as in function variables. Then producing a table by accessing the information stored in mySQL database and populating it using cli-table.
2. Then switch commands taking in the confirm answer from the initial inquirer prompt and executing specified functions based on the command used, either shop or leave.
3. Each function is then separate, allowing for easier editing later and adding to functions.

## Using the App: 
To use the app, simply clone the github repository to your computer. In bash/command, run node bamazonapp.js. The table of available items will populate and the user will then be asked if they want to shop. If they answer yes, they will be prompted to enter the item ID of the item they would like and then enter the quantity they would like. If the quantity being asked is within what's available, they will receive a message confirming their purchase. If it is not, they will receive a message stating there is not enough of that item and they will be returned the shop prompt. If they select no at the shop prompt, a message will appear telling them to have a nice day and the connection will terminate.

## Screencaptures:

![Capture1](/images/SS1.jpg)

![Capture2](/images/SS2.jpg)

![Capture3](/images/SS3.jpg)

![Capture4](/images/SS4.jpg)

![Capture5](/images/SS62.jpg)

![Capture6](/images/SS5.jpg)


## Technologies Used: 
1. Node.js
2. NPM inquirer
3. NPM cli-table
4. mySQL


## My role: 
I was sole developer for this project. 