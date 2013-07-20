/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : UizeSite.Widgets.ExampleInfoTooltip.Widget Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2013 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 5
	docCompleteness: 100
*/

/*?
	Introduction
		The =UizeSite.Widgets.ExampleInfoTooltip.Widget= module implements a widget class.

		*DEVELOPERS:*

		Visual Sampler
			Below is a visual sampler of the =UizeSite.Widgets.ExampleInfoTooltip.Widget= class...

			..............................................................
			<< widget >>

			widgetClass: UizeSite.Widgets.ExampleInfoTooltip.VisualSampler
			..............................................................
*/

Uize.module ({
	name:'UizeSite.Widgets.ExampleInfoTooltip.Widget',
	superclass:'Uize.Widget.V2',
	required:[
		'UizeSite.Widgets.ExampleInfoTooltip.Html',
		'UizeSite.Widgets.ExampleInfoTooltip.Css'
	],
	builder:function (_superclass) {
		'use strict';

		function _updateUiTitle () {
			this.isWired && this.setNodeValue ('title',this.get ('title'));
		}

		function _updateUiDescription () {
			this.isWired && this.setNodeValue ('description',this.get ('description'));
		}

		function _updateUiKeywords () {
			this.isWired && this.setNodeValue ('keywords',this.get ('keywords') || '-- NONE --');
		}

		return _superclass.subclass ({
			instanceMethods:{
				updateUi:function () {
					_updateUiTitle.call (this);
					_updateUiDescription.call (this);
					_updateUiKeywords.call (this);
				}
			},

			set:{
				html:UizeSite.Widgets.ExampleInfoTooltip.Html
			},

			staticProperties:{
				cssModule:UizeSite.Widgets.ExampleInfoTooltip.Css
			},

			stateProperties:{
				_title:{
					name:'title',
					onChange:_updateUiTitle
				},

				_description:{
					name:'description',
					onChange:_updateUiDescription
				},

				_keywords:{
					name:'keywords',
					onChange:_updateUiKeywords
				}
			}
		});
	}
});
