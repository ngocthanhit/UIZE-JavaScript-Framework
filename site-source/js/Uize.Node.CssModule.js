/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Node.CssModule Class
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
	docCompleteness: 5
*/

/*?
	Introduction
		The =Uize.Node.CssModule= class....

		*DEVELOPERS:* `Chris van Rensburg`
*/

/* TODO:
	- add support for removing CSS for a module (this will be tricky, given the packing that gets done for IE)
	- add support for CSS being in the document already (such as when server renders HTML for a page)
*/

Uize.module ({
	name:'Uize.Node.CssModule',
	superclass:'Uize.Class',
	required:'Uize.Node',
	builder:function (_superclass) {
		'use strict';

		/*** General Variables ***/
			var
				_rulesPerStylesheet =
					Uize.Node.isIe
						? navigator.appVersion.match (/MSIE (\d+(\.\d*)?)/) [1] < 10 ? 4095 : 65534
							/*
								http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/internet-explorer-stylesheet-rule-selector-import-sheet-limit-maximum.aspx
								http://stackoverflow.com/questions/9906794/internet-explorers-css-rules-limits
							*/
						: Infinity
			;

		return _superclass.subclass ({
			staticMethods:{
				add:function () {
					var
						_document = document,
						_styleSheets = _document.styleSheets,
						_head = _document.head || _document.getElementsByTagName ('head') [0],
						_css = this.css,
						_previousStyleSheetsLength = _styleSheets.length,
						_styleNode = _document.createElement ('style')
					;
					if (Uize.isFunction (_css))
						_css = _css.call (this,{pathToModules:Uize.pathToResources})
					;
					console.log (_css);
					_styleNode.type = 'text/css';
					_styleNode.textContent = _css;
					_styleNode.id = 'UIZE_' + Uize.getGuid ();
					_head.appendChild (_styleNode);

					if (_styleSheets.length == _previousStyleSheetsLength) {
						if (Uize.Node.isIe) {
							/*** find all stylesheets created by UIZE ***/
								var
									_uizeStyleSheets = [],
									_uizeStyleSheetsLength = 0
								;
								for (var _styleSheetNo = -1, _styleSheet; ++_styleSheetNo < _previousStyleSheetsLength;) {
									if ((_styleSheet = _styleSheets [_styleSheetNo]).id.slice (0,5) == 'UIZE_')
										_uizeStyleSheets [_uizeStyleSheetsLength++] = _styleSheet
									;
								}

							if (_uizeStyleSheetsLength) {
								var
									_uizeStyleSheetNo,
									_useFirstEmptyUizeStyleSheetAtTail = function () {
										/*** find last non-empty UIZE stylesheet ***/
											for (
												_uizeStyleSheetNo = _uizeStyleSheetsLength;
												--_uizeStyleSheetNo >= 0 && !_uizeStyleSheets [_uizeStyleSheetNo].cssRules.length;
											);

										var _availableUizeStyleSheetAtTail = _uizeStyleSheetNo + 1 < _uizeStyleSheetsLength;
										if (_availableUizeStyleSheetAtTail)
											_uizeStyleSheets [_uizeStyleSheetNo + 1].cssText = _css
										;
										return _availableUizeStyleSheetAtTail;
									}
								;

								if (!_useFirstEmptyUizeStyleSheetAtTail ()) {
									/*** find first non-full UIZE stylesheet ***/
										for (
											var _nonFullUizeStyleSheetNo = -1;
											++_nonFullUizeStyleSheetNo < _uizeStyleSheetsLength &&
											_uizeStyleSheets [_nonFullUizeStyleSheetNo].cssRules.length >= _rulesPerStylesheet;
										);

									if (_nonFullUizeStyleSheetNo < _uizeStyleSheetsLength) {
										var
											_styleRulesToPack = [],
											_styleRulesToPackLength = 0
										;

										/*** gather rules from all non-full UIZE stylesheets ***/
											for (
												_uizeStyleSheetNo = _nonFullUizeStyleSheetNo - 1;
												++_uizeStyleSheetNo < _uizeStyleSheetsLength;
											) {
												for (
													var
														_cssRuleNo = -1,
														_cssRules = _uizeStyleSheets [_uizeStyleSheetNo].cssRules,
														_cssRulesLength = _cssRules.length
													;
													++_cssRuleNo < _cssRulesLength;
												)
													_styleRulesToPack [_styleRulesToPackLength++] = _cssRules [_cssRuleNo].cssText
												;
											}

										/*** efficiently pack rules from all non-full UIZE stylesheets ***/
											for (
												_uizeStyleSheetNo = _nonFullUizeStyleSheetNo - 1;
												++_uizeStyleSheetNo < _uizeStyleSheetsLength;
											)
												_uizeStyleSheets [_uizeStyleSheetNo].cssText =
													_styleRulesToPack.splice (0,_rulesPerStylesheet).join ('')
											;

										_useFirstEmptyUizeStyleSheetAtTail ();
									}
								}
							}
						}
					}
				}
			},

			staticProperties:{
				css:''
			}
		});
	}
});

