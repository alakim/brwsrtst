var Sandbox = (function($, $H){

	var testStates = {body:{src:'body', state:false}};
	
	function assert(val, expected, msg){
		if(val!=expected)
			console.log('Assertion failed: '+val+'!='+expected);
	}

	function loadTests(tests){
		try{
			for(var t,i=0; t=tests[i],i<tests.length; i++){
				testStates[t] = {src:t, state:false};
				try{
					document.write('<scr'+'ipt src="'+t+'"></scr'+'ipt>');
				}
				catch(e){
					Sandbox.writeTestState(t, 'Error: '+e);
				}
			}
		}
		catch(e){
			console.log('Error: ', e);
		}
	}

	function writeResult(pnl){pnl=$(pnl);
		console.log('writing states: ', testStates, pnl[0]);
		pnl.html((function(){with($H){
			return div(
				p('Test Results:'),
				apply(testStates, function(ts){
					if(ts.src=='body') return;
					return div(ts.src, ': ', ts.result);
				})
			);
		}})());
	}
	
	$(function(){
		Sandbox.writeTestState('body', 'Ready');
	});

	return {
		loadTests:loadTests,
		assert: assert,
		writeTestState: function(src, result){
			testStates[src].result = result;
			testStates[src].state = true;
			console.log('test states: ', testStates);
			for(var k in testStates){
				if(!testStates[k].state) return;
			}
			writeResult('#pnlMain');
		},
	};
})(jQuery, Html.version('4.1.0'));
