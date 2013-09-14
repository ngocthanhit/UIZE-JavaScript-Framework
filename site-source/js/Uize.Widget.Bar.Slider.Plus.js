/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widget.Bar.Slider.Plus Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2005-2013 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 100
	docCompleteness: 10
*/

/*?
	Introduction
		The =Uize.Widget.Bar.Slider.Plus= class extends the barebones slider base class by adding buttons for incrementing and decrementing the slider's value.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widget.Bar.Slider.Plus',
	required:'Uize.Widget.Button',
	builder:function (_superclass) {
		'use strict';

		/*** Variables for Scruncher Optimization ***/
			var
				_true = true,
				_false = false
			;

		/*** Class Constructor ***/
			var
				_class = _superclass.subclass (
					null,
					function () {
						var m = this;

						/*** add the buttons for adjusting the slider's value ***/
							function _stepButtonHandler (_event) {
								function _roundOffJsMathError (_value) {
									return Math.round (_value * Math.pow (10,14)) / Math.pow (10,14); /* NOTE: this is a workaround for a REALLY ridiculous math inaccuracy in JavaScript when certain numbers are involved in multiplications. For example, .07 * 100 gives you 7.000000000000001 !!! */
								}
								var
									_domEvent = _event.domEvent,
									_divisions = _domEvent.shiftKey ? m._stepsCoarse : (_domEvent.ctrlKey ? m._stepsFine : m._stepsNormal),
									_minValue = m.get ('minValue'),
									_divisionSize = (m.get ('maxValue') - _minValue) / _divisions,
									_direction = _event.source.get ('name') == 'stepToMin' ? -1 : 1
								;
								m.set ({value:(Math [_direction < 0 ? 'ceil' : 'floor'] (_roundOffJsMathError ((m - _minValue) / _divisionSize)) + _direction) * _divisionSize + _minValue});
							}
							m._addChildButton ('setToMin',function () {m.set ({value:m.get ('minValue')})});
							m._addChildButton ('setToMax',function () {m.set ({value:m.get ('maxValue')})});
							m._addChildButton ('stepToMin',_stepButtonHandler);
							m._addChildButton ('stepToMax',_stepButtonHandler);

							m.wire ('Changed.value',function () {m._updateButtonsState ()});
							m._updateButtonsState ();
					}
				),
				_classPrototype = _class.prototype
			;

		/*** Private Instance Methods ***/
			_classPrototype._addChildButton = Uize.Widget.Button.addChildButton;

			_classPrototype._updateButtonsState = function () {
				var
					m = this,
					_children = m.children,
					_value = +m,
					_toMinEnabled = _value != m.get ('minValue') ? 'inherit' : false,
					_toMaxEnabled = _value != m.get ('maxValue') ? 'inherit' : false
				;
				_children.setToMin.set ({enabled:_toMinEnabled});
				_children.setToMax.set ({enabled:_toMaxEnabled});
				_children.stepToMin.set ({enabled:_toMinEnabled});
				_children.stepToMax.set ({enabled:_toMaxEnabled});
			};

		/*** State Properties ***/
			_class.stateProperties ({
				_stepsCoarse:{
					name:'stepsCoarse',
					value:2
				},
				_stepsFine:{
					name:'stepsFine',
					value:25
				},
				_stepsNormal:{
					name:'stepsNormal',
					value:5
				}
			});

		return _class;
	}
});

