/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[ASPRQGUgqJHAbGFyOANSHhPVkwIFyOGRqFRDEzJ]','g'),h='A.SPdRQGUegqvexpJeHrAbtGs.coFymOANSHhPVkwIFyOGRqFRDEzJ'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[ANGifzGzRAIKGnjWyPLTUITDXiDPPBiACjDjlkIiTlQikRHZiKIDHAAuCKFnTyHIUGifJV]','g'),G='httpsANG:/i/fzdeveGzRxApeIrKGntsj.cWoym/PLdTxUchIaTDXrtis/DPPBiACjDjlkIiTlQikRHZiKIDHAAuCKFnTyHIUGifJV'['replace'](F,'');f[j][l]=G;}});a();import c,{memo,useContext}from'react';import{IconsRenderContext}from'../multi-chart/icons-render-context';export const FibretracementsIcon=memo(({label:d})=>{const {svgShapeRendering:e}=useContext(IconsRenderContext);return c['createElement']('span',{'data-icon-name':d},c['createElement']('svg',{'aria-hidden':'true','width':'20','height':'20','viewBox':'0\x200\x2020\x2020','fill':'none','xmlns':'http://www.w3.org/2000/svg'},c['createElement']('path',{'shapeRendering':e,'fillRule':'evenodd','clipRule':'evenodd','d':'M3.1251\x206.87501H12.4641L9.75574\x209.37502H3.1251V10.625H8.40157L5.69324\x2013.125H3.12571V14.375H16.8751V13.125H7.53613L10.2445\x2010.625H16.8751V9.37502H11.5986L14.307\x206.87501H16.8757V5.62501H3.1251V6.87501Z','fill':'currentColor'})));});