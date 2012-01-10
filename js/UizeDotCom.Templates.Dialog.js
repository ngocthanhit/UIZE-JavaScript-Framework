/*
	UIZE Web Site 2012-01-09

	http://www.uize.com/reference/UizeDotCom.Templates.Dialog.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'UizeDotCom.Templates.Dialog',builder:function(){var _a=function(){};_a.process=function(input){var output=[];
output.push('\r\n<!-- dialog UI -->\r\n\r\n<div id="',input.idPrefix,'-shield" class="dialogShield"></div>\r\n\r\n<div id="',input.idPrefix,'" class="dialog ',input.dialogClass,'">\r\n	<div class="dialogShadow4"></div>\r\n	<div class="dialogShadow3"></div>\r\n	<div class="dialogShadow2"></div>\r\n	<div class="dialogShadow"></div>\r\n	<div class="dialogDecoration"></div>\r\n\r\n	<!-- sides -->\r\n		<div id="',input.idPrefix,'_resizer-west" class="dialogCornerEastWest dialogEdgeWest"></div>\r\n		<div id="',input.idPrefix,'_resizer-east" class="dialogCornerEastWest dialogEdgeEast"></div>\r\n		<div id="',input.idPrefix,'_resizer-north" class="dialogCornerNorthSouth dialogEdgeNorth"></div>\r\n		<div id="',input.idPrefix,'_resizer-south" class="dialogCornerNorthSouth dialogEdgeSouth"></div>\r\n\r\n	<!-- corners -->\r\n		<div id="',input.idPrefix,'_resizer-northWest" class="dialogCornerCorner dialogEdgeWest dialogEdgeNorth"></div>\r\n		<div id="',input.idPrefix,'_resizer-northEast" class="dialogCornerCorner dialogEdgeEast dialogEdgeNorth"></div>\r\n		<div id="',input.idPrefix,'_resizer-southWest" class="dialogCornerCorner dialogEdgeWest dialogEdgeSouth"></div>\r\n		<div id="',input.idPrefix,'_resizer-southEast" class="dialogCornerCorner dialogEdgeEast dialogEdgeSouth"></div>\r\n\r\n	<!-- title bar -->\r\n		<div class="dialogBar dialogTitleBar">\r\n			',input.topLeftButtons,'\r\n			<div id="',input.idPrefix,'-title" class="dialogTitle"></div>\r\n			<a id="',input.idPrefix,'_close" class="dialogCloseButton button">X</a>\r\n		</div>\r\n\r\n	<!-- contents -->\r\n		<div id="',input.idPrefix,'-contents" class="dialogContents">\r\n			',input.contents,'\r\n		</div>\r\n\r\n	<!-- status bar -->\r\n		<div class="dialogBar dialogStatusBar">\r\n			<a id="',input.idPrefix,'_cancel" class="dialogCancelButton button"><span id="',input.idPrefix,'_cancel-text">CANCEL</span></a>\r\n			<a id="',input.idPrefix,'_ok" class="dialogOkButton button"><span id="',input.idPrefix,'_ok-text">OK</span></a>\r\n		</div>\r\n</div>\r\n\r\n');
return output.join('');};_a.input={idPrefix:'string',contents:'string',dialogClass:'string'};return _a;}});