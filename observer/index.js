const Subject = require('./subjects');
const Observer = require('./observer');

// Create a subject
const subject = new Subject();

// Create observers
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

// Register observers with the subject
//Event lsitener first intialize
subject.on('stateChange', (newState) => observer1.update(newState));
subject.on('stateChange', (newState) => observer2.update(newState));

// Change the state of the subject
//Secondly, setState will emit the event 
subject.setState(1); // Both observers will be notified
subject.setState(2); // Both observers will be notified
