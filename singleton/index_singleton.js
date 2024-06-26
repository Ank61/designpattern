var logger = require('./logger');
var Shopper = require('./shopper');
var Store = require('./store');

//solution 1
//var logger = new Logger().getInstance();

//solution 2
//No need to intialte


logger.log('starting app...');

var alex = new Shopper('alex', 500)
var ski_shop = new Store('Steep and Deep Supplies', [
    {
        item: 'Downhill Skis',
        qty: 5,
        price: 750
    },
    {
        item: 'Knit Hat',
        qty: 20,
        price: 5
    }
])

logger.log('finished config...');

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`   ${log.message}`));


// The problem is, is because we have three instances of the Logger, we’re only looking at the information
//  for the main instance. So in our debugging information down here we see two logs total and those logs 
//  are only starting app and finished config. Now the reason is, is whenever we looking at the current Logger
//   instance, we’re only looking at the instance that was created within our main application.

// Not the instance that was created within the shopper and the store. When we have this type of a problem
//  a singleton can really come in handy.

//1. Problems : We dont recieve the other instance logs. We only see the active instance log (Main)
// 2. WE have to intialiaze the instance again and again

//Solution : Singleton - Single instance of the class