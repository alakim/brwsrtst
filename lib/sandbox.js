var Sandbox = (function($, $H){
	var Settings = {
		panel:'#pnlMain',
		frame:{
			size:{w:900, h:20}
		}
	};

	var px = $H.unit('px');
	$H.writeStylesheet({
		'body':{
			fontFamily:'Verdana, Arial, Sans-Serif',
			fontSize:px(12)
		}
	});
	
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
		writeTests(Settings.panel);
	});

	return {
		loadTests:loadTests,
		assert: assert
	};
})(jQuery, Html.version('4.1.0'));
