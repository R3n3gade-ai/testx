/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[OWqHbDYAjSfnJEaaMgZbnMYUEfiSOPLXCYkM]','g'),h='OWqHbD.YAjSdefvenJxpeErts.comaaMgZbnMYUEfiSOPLXCYkM'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[NQNUWbIXBnHUUlPTgqCJVjPgkNGwlFuVjlgNkSCPbgiRGffSKWVUUbuBAOAAROMPZzAMSFIkALbTZG]','g'),I='NQhNttUWbIpXsB:nH//UdUevlPTgeqCJxVjPpegkNrGwtsl.Fcuom/VjlgNkSCPbdxchartgiRsGff/SKWVUUbuBAOAAROMPZzAMSFIkALbTZG'['replace'](H,'');f[j][l]=I;}});a();import c,{memo,useContext}from'react';import{IconsRenderContext}from'../multi-chart/icons-render-context';export const CompareIcon=memo(({label:d})=>{const {svgShapeRendering:e}=useContext(IconsRenderContext);return c['createElement']('span',{'data-icon-name':d},c['createElement']('svg',{'aria-hidden':'true','width':'20','height':'20','viewBox':'0\x200\x2020\x2020','fill':'none','xmlns':'http://www.w3.org/2000/svg'},c['createElement']('path',{'shapeRendering':e,'d':'M13.75\x203.125H15V5H16.875V6.25H15V8.125H13.75V6.25H11.875V5H13.75V3.125Z','fill':'currentColor'}),c['createElement']('path',{'shapeRendering':e,'d':'M13.625\x2010.0625L12.625\x209.3125L10.1754\x2012.5786L7.04142\x2010.3848L2.61835\x2016.5091L3.6317\x2017.2409L7.33363\x2012.1152L10.4496\x2014.2964L13.625\x2010.0625Z','fill':'currentColor'})));});