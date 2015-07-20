module.exports = function(obj) {
	if(!obj) {
		obj = {};
	}

	var handlers = {};

	obj.on = function(name, fn) {
		if(!handlers[name]) {
			handlers[name] = [];
		}

		handlers[name].push(fn);

		return obj;
	};

	obj.off = function(name, fn) {
		var handlerList = handlers[name];

		if(handlerList) {
			if(fn) {
				var pos = handlerList.indexOf(fn);

				if(pos !== -1) {
					handlerList.splice(pos, 1);
				}
			} else {
				delete handlers[name];
			}
		}

		return obj;
	};

	obj.emit = function(name) {
		var args = [].slice.call(arguments, 1);

		var handlerList = handlers[name];

		if(handlerList) {
			handlerList.forEach(function(handler) {
				handler.apply(null, args);
			});
		}

		return obj;
	};

	return obj;
};
