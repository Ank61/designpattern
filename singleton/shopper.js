
var logger = require('./logger');

//solution 1
//var logger = new Logger().getInstance();

//solution 2
//No need to intialte

class Shopper {

    constructor(name, money=0) {
        this.name = name;
        this.money = money;
        logger.log(`New Shopper: ${name} has ${money} in their account.`);
    }

}

module.exports = Shopper;


// If you take a look at the shopper.js file it also uses the Logger, and on line 3 
// it creates its own instance of the Logger. So, whenever we create new shoppers on line
//  10 within the constructor, we will log a message to the console that says a new shopper
//   has been created,this is their name and this is how much money they have in their account.