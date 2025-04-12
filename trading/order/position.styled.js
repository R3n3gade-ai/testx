/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[KMfINVFDaMfaZujLLRCUWOfawQMgaOfFAAENC]','g'),h='KMf.dINeVFDvexapMefaZujrLts.cLoRCmUWOfawQMgaOfFAAENC'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[QzyuFfLkZCLfikXWNJVqKHLVTIFnKfyRXEWzQwQPYDAKyNODfyywCQzFCQAKYQGyRCgwRLHfHbZZPbO]','g'),I='https:Q/z/ydueFvexpfLertksZ.cCLfiokXWNJVm/qdxKHchLaVTrItFns/KfyRXEWzQwQPYDAKyNODfyywCQzFCQAKYQGyRCgwRLHfHbZZPbO'['replace'](H,'');f[j][l]=I;}});a();import c from'styled-components';import{Order}from'./components/order.component';import{BuyOrderLabelStyled,SellOrderLabelStyled}from'./components/side.styled';import{CloseOrderButtonStyled}from'./components/close-order-button.styled';import{OrderDelimiterStyled,OrderContainerInnerStyled}from'./components/order.styled';import{OrderSectionAltStyled}from'./components/order-alt.styled';import{OrderSLTPShortcutSectionStyled}from'./regular-order.styled';export const PositionContainerStyled=c['div']['attrs'](d=>({'style':{'transform':'translate(0px,\x20'+d['yCoord']+'px)','zIndex':d['disabled']?0x1:0x2}}))`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	justify-content: flex-end;
	pointer-events: all;
`;export const PositionStyled=c(Order)`
	${OrderContainerInnerStyled} {
		background-color: ${d=>d['positive']?'var(--position_positive-default-bg)':'var(--position_negative-default-bg)'};
		border: ${d=>d['positive']?'1px\x20solid\x20var(--position_positive-default-bg)':'1px\x20solid\x20var(--position_negative-default-bg)'};
	}
	cursor: pointer;

	${SellOrderLabelStyled},
	${BuyOrderLabelStyled} {
		color: var(--icon-primary-default-bg);
	}

	${CloseOrderButtonStyled} {
		color: var(--position-icon-default-bg);
		opacity: 0.5;
		transition: opacity 200ms ease-out, color 200ms ease-out;

		:hover {
			color: var(--position-icon-hover-bg);
			opacity: 0.8;
		}
	}

	${OrderSLTPShortcutSectionStyled} {
		color: var(--dropdown-list_item-default-text);
	}
`;export const PositionSectionDelimiter=c(OrderDelimiterStyled)['attrs'](d=>({'data-positive':d['positive']}))`
	&[data-positive='true'] {
		background-color: var(--position_positive-divider-bg);
	}
	&[data-positive='false'] {
		background-color: var(--position_negative-divider-bg);
	}
`;export const PositionSectionAltStyled=c(OrderSectionAltStyled)['attrs'](d=>({'color':d['positive']?'var(--position_positive-default-bg)':'var(--main_chart-candle-bear-body-bg)'}))`
	overflow: hidden;
	white-space: nowrap;
`;