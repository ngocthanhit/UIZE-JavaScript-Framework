/*
	UIZE JAVASCRIPT FRAMEWORK 2012-01-09

	http://www.uize.com/reference/Uize.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
(function(){var _a=Uize=function(){},_b,_c='string',_d='object',_e='number',_f='boolean',_g=Function,_h=Array,_i=false,_j=true,_k=null;var _l=0,_m=[],_n='[#modulePath]',_o,_p= !!_h.forEach,_q= !!(_h.indexOf&&_h.lastIndexOf),_r={},_s={Uize:_a};function _t(_u){return(_v(_u)?_u:_u?{constructor:_b,toLocaleString:_b,toString:_b,valueOf:_b}:{});}function _w(_x,_y){var _z=_x[0];if(_v(_z)){var _A=_x[1],_B=_x.length;_v(_A)&&_y(_z,_A);if(_B>2){for(var _C=1;++_C<_B;)_v(_A=_x[_C])&&_y(_z,_A);;}}return _z;}_a.capFirstChar=function(_D){return _D.charAt(0).toUpperCase()+_D.slice(1);};var _E=_a.clone=function(_F){if(_F==_b)return _F;var _G=typeof _F;if(_G==_c||_G==_e||_G==_f||_H(_F))return _F;var _I=_F.constructor;if(_I==Date||_I==String||_I==Number||_I==Boolean){return new _I(_F.valueOf())}else if(_I==RegExp){return new RegExp(_F.source,(_F.global?'g':'')+(_F.ignoreCase?'i':'')+(_F.multiline?'m':''));};var _J=_I==Object,_K= !_J&&_L(_F);if(_J||_K){var _M,_N,_O=_J?{}:[];if(_K)_O.length=_F.length;for(var _P in _F)_O[_P]=
(_N=typeof(_M=_F[_P]))==_c||_N==_e||_N==_f||_M==_b?_M:_E(_M);return _O;}return _F;};_a.constrain=function(_F,_Q,_R){return(_Q<_R?(_F<_Q?_Q:_F>_R?_R:_F):(_F<_R?_R:_F>_Q?_Q:_F));};_a.inRange=function(_F,_Q,_R){return _F==_a.constrain(_F,_Q,_R);};var _S=_a.copyInto=function(){return _w(arguments,function(_z,_A){for(var _T in _A)_z[_T]=_A[_T];});};Uize.mergeInto=function(){function _U(_z,_A){var _V,_W;for(var _T in _A)(_X(_W=_A[_T])&&_X(_V=_z[_T]))?_U(_V,_W):(_z[_T]=_W);}return _w(arguments,_U);};var _Y=_a.forEach=function(_Z,_0,_1,_2){if(_Z){var _3=_L(_Z);if(!_3||_Z.length){if(typeof _0==_c)_0=new _g('value','key','source',_0);if(_3){if(_p&& !_2){_Z.forEach(_0,_1);}else{for(var _4= -1,_5=_Z.length;++_4<_5;)(_2||_4 in _Z)&&_0.call(_1,_Z[_4],_4,_Z);}}else if(_v(_Z)){for(var _4 in _Z)_0.call(_1,_Z[_4],_4,_Z);}else if(typeof _Z==_e){for(var _4= -1;++_4<_Z;)_0.call(_1,_4,_4,_Z);}}}};var _6=_a.map=function(_Z,_7,_8){if(typeof _Z==_e){_Z=new _h(_Z);if(typeof _8!=_d)_8=_Z;}if(typeof _8!=_d)_8=_8===_i?_Z:_L(_Z)?[]:{};
if(typeof _7==_c)_7=new _g('value','key','return '+_7);_Y(_Z,function(_F,_9){var _ba=_7.call(_Z,_F,_9);if(_8)_8[_9]=_ba;},0,_j);return _8;};_a.callOn=function(_8,_bb,_bc){var _bd=_be(_bb),_bf= !_bd&&_H(_bb);_bc||(_bc=_m);function _bg(_8){if(_8!=_b)_X(_8)||_L(_8)?_Y(_8,_bg,0,_j):_bf||(_bd&&_H(_8[_bb]))?(_bf?_bb:_8[_bb]).apply(_8,_bc):0;}if(_bd||_bf)_bg(_8);};_a.defaultNully=function(_F,_bh){return _F!=_b?_F:_bh;};var _bi=_a.getModuleByName=function(_bj){var _bk;return(_s[_bj]||(_bj=='*'&&_s)||((_bk=(new _g('try {return '+_bj+'} catch (e) {}'))())&&(_s[_bj]=_bk)));};_a.indexIn=function(_Z,_F,_bl,_bm){var _bn=_bo(_Z),_O= -1;if(_bn||_v(_Z)){var _bp=_bn?_Z:_bq(_Z);if((_bm=_bm!==_i)&&_q){_O=_h[_bl?'lastIndexOf':'indexOf'](_bp,_F);}else{for(var _br=_bp.length,_4=_bl?_br: -1,_bs=_bl? -1:1;--_br>=0;){var _bt=_bp[_4+=_bs];if(_bm?_bt===_F:_bt==_F){_O=_4;break;}}}if(!_bn&&_O> -1)_O=_bu(_Z)[_O];}return _O;};var _bu=_a.keys=function(_bv){var _O=[];if(!_be(_bv))for(var _9 in _bv)_O.push(_9);return _O;};
_a.totalKeys=function(_bv){var _O=0;if(!_be(_bv))for(var _9 in _bv)_O++;return _O;};var _bq=_a.values=values=function(_bv){if(_L(_bv))return _bv;var _O=[];if(!_be(_bv))for(var _9 in _bv)_O.push(_bv[_9]);return _O;};_a.meldKeysValues=function(_bu,_bq){var _O={};for(var _bw= -1,_bx=Math.min(_bu.length,_bq.length);++_bw<_bx;)_O[_bu[_bw]]=_bq[_bw];return _O;};_a.min=function(_bv){return Math.min.apply(0,_bq(_bv));};_a.max=function(_bv){return Math.max.apply(0,_bq(_bv));};_a.reverseLookup=function(_bv,_u){var _by=_t(_u);if(!_be(_bv))for(var _9 in _bv)_by[_bv[_9]+'']=_9;return _by;};_a.lookup=function(_bq,_bz,_u){var _by=_t(_u);if(arguments.length==1)_bz=_j;if(_bq!=_b){for(var _bA= -1,_bB=_bq.length;++_bA<_bB;)_by[_bq[_bA]]=_bz;}return _by;};var _v=_a.isObject=function(_F){return!!_F&&typeof _F==_d;};var _X=_a.isPlainObject=function(_F){return(_F!=_b&&(_F.constructor==Object||_F.constructor.prototype.hasOwnProperty('hasOwnProperty')));};var _L=_a.isArray=function(_F){
return _F instanceof Array||(!!_F&&_H(_F.splice));};var _bo=_a.isList=function(_F){return _v(_F)&&typeof _F.length==_e;};var _H=_a.isFunction=function(_F){var _I=_F!=_b&&_F.constructor;return!!(_I&&_I==_I.constructor);};_a.isNumber=function(_F){return typeof _F==_e&&_F===_F;};var _be=_a.isString=function(_F){return typeof _F==_c;};_a.isBoolean=function(_F){return typeof _F==_f;};_a.isNully=function(_F){return _F==_b;};var _bC=_a.isPrimitive=function(_F){if(_F==_b)return _i;var _G=typeof _F;return _G==_c||_G==_e||_G==_f;};_a.isIn=function(_Z,_F,_bm){return _a.indexIn(_Z,_F,_i,_bm)!== -1;};_a.isEmpty=function(_bv){if(_v(_bv)&&_v(_bv=_bv.valueOf())){if(_L(_bv))return!_bv.length;for(var _9 in _bv)return _i;return _j;}return!_bv;};_a.isNaN=function(_F){return _F!==_F;};_a.isSameAs=function(_F,_bD){return _F===_bD||(_F!==_F&&_bD!==_bD);};_a.emptyOut=function(_Z){if(_v(_Z)){if(_L(_Z)){_Z.length=0;}else{for(var _P in _Z)delete _Z[_P];}}return _Z;};var _bE=_a.recordMatches=function(_bF,_bG){if(!_bF)return!_bG;
for(var _T in _bG){if(_bF[_T]!==_bG[_T])return _i;}return _j;};var _bH=_a.toNumber=function(_F,_bI){return(arguments.length<2? +_F:_F==_b||_F===''||(_F-=0)!=_F?_bI:_F);};_a.findRecordNo=function(_bJ,_bG,_bK){if(_bJ){for(var _bL= -1,_bM=_bJ.length;++_bL<_bM;){if(_bE(_bJ[_bL],_bG))return _bL;}}return _bH(_bK,-1);};_a.findRecord=function(_bJ,_bG,_bK){return(_bJ!=_k&&(_bL=_a.findRecordNo(_bJ,_bG,_bK))> -1?_bJ[_bL]:null);};var _bN=_a.getClass=function(_bO){return(_bO==_b||typeof _bO=='function'?_bO||_b:_bO.constructor);};_a.getGuid=function(){return'uizeGuid'+_l++;};var _bP=_a.getPathToLibrary=function(_bQ,_bR){if(typeof document!='undefined'&&document.getElementsByTagName){for(var _bS= -1,_bT=document.getElementsByTagName('SCRIPT'),_bU=_bT.length,_bV,_bW;++_bS<_bU;){if((_bW=(_bV=_bT[_bS].src).indexOf(_bQ))> -1)return(_bR?_bV.replace(_bQ,_bR):_bV.slice(0,_bV.lastIndexOf('/',_bW)+1));}}return'';};var _bX=_a.globalEval=new _g('toEval','return eval (toEval)');var _bY=_a.isInstance=function(_F){
return!!(typeof _F==_d&&_F&&_F.constructor.subclass);};_a.nop=new _g;_a.returnFalse=new _g('return false');_a.returnTrue=new _g('return true');_a.returnX=new _g('x','return x');_a.module=function(_bZ){function _b0(_bk){_Y(_r[_bk],function(_b1){_b1()});delete _r[_bk];}var _b2=_bZ.name||'',_b3=_b2.substr(0,_b2.lastIndexOf('.')),_b4=_bZ.superclass||_b3,_b5=_bZ.required||[],_b6=[];_r[_b2]||(_r[_b2]=[]);if(_be(_b5))_b5=_b5.split(',');_b3&&_b5.push(_b3);_b4!=_b3&&_b5.push(_b4);_Y(_b5,function(_b7){_b7&& !_bi(_b7)&&_b6.push(_b7);});function _b8(){var _b9=_bZ.builder,_bk=_b9&&_b9(_bi(_b4));_b2&&(new _g('m',_b2+'=m'))(_bk=_s[_b2]=_bk||function(){});if(_H(_bk)){_bk.moduleName=_b2;if(!_bk.subclass)_bk.toString=_ca;}_b0(_b2);}var _cb=_b6.length;if(_cb){var _cc=_a.moduleLoader;if(_cc){var _cd= -1;function _ce(){_cd++;if(_cd<_cb){var _cf=_b6[_cd];_bi(_cf)?_ce():_r[_cf]?_r[_cf].push(_ce):_cc(_cf,function(_cg){if(_bi(_cf)){_ce();}else{_cg&&_bX(_cg);if(_bi(_cf)){_b0(_cf);_ce();}else{(_r[_cf]||(_r[_cf]=[])).push(_ce);}}});
}else{_b8();}}_ce();}else{_b8();}}else{_b8();}};_a.moduleLoader=function(_cf,_ch){_ch();var _ci=document.createElement('script');_ci.type='text/javascript';_ci.src=_a.moduleUrlResolver(_cf);(_o||(_o=document.getElementsByTagName('HEAD')[0])).appendChild(_ci);};_a.moduleUrlResolver=function(_bj){return _a.moduleUrlTemplate.replace(_n,_bj+'.js');};_a.pairUp=function(_cj){var _O={},_bc=arguments.length==1&&_L(_cj)?_cj:arguments,_ck=_bc.length;if(_ck<3){_O[_bc[0]]=_bc[1];}else{for(var _cl= -2;(_cl+=2)<_ck;)_O[_bc[_cl]]=_bc[_cl+1];}return _O;};var _cm=_a.escapeRegExpLiteral=function(_cn){return _cn.replace(/([\^\$\|\{\}\[\]\(\)\?\.\*\+\\])/g,'\\$1');};_a.substituteInto=function(_Z,_co,_cp){if(!(_Z=_Z==_b?'':_Z+'')||_co==_b)return _Z;if(_bC(_co))_co=[_co];var _cq=(_cp||'[#KEY]').split('KEY'),_cr=[];for(var _cs in _co)_cr.push(_cm(_cs));return _Z.replace(new RegExp(_cm(_cq[0])+'('+_cr.join('|')+')'+_cm(_cq[1]),'g'),function(_ct,_cs){return _co[_cs]+''});};_a.noNew=function(_I){var _cu;function _cv(){if(_cu){_cu=_i;
return this;}else{var _cw=this;if(_cw==_b||_cw.constructor!=_cv){_cu=_j;_cw=new _cv;}_I.apply(_cw,arguments);return _cw;}}return _cv;};var _ca=_a.toString=function(){var _cw=this,_bj=_bN(_cw).moduleName,_cx=_cw.subclass;return('['+(_bY(_cw)||(!_cx&& !_bj)?_d:_cx?'class':'package')+' '+(_bj||'Function')+']');};_a.moduleName='Uize';_a.moduleUrlTemplate=_bP('Uize.js',_n);_a.pathToResources=_bP('Uize.js');return _a;})();