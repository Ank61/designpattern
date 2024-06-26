class Observer {
    constructor(name) {
      this.name = name;
    }
  
    update(newState) {
      console.log(`${this.name} received state change: ${newState}`);
    }
  }
  
  module.exports = Observer;
  