const {EventEmitter} = require('events');

const birthdayEventListener = (name)=>{
	console.log(`Happy birthday ${name.name}`);
};

const myEmitter = new EventEmitter();

myEmitter.on('birthday',birthdayEventListener);
myEmitter.emit('birthday',{"name": "Nisdar"});