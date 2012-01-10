/*
	UIZE JAVASCRIPT FRAMEWORK 2012-01-09

	http://www.uize.com/reference/Uize.Widget.FormElement.Select.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Widget.FormElement.Select',builder:function(d_a){var d_b=d_a.subclass(null,function(){var d_c=this;d_c.wire('Changed.value',function(){if(d_c.isWired){var d_d=d_c.getNode('input');d_d&&d_c.set({d_e:d_d.selectedIndex})}});}),d_f=d_b.prototype;d_f.d_g=function(){var d_c=this;if(d_c.isWired){var d_h=d_c.get('value'),d_i=d_c.d_i,d_d=d_c.getNode('input');if(d_i&&d_d&&d_c.get('type')=='select-one'){var d_j=false;d_c.d_e= -1;for(var d_e= -1,d_k=d_i.length,d_l=d_d.options,d_m=d_l.length;++d_e<d_k;){var d_n=d_i[d_e],d_o=d_n.name,d_p=d_h==d_o,d_q;if(d_e<d_m)d_q=d_l[d_e];else{d_q=document.createElement('option');try{d_d.add(d_q,null)}catch(d_r){d_d.add(d_q)}}d_c.setNodeProperties(d_q,{value:d_o,text:(d_n.valueDetails&&d_n.valueDetails.displayName)||d_n.displayName||d_o,selected:d_p});if(d_p)d_j=true;}for(var d_s=d_m-1;d_s>=d_e;d_s--)d_d.remove(d_s);if(!(d_j&&d_h)&&d_i.length)d_c.set({value:d_i[0].name});}}};d_f.wireUi=function(){var d_c=this;if(!d_c.isWired){d_a.prototype.wireUi.call(d_c);var
 d_i=d_c.d_i,d_d=d_c.getNode('input');if(d_i.length)d_c.d_g();else if(d_d&&d_c.get('type')=='select-one'){for(var d_t=d_c.get('value'),d_l=d_d.options,d_s= -1,d_m=d_l.length;++d_s<d_m;){var d_q=d_l[d_s],d_u=d_q.value,d_v=d_q.text,d_o=d_u!=null?d_u:d_v;d_i.push({name:d_o,displayName:d_v});if(d_o==d_t)d_q.selected=true;}(d_c.d_e=d_d.selectedIndex)> -1&&d_c.set({value:d_i[d_c.d_e].name});}}};d_b.registerProperties({d_e:{name:'valueNo',value:-1},d_i:{name:'values',onChange:d_f.d_g,value:[]}});return d_b;}});