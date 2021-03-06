/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Test.Uize.Str.Repeat Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2010-2013 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Test
	importance: 1
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Test.Uize.Str.Repeat= module defines a suite of unit tests for the =Uize.Str.Repeat= module.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Test.Uize.Str.Repeat',
	builder:function () {
		'use strict';

		return Uize.Test.resolve ({
			title:'Test for Uize.Str.Repeat Module',
			test:[
				Uize.Test.requiredModulesTest ('Uize.Str.Repeat'),
				Uize.Test.staticMethodsTest ([
					['Uize.Str.Repeat.repeat',[
						['Test that repeating an empty string one time produces an empty string',
							['',10],
							''
						],
						['Test that repeating an empty string a positive number of times produces an empty string',
							['',10],
							''
						],
						['Test that repeating a non-empty string zero times produces an empty string',
							['Blah',0],
							''
						],
						['Test that repeating a non-empty string a negative number of times produces an empty string',
							['Blah',-10],
							''
						],
						['Test that repeating a non-empty string one time produces that same string',
							['Blah',1],
							'Blah'
						],
						['Test that repeating a non-empty string a positive number of times works correctly',
							['Blah',10],
							'BlahBlahBlahBlahBlahBlahBlahBlahBlahBlah'
						],
						['Test that repeating a single space a positive number of times works correctly',
							[' ',10],
							'          '
						],
						{
							title:'Test that repeated use of repeating a single space works correctly (given the way that this special case is handled)',
							test:function () {
								return (
									Uize.Str.Repeat.repeat (' ',15) == '               ' &&
									Uize.Str.Repeat.repeat (' ',20) == '                    ' &&
									Uize.Str.Repeat.repeat (' ',9) == '         '
								);
							}
						}
					]]
				])
			]
		});
	}
});

