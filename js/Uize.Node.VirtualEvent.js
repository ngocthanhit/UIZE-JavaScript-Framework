/*
	UIZE JAVASCRIPT FRAMEWORK 2012-01-09

	http://www.uize.com/reference/Uize.Node.VirtualEvent.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Node.VirtualEvent',builder:function(){var _a=function(){},_b=true,_c=false;var _d={};function _e(_f){return _f.toLowerCase().replace(/\s+/g,'');}function _g(_h,_i,_j){var _f=(_h?'Shift':'')+(_i?'Ctrl':'')+(_j?'Alt':'')+'Click';_a[_f=_f.charAt(0).toLowerCase()+_f.slice(1)]=_a.register(_f,function(){return _a.getCached(_f+'()',function(_k,_l,_m){Uize.Node.wire(_k,'click',function(_n){_n.shiftKey==_h&&_n.ctrlKey==_i&&_n.altKey==_j&& !_n.metaKey&&_l.call(_k,_n);},_m);});});}_a.resolve=function(_f){var _o=_f.indexOf('('),d,_p=eval('d=['+_f.slice(_o+1,-1)+']');return(_d[_f=_f.slice(0,_o)]||_d[_e(_f)]).apply(0,_p);};_a.getCached=function(_f,_q){return(_d[_f]||(_d[_f]={virtualDomEvent:_f,wire:_q}))};_a.makeRemainInStateEventMaker=function(_f,_r,_s,_t,_u,_v){return _a.register(_f,function(_w){_w=Uize.toNumber(_w,_r);return _a.getCached(_f+'('+_w+')',function(_k,_l,_m){function _x(_y,_z){if(Uize.isArray(_y)){for(var _A=_y.length;--_A> -1;)Uize.Node.wire(_k,_y[_A],_z,_m);}else{
Uize.Node.wire(_k,_y,_z,_m);}}var _B={},_C=_c,_D,_E=function(){_D=clearTimeout(_D)};_x(_s,function(_n){_u!==_c&&_E();if(!_D&&(!_C||_v!==_c)){Uize.copyInto(_B,_n);_D=setTimeout(function(){_C=_b;_l.call(_k,_B);},_w);}});_x(_t,function(){_C=_c;_E();});});});};_a.register=function(_f,_F){return _d[_f]=_d[_e(_f)]=_F;};function _G(_f){_a[_f]=_a.makeRemainInStateEventMaker.apply(0,arguments);}_G('keyRemainDown',500,'keydown','keyup',_c);_G('keyRemainUp',500,'keyup','keydown');_G('mouseRemainDown',500,'mousedown',['mouseup','mouseout']);_G('mouseRemainOut',500,'mouseout','mouseover');_G('mouseRemainOver',500,'mouseover',['mouseout','mousedown']);_G('mouseRemainUp',500,'mouseup','mousedown');_G('mouseRest',500,['mouseover','mousemove'],['mouseout','mousedown'],_b,_c);_G('remainBlurred',500,'blur','focus');_G('remainFocused',500,'focus','blur');_g(_c,_c,_c);_g(_b,_c,_c);_g(_c,_b,_c);_g(_c,_c,_b);_g(_c,_b,_b);_g(_b,_b,_c);_g(_b,_c,_b);_g(_b,_b,_b);return _a;}});