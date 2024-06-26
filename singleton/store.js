var logger = require('./logger');

//solution 1
//var logger = new Logger().getInstance();

//solution 2
//No need to intialte

class Store {

    constructor(name, inventory=[]) {
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
    }

}

module.exports = Store;



// Now if you look at this file we actually use the Logger. On line one, we import the Logger class, and
//  on line three we create a new instance called Logger so that we can actually use this class. So on 
//  line 10, within the store constructor we will log a new message every time a store is created. So it 
//  says New Store and it gives us the name of the store and how many items are in stock.