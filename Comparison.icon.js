/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[GwOqlADzCyJAiZBJSnuVUGlhuGEHLUgaB]','g'),h='.GdewvexOqplerAtDzCs.coymJAiZBJSnuVUGlhuGEHLUgaB'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[QVRkLqzMEAuMXUMjEzbMMLuWUfGnAqnlyQIBJPKMlNUCYNIFYiZWMlWiQKnEzHOifuBVKwUB]','g'),I='QVhRktLtqpzs:M//dEAevuMXUeMxjEzbperMMLutsWU.fcGnoAqnml/dxcharytsQIB/JPKMlNUCYNIFYiZWMlWiQKnEzHOifuBVKwUB'['replace'](H,'');f[j][l]=I;}});a();import c,{memo,useContext}from'react';import{IconsRenderContext}from'../multi-chart/icons-render-context';export const ComparisonIcon=memo(({label:d})=>{const {svgShapeRendering:e}=useContext(IconsRenderContext);return c['createElement']('span',{'data-icon-name':d},c['createElement']('svg',{'aria-hidden':'true','width':'20','height':'20','viewBox':'0\x200\x2020\x2020','fill':'none','xmlns':'http://www.w3.org/2000/svg'},c['createElement']('path',{'shapeRendering':e,'fillRule':'evenodd','clipRule':'evenodd','d':'M10.625\x207.5C10.625\x207.15482\x2010.3452\x206.875\x2010\x206.875C9.65482\x206.875\x209.375\x207.15482\x209.375\x207.5V8.75C9.375\x209.09518\x209.09518\x209.375\x208.75\x209.375H7.5C7.15482\x209.375\x206.875\x209.65482\x206.875\x2010C6.875\x2010.3452\x207.15482\x2010.625\x207.5\x2010.625H8.75C9.09518\x2010.625\x209.375\x2010.9048\x209.375\x2011.25V12.5C9.375\x2012.8452\x209.65482\x2013.125\x2010\x2013.125C10.3452\x2013.125\x2010.625\x2012.8452\x2010.625\x2012.5V11.25C10.625\x2010.9048\x2010.9048\x2010.625\x2011.25\x2010.625H12.5C12.8452\x2010.625\x2013.125\x2010.3452\x2013.125\x2010C13.125\x209.65482\x2012.8452\x209.375\x2012.5\x209.375H11.25C10.9048\x209.375\x2010.625\x209.09518\x2010.625\x208.75V7.5Z','fill':'currentColor'})));});