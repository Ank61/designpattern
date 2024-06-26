// Import the NotificationFactory class
const NotificationFactory = require('./notificationabstract');

// Create an SMS notification
const smsNotification = NotificationFactory.createNotification('sms');
smsNotification.send(); // Output: Sending SMS notification

try {
  const unknownNotification = NotificationFactory.createNotification('unknown');
  unknownNotification.send();
} catch (error) {
  console.error(error.message); // Output: Unknown notification type
}

//Benefit : 
// Factory pattern lets you create object without specifying the exact class object that will be created.
//This can simplify object creation, especially when dealing with asynchronous operations such as reading files or making API calls. 
//Code readability and reusability.
//The Factory pattern is useful when there is complex object creation logic that should not be coupled to client code.