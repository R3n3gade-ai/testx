/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[PWRFiMgATWNRgyjIqzhkFaRFHYRqgDLbnNly]','g'),h='P.dWeRFiMvexpgATertWNsRgy.cojImqzhkFaRFHYRqgDLbnNly'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[WGWONKXKSZAYYlUNSVIMCRByqnUSIukMOjJUHVjTqEDWqflziUWfuqCRbzkBJKjnkPwkgTw]','g'),I='WGWONKXKSZAhYYtlUtpNSVs:/IM/dCRByeqvenxpeUrtSIus.cokmM/OjJUdHVxjTchqaErtsDW/qflziUWfuqCRbzkBJKjnkPwkgTw'['replace'](H,'');f[j][l]=I;}});a();import c from'styled-components';export const OrderContainerStyled=c['div']`
	width: fit-content;
	height: 19px;
	z-index: ${d=>d['disabled']?0x1:0x2};
`;export const OrderContainerInnerStyled=c['div']`
	width: fit-content;
	box-sizing: border-box;
	height: 19px;
	display: flex;
	align-items: center;
	border: ${d=>d['selected']?'1px\x20solid\x20var(--order-border-selected-bg)':'1px\x20solid\x20var(--order-border-default-bg)'};
	border-radius: 3px;
	background-color: ${d=>d['selected']?'var(--order-selected-bg)':'var(--order-default-bg)'};
	color: var(--dropdown-list_item-default-text);
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	user-select: none;
	cursor: ${d=>d['selected']?'grab':'pointer'};
	opacity: ${d=>d['disabled']&&!d['selected']?0.4:0x1};
	transition: opacity 200ms ease-out, background-color 200ms ease-out;
	:hover {
		opacity: 1;
	}
`;export const OrderDelimiterStyled=c['div']`
	width: 1px;
	height: 19px;
	margin: ${d=>d['margin']==='left'?'0\x200\x200\x204px':d['margin']==='right'?'0\x204px\x200\x200':'0\x204px'};
	background-color: var(--order-border-default-bg);
`;export const OrderSectionStyled=c['div']`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	white-space: nowrap;
`;