/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widget.Tree.Select Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2005-2013 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 90
	docCompleteness: 2
*/

/*?
	Introduction
		The =Uize.Widget.Tree.Select= class extends its superclass by adding support for selecting options from a hierarchical tree using regular select tags.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widget.Tree.Select',
	required:'Uize.Node',
	builder:function (_superclass) {
		'use strict';

		/*** Variables for Scruncher Optimization ***/
			var
				_null = null,
				_true = true,
				_false = false
			;

		/*** Class Constructor ***/
			var
				_class = _superclass.subclass (
					function (_properties) {
						var m = this;

						/*** Private Instance Properties ***/
							m._levels = _null;
							m._totalLevels = 0;
							m._selectionComplete = _false;

						/*** handle change in items ***/
							m.wire (
								'Changed.items',
								function (_event) {
									function _burrowDeeper (_item,_currentDepth) {
										m._totalLevels = Math.max (m._totalLevels,_currentDepth);
										if (_class.itemHasChildren (_item)) {
											for (
												var _itemNo = -1, _itemItems = _item.items, _itemItemsLength = _itemItems.length;
												++_itemNo < _itemItemsLength;
											)
												_burrowDeeper (_itemItems [_itemNo],_currentDepth + 1)
											;
										}
									}
									var _rootItem = {items:_event.newValue};
									m._levels = [[_rootItem]];
									m._totalLevels = 0;
									_burrowDeeper (_rootItem,0);
									m._updateUi ();
									m._onItemSelected (0);
								}
							);
					}
				),
				_classPrototype = _class.prototype
			;

		/*** Private Instance Methods ***/
			_classPrototype._updateUi = function () {
				var m = this;
				if (m.isWired) {
					for (var _levelNo = 0; ++_levelNo <= m._maxLevels;)
						m.displayNode ('level' + _levelNo,_levelNo <= m._totalLevels)
					;
				}
			};

			_classPrototype._onItemSelected = function (_thisLevelNo) {
				var m = this;
				if (m.isWired) {
					var
						_thisLevel = m._levels [_thisLevelNo],
						_thisSelect = m.getNode ('level' + _thisLevelNo),
						_nextLevelNo = _thisLevelNo + 1,
						_enableSelect = function (_select,_mustEnable) {
							_select.disabled = !_mustEnable;
							m.displayNode (_select,_mustEnable || m._displayDisabledSelects);
						}
					;
					for (var _levelNo = _nextLevelNo - 1; ++_levelNo <= m._totalLevels;) {
						var _select = m.getNode ('level' + _levelNo);
						_select.options.length = 0;
						_enableSelect (_select,_false);
					}
					var
						_thisItemNo = _thisSelect ? _thisSelect.selectedIndex - 1 : 0,
						_itemSelected = _thisLevel [_thisItemNo],
						_itemSelectedHasChildren = _class.itemHasChildren (_itemSelected),
						_selectionComplete = _thisItemNo > -1 && !_itemSelectedHasChildren
					;
					m.setNodeProperties ('submitButton',{disabled:!_selectionComplete});
					if (_itemSelectedHasChildren) {
						/* populate values for the next level's select box */
						m._levels.length = _nextLevelNo + 1;
						m._levels [_nextLevelNo] = _itemSelected.items;
						var
							_nextSelect = m.getNode ('level' + _nextLevelNo),
							_addOption = function (_optionText) {
								_nextSelect.options [_nextSelect.options.length] = new Option (_optionText);
							}
						;
						_addOption (m._chooseText);
						Uize.forEach (_itemSelected.items,function (_item) {_addOption (_item.title)});
						_enableSelect (_nextSelect,_true);
					}
					if (_selectionComplete != m._selectionComplete) {
						m.fire ('Selection ' + (_selectionComplete ? 'Complete' : 'Incomplete'));
						m._selectionComplete = _selectionComplete;
					}
				}
			};

		/*** Public Instance Methods ***/
			_classPrototype.updateUi = _classPrototype._updateUi;

			_classPrototype.wireUi = function () {
				var m = this;
				if (!m.isWired) {
					for (
						var
							_levelNo = 0,
							_getOnItemSelectedHandler = function (_levelNo) {
								return function () {m._onItemSelected (_levelNo)};
							}
						;
						++_levelNo <= m._maxLevels;
					)
						m.wireNode ('level' + _levelNo,'change',_getOnItemSelectedHandler (_levelNo))
					;

					_superclass.doMy (m,'wireUi');
					m._onItemSelected (0);
				}
			};

		/*** State Properties ***/
			_class.stateProperties ({
				_displayDisabledSelects:{
					name:'displayDisabledSelects',
					value:_true
				},
				_chooseText:{
					name:'chooseText',
					value:'--- SELECT ONE ---'
				},
				_maxLevels:{
					name:'maxLevels',
					value:20
				}
			});

		return _class;
	}
});

