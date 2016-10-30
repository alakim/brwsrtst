var Sandbox = (function($, $H){
	var Settings = {
		frame:{
			size:{w:900, h:50}
		}
	};
	
	function assert(val, expected, msg){
		if(val!=expected)
			console.log('Assertion failed: '+val+'!='+expected);
	}

	var loadedTests = [];
	function loadTests(tests){
		loadedTests = tests;
	}

	function writeTests(pnl){
		pnl = $(pnl);
		pnl.html((function(){with($H){
			return div(
				apply(loadedTests, function(t){
					return div(
						iframe({src:t, width:Settings.frame.size.w, height:Settings.frame.size.h})
					);
				})
			);
		}})());
	}

	$(function(){
		writeTests('#pnlMain');
	});

	return {
		loadTests:loadTests,
		assert: assert
	};
})(jQuery, Html.version('4.1.0'));
