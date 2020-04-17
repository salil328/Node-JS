var event = require('events');
// initializing event emitter instances
var eventEmitter = new event.EventEmitter();

eventEmitter.on('clicked',function(button){
console.log(button + "is clicked")

})
eventEmitter.emit('clicked','button1');