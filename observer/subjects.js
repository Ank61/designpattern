const EventEmitter = require('events');

class Subject extends EventEmitter {
  constructor() {
    super();
    this.state = 0;
  }

  setState(newState) {
    this.state = newState;
    this.emit('stateChange', newState);
  }

  getState() {
    return this.state;
  }
}

module.exports = Subject;
