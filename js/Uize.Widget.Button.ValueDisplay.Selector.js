/*
	UIZE JAVASCRIPT FRAMEWORK 2012-01-09

	http://www.uize.com/reference/Uize.Widget.Button.ValueDisplay.Selector.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.Button.ValueDisplay.Selector',required:'Uize.Node.Classes',builder:function(e_a){var e_b=Uize.Node.Classes;var e_c=e_a.subclass(null,function(){var e_d=this;function e_e(){e_d.e_e()}e_d.wire({'Changed.busyInherited':e_e,'Changed.enabledInherited':e_e,'Changed.state':e_e,'Changed.selected':function(){e_d.e_f()},'Changed.valueDetails':function(){e_d.e_g()}});}),e_h=e_c.prototype;e_h.e_i=function(e_j){this.isWired&&this.setNodeProperties('input',e_j)};e_h.e_g=function(){var e_d=this,e_k=e_d.get('valueDetails');if(e_d.isWired){if(e_k){e_k.value!=null&&e_d.e_i({value:e_k.value});e_k.displayName!=null&&e_d.setNodeInnerHtml('displayName',e_k.displayName);}else e_d.displayNode('',false);}};e_h.e_e=function(){var e_d=this;if(e_d.isWired){var e_l=e_d.get('state'),e_m=e_d.get('enabledInherited')&& !e_d.get('busyInherited');e_d.e_i({readOnly:!e_m,disabled:!e_m});e_b.setState(e_d.getNode(),['',e_d.e_n,e_d.e_o,e_d.e_p],(!e_m?3:(e_l=='down'?2:e_l=='over'&&1)||0));}};e_h.e_f=function(){
var e_d=this;if(e_d.isWired){var e_q=e_d.get('selected');e_d.e_i({checked:e_q});e_b.setState(e_d.getNode(),['',e_d.e_r],e_q);}};e_h.updateUi=function(){var e_d=this;if(e_d.isWired){e_d.e_g();e_d.e_e();e_d.e_f();e_a.prototype.updateUi.call(e_d);}};e_h.wireUi=function(){var e_d=this;if(!e_d.isWired){var e_s=e_d.getNode('input'),e_t=e_d.getNode('displayName');;e_d.wireNode(e_s,'change',function(){e_d.set({selected:e_s.checked})});e_t&&e_t.setAttribute('for',null);e_a.prototype.wireUi.call(e_d);}};e_c.registerProperties({e_o:'cssClassActive',e_p:'cssClassDisabled',e_r:'cssClassSelected',e_n:'cssClassTentativeSelected'});return e_c;}});