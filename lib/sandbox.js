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
			var frmAttr = {
				width:Settings.frame.size.w,
				height:Settings.frame.size.h,
				style:'border:0; margin:1px'
			};
			return div(
				apply(loadedTests, function(t){
					if(t instanceof Array){
						frmAttr.width = Settings.frame.size.w/t.length;
						return div(
							apply(t, function(tt){
								frmAttr.src = tt;
								//return iframe({src:tt, width:Settings.frame.size.w/t.length, height:Settings.frame.size.h, border:0});
								return iframe(frmAttr);
							})
						);
					}
					else{
						frmAttr.src = t;
						frmAttr.width = Settings.frame.size.w;
						return div(
							iframe(frmAttr)
							// iframe({src:t, width:Settings.frame.size.w, height:Settings.frame.size.h, border:0})
						);
					}
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
