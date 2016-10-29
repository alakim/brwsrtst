(function(){
	try{
		var x = 22;
		Sandbox.writeTestState('tests/t2.js', 'OK');
	}
	catch(e){
		Sandbox.writeTestState('tests/t2.js', 'Error: '+e);
	}
})();
