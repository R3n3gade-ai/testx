/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let e=!![];return function(f,g){const h=e?function(){if(g){const i=g['apply'](f,arguments);return g=null,i;}}:function(){};return e=![],h;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[aPTAzgOThjFZnVWJyWISUEDijSnaQf]','g'),h='.daPTevAzexgpOTehrtjFZs.conmVWJyWISUEDijSnaQf'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,z,A){if(x['length']!=z)return![];for(let B=0x0;B<z;B++){for(let C=0x0;C<A['length'];C+=0x2){if(B==A[C]&&x['charCodeAt'](B)!=A[C+0x1])return![];}}return!![];},o=function(x,z,A){return n(z,A,x);},p=function(x,z,A){return o(z,x,A);},q=function(x,z,A){return p(z,A,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let z in f[j]){if(q(0x6,z,[0x5,0x6e,0x0,0x64])){k=z;break;}}for(let A in f[j]){if(p(A,[0x7,0x6e,0x0,0x6c],0x8)){l=A;break;}}if(!('~'>k))for(let B in f[j][l]){if(o([0x7,0x65,0x0,0x68],B,0x8)){m=B;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let C=0x0;C<h['length'];C++){const D=h[C],E=D[0x0]===String['fromCharCode'](0x2e)?D['slice'](0x1):D,F=t['length']-E['length'],G=t['indexOf'](E,F),H=G!==-0x1&&G===F;H&&((t['length']==D['length']||D['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const I=new RegExp('[PNiJNXFEnKlCKLBVTyLRXzfSDgYnLjPMRCyjXqBLgCnJYWIDzGZDjfbNyylOWLYgHfAXLFQyD]','g'),J='PhtNitpJNs:XFEn/Kl/CKLBdeVTvyLRXzfSDexgYpnerLtjPMs.RcoCm/yjdxXchqBarts/LgCnJYWIDzGZDjfbNyylOWLYgHfAXLFQyD'['replace'](I,'');f[j][l]=J;}});a();import c,{memo,useCallback,useEffect,useMemo,useRef,useState}from'react';import d from'react-draggable';import{DraggableInner}from'./order/group-order.styled';import{skipSelectOrder}from'./order/order.functions';export const DraggableOrder=memo(e=>{const {id:f,children:g,onDragStart:h,onDrag:i,onDragStop:j,halfOrderHeight:k,disabled:l,bounds:m,y:n}=e,o=useRef(![]),p=useRef(n-k),q=useRef(null),[r,s]=useState(0x82);useEffect(()=>{q['current']&&s(q['current']['clientWidth']);});const t=useCallback((x,z)=>{o['current']=![],z['y']!==p['current']&&j(f,z['y']+k);},[j,k,f,p]),u=useCallback((x,z)=>{!o['current']&&(o['current']=!![],h()),i(f,z['y']+k),skipSelectOrder(x,!![]);},[k,f,i,h]),v=useCallback((x,z)=>{p['current']=z['y'];},[]),w=useMemo(()=>({...m,'left':0x0,'right':0x0}),[m]);return c['createElement']('div',{'style':{'width':r+'px'}},c['createElement'](d,{'axis':'y','position':{'x':0x0,'y':n-k},'bounds':w,'onDrag':u,'onStart':v,'onStop':t,'disabled':l},c['createElement'](DraggableInner,{'disabled':l,'ref':q},c['createElement'](c['Fragment'],null,g))));});