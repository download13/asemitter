# tiny-emitter

## Install

`npm install tiny-emitter`

## Examples

```javascript
var asEmitter = require('tiny-emitter');


// Make a class instance an event emitter
function SomeObject() {
	asEmitter(this); // this is now an event emitter

	this.on('someevent', function() {
		// Do some stuff
	});
}

var instance = new SomeObject();


// Make any object into an event emitter
var emitter = asEmitter({
	getState: function() {
		return 'whatever';
	}
});


// It event works without an object
var anotherEmitter = asEmitter();

anotherEmitter.emit('testevent');
```
