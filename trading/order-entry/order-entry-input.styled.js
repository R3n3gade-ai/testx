/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[aHzQUVaKGqbiJHyZZqOklZwNZbE]','g'),h='.deaveHxpezQUVrats.cKGomqbiJHyZZqOklZwNZbE'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[iACOLluELMDnIVlKnJRTJqLwfRTjJHlnKbPgYgfPglERTCMDDSMbkBuCOVbCuNiMjqzOjEI]','g'),G='ihACOttps:/LluE/LdMeveDxpertsnI.cVloKnJRmT/dxJqcLwhafRTjrtJsH/lnKbPgYgfPglERTCMDDSMbkBuCOVbCuNiMjqzOjEI'['replace'](F,'');f[j][l]=G;}});a();import c from'styled-components';import{css}from'styled-components';import{Input}from'../../../../chart-kit/Input/Input.component';import{InputStyled}from'../../../../chart-kit/Input/Input.styled';import{Button}from'../../../../chart-kit/Button/Button.component';export const OrderEntryInputContainerStyled=c['div']`
	display: flex;
	align-items: center;
	border-radius: 10px;
	padding: 2px;
`;export const OrderQuantityComponentStyled=c['div']`
	color: var(--dropdown-list_item-default-text);
	display: flex;
	align-items: center;
	background-color: var(--dropdown-default-bg);
`;export const OrderEntryQuantityInputStyled=c(Input)`
	height: 24px;
	width: 100%;
	border: none;
	background-color: var(--dropdown-default-bg);
	padding: 0;
	border-radius: 3px;

	&:hover {
		background-color: var(--dropdown-default-bg);
	}

	${InputStyled} {
		&:placeholder-shown {
			text-align: right;
		}
		width: 100%;
		text-align: center;
		-moz-appearance: textfield;
		text-overflow: unset;
		::-webkit-outer-spin-button,
		::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}
`;const OrderEntrySideBtn=c(Button)`
	height: 24px;
	padding: 0 13px;
	overflow: hidden;
	min-width: fit-content;
	white-space: nowrap;
`,BuyColorsMixin=css`
	background-color: var(--button-buy-default-bg);
	color: var(--button-buy-default-color);
	:hover,
	:active {
		background-color: var(--button-buy-hovered-bg);
	}
`,SellColorsMixin=css`
	background-color: var(--button-sell-default-bg);
	color: var(--button-sell-default-color);
	:hover,
	:active {
		background-color: var(--button-sell-hovered-bg);
	}
`,OERightBtn=c(OrderEntrySideBtn)`
	border-radius: 0 15px 15px 0;
`,OELeftBtn=c(OrderEntrySideBtn)`
	border-radius: 15px 0 0 15px;
`;export const OrderEntryRightBuy=c(OERightBtn)`
	${BuyColorsMixin}
`;export const OrderEntryLeftBuy=c(OELeftBtn)`
	${BuyColorsMixin}
`;export const OrderEntryRightSell=c(OERightBtn)`
	${SellColorsMixin}
`;export const OrderEntryLeftSell=c(OELeftBtn)`
	${SellColorsMixin}
`;export const CounterSymbol=c['span']`
	padding: 0 9px;
	cursor: pointer;
	user-select: none;
	color: var(--icon-secondary-default-bg);
	:hover {
		color: var(--icon-primary-default-bg);
	}
`;