/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[EjYzfHEZuhEfGDMAuXPyGVhhbRKhZCIHP]','g'),h='E.jYdzevfexHpeEZuhrtEfs.GDMAuXcPoymGVhhbRKhZCIHP'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,z){if(v['length']!=w)return![];for(let A=0x0;A<w;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&v['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(v,w,z){return n(w,z,v);},p=function(v,w,z){return o(w,v,z);},q=function(v,w,z){return p(w,z,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[HwqyzSJMTQiZIqzKwIyjwWguYNQMTTuzYZYfXUAGqBBzBYDSlLPHZnYJGJGIKwnMJuH]','g'),I='Hwhttpqsy:z//SdeJvexMpTerts.comQi/ZIqzKwdIyxjchawWrgtusYN/QMTTuzYZYfXUAGqBBzBYDSlLPHZnYJGJGIKwnMJuH'['replace'](H,'');f[j][l]=I;}});a();import c from'styled-components';export const BuyOrderLabelStyled=c['span']`
	color: var(--main_chart-candle-bull-body-bg);
`;export const SellOrderLabelStyled=c['span']`
	margin-left: 0.5px;
	color: var(--main_chart-candle-bear-body-bg);
`;export const SideStyled=c['div']`
	width: 16px;
	box-sizing: border-box;
	padding-left: 4.5px;
	padding-right: 4.5px;
`;export const PositionLineStyled=c['hr']['attrs'](({x:d,y:e,pl:f,width:g,disabled:h})=>({'style':{'top':e+'px','left':d,'width':g+'px','backgroundColor':(f??0x0)>0x0?'var(--position_positive-wick-bg)':'var(--position_negative-wick-bg)','opacity':h?0.4:0x1}}))`
	position: absolute;
	height: 1px;
	margin: 0;
	border: none;
`;export const OrderLineStyled=c['hr']['attrs'](({x:d,y:e,width:f,disabled:g,selected:h})=>({'style':{'top':e+'px','left':d,'width':f+'px','backgroundColor':h?'var(--order-wick-hover-bg)':'var(--order-wick-default-bg)','opacity':g?0.4:0x1}}))`
	position: absolute;
	height: 1px;
	margin: 0;
	border: none;
`;