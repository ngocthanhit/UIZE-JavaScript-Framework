/*
	UIZE JAVASCRIPT FRAMEWORK 2012-01-09

	http://www.uize.com/reference/Uize.Data.Simple.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
Uize.module({name:'Uize.Data.Simple',required:['Uize.String','Uize.String.Lines'],builder:function(){var _a,_b='string',_c=function(){};var _d='\\s*\\|\\s*',_e=new RegExp(_d),_f=new RegExp('^'+_d),_g=new RegExp(_d+'$');var _h=_c.getIndentationLevel=function(_i){return _i.length-_i.replace(/^\s*/,'').length;};_c.parse=function(_j){var _k=_j.simple,_l=_j.parseName!==false,_m=_j.ignoreWhitespaceLines,_n=/^([\.,~`:])\1+$/,_o=/^\s*#(\(+|\)+|<+|>+|\[+|\]+|\{+|\}+)$/,_p={'<':'>','>':'<','(':')',')':'(','[':']',']':'[','{':'}','}':'{'},_q={name:'',value:'',children:[]},_r=Uize.String.Lines.split(_k),_s=_r.length,_t=_s-1,_u,_i,_v=0,_w={_x:_q,_y:0,_z:''},_A=[_w];function _B(){var _C=[],_D=_h(_i),_E= -1,_F;while(_u<_t){_u++;if(_F=_r[_u]){var _G=_h(_F);if(_E<0)_E=_G;if(_G<=_D){_u--;break;}else{_C.push(_F.slice(_E));}}else{_C.push('');}}_C.length&& !_C[_C.length-1]&&_C.pop();return _C;}for(_u= -1;++_u<_s;){if((_i=_r[_u])&&(!_m||Uize.String.trim(_i))){if(_o.test(_i)){var _H=_i.charAt(_i.indexOf('#')+1);while(_u<_t){_u++;
var _I=_r[_u];if(_I.length==_i.length&&_o.test(_I)&&_p[_H]==_I.charAt(_I.indexOf('#')+1))break;}}else if(/^\s*###/.test(_i)){_B();}else{var _J=_i.replace(/^\s*/,''),_y=_i.length-_J.length;if(_y!=_w._y){if(_y>_w._y){var _K=_w._x.children;_v++;_w=_A[_v]={_x:_K[_K.length-1],_y:_y};}else{while(_v&&_w._y>_y){_v--;_w=_A[_v];}}}var _K=_w._x.children,_L=_K.length,_M,_N;if(_l){var _O=_J.match(/^([^:]*[^:\s])?(?:\s*:\s*(.*))?$/);_M=_O[1]||'';_N=_O[2]||'';}else{_M='';_N=_J;}if(_l&& !_M&&_L){var _P=_K[_L-1];_M=_P.name;if(_M!=_w._z){_w._z=_M;!_P.value&& !_P.children.length&&_L--;}}if(_n.test(_N)){var _H=_N.charAt(0);_N='';while(_u<_t){if(_n.test(_J=(_i=_r[++_u]).slice(_y))&&_J.charAt(0)==_H){break;}else{_N+=_J+'\n';}}}else if(_N==':'){_N=_B().join('\n');}else if(_N=='>'){_N=_B();}else{if(_l&&_N.charAt(0)=='|'&&_N.slice(-1)=='|')_N=Uize.String.split(_N.replace(_f,'').replace(_g,''),_e);}if(_l&& !_M){var _Q=_w._x.value;if(typeof _Q==_b)_w._x.value=_Q?[_Q]:[];_w._x.value.push(_N);}else{_K[_L]={name:_M,value:_N,children:[]};}
}}}_j.collapseChildren&&_R(_q);return _q;};var _R=_c.collapseChildren=function(_q,_S){var _T=_q.children;delete _q.name;delete _q.children;delete _q.value;if(_T){var _U=Uize.lookup(_a,0,true),_V=0;for(var _W= -1,_X=_T.length;++_W<_X;){var _Y=_T[_W],_Z=_Y.name||'',_0=_Y.children&&_Y.children.length?_Y:_Y.value;if(_0===_a)_0=_S;_R(_Y,_S);if(_U[_Z]){if(_U[_Z]==1)_q[_Z]=[_q[_Z]];_q[_Z].push(_0);_U[_Z]++;}else{_V++;_U[_Z]=1;_q[_Z]=_0;}}if(_V==1&&_U[''])_q=_U['']==1?[_q['']]:_q[''];}return _q;};return _c;}});