var asEmitter = require('../emitter');

var test = require('tape');

var tapSpec = require('tap-spec');


test.createStream().pipe(tapSpec()).pipe(process.stdout);


var emitter;

test('create emitter', function(t) {
	emitter = asEmitter();

	t.end();
});

test('can register and get events', function(t) {
	t.plan(3);

	emitter.on('name', function(firstArg, arg2) {
		t.pass('Receives event');

		t.equal(firstArg, 'testvalue');

		t.equal(arg2, 67);
	});

	emitter.emit('name', 'testvalue', 67);
});

test('unregister a handler and it doesnt respond', function(t) {
	t.plan(1);

	emitter.on('name', function(firstArg, arg2) {
		t.pass('Receives event');

		t.equal(firstArg, 'testvalue');

		t.equal(arg2, 67);
	});

	emitter.off('name');

	emitter.emit('name', 'testvalue', 67);

	setTimeout(function() {
		t.pass('Done');
	}, 100);
});
