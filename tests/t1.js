(function(){
	var x = 2;
	var y = 2;
	console.log('t1 executed');
	Sandbox.assert(x+y, 4);
	Sandbox.writeTestState('tests/t1.js', 'OK');
})();
