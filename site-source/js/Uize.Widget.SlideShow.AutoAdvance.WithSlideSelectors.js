/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widget.SlideShow.AutoAdvance.WithSlideSelectors Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2010-2013 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 2
	codeCompleteness: 0
	docCompleteness: 2
*/

/*?
	Introduction
		The =Uize.Widget.SlideShow.AutoAdvance.WithSlideSelectors= extends its superclass by adding an options widgets for selecting individual slides.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widget.SlideShow.AutoAdvance.WithSlideSelectors',
	required:'Uize.Widget.Options',
	builder:function (_superclass) {
		'use strict';

		/*** Class Constructor ***/
			var
				_class = _superclass.subclass (
					null,
					function () {
						var m = this;

						/*** add the options widget ***/
							var _options = m.addChild ('options',Uize.Widget.Options);

							/*** keep options widget synchronized to slideshow ***/
								m.wire ({
									'Changed.slideNo':function (_event) {m.children.options.set ({value:_event.newValue})},
									'Changed.totalSlides':function () {m._updateOptionsValueAndValues ()}
								});

							/*** keep slideshow synchronized to options widget ***/
								_options.wire (
									'Changed.value',
									function (_event) {
										var _newSlideNo = _event.newValue;
										if (_newSlideNo != m.get ('slideNo')) {
											m.stopThenResume ();
											m.set ({slideNo:_newSlideNo});
										}
									}
								);

						/* HACK!!! */
							m.wire ('Changed.slideNo',function () {m.wipeDone ()});

						/*** initialization ***/
							m._updateOptionsValueAndValues ();
							m.set ({slideNo:m._startSlideNo}); // HACK
					}
				),
				_classPrototype = _class.prototype
			;

		/*** Private Instance Methods ***/
			_classPrototype._updateOptionsValueAndValues = function () {
				this.children.options.set ({
					value:this.get ('slideNo'),
					values:Uize.map (this.get ('totalSlides'),'key')
				});
			};

		/*** State Properties ***/
			_class.stateProperties ({
				_startSlideNo:'startSlideNo' // HACK
			});

		return _class;
	}
});

