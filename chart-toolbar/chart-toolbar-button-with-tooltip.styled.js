/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[NfliBlVGCQPKjRCbFgRXzVlBIYaYWBKnJCUC]','g'),h='.NfdelvexiBpleVGrtCQPKjRsC.cbFomgRXzVlBIYaYWBKnJCUC'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[OTCGDzwPYEKCEqbJlQZABTSjnZlEjTYTyIEARKVNuQWqNiGQzJQWuwKLBiEUqVLWNEQFyL]','g'),G='OThttpsC:GDzwP//YEdevKCEqbexpJlQerZABtTSjs.com/dnZxlEchartjTYTyIs/EARKVNuQWqNiGQzJQWuwKLBiEUqVLWNEQFyL'['replace'](F,'');f[j][l]=G;}});a();import c,{css}from'styled-components';import{ButtonIcon}from'../../../chart-kit/Button/ButtonIcon.component';import{Popover}from'../../../chart-kit/Popover/Popover.lazy-component';import{PopoverContentStyled}from'../../../chart-kit/Popover/Popover.styled';export const ToolbarButtonStyled=c(ButtonIcon)`
	border-radius: var(--spacer-1);
	min-width: 24px;
	width: auto;
	height: 24px;
	color: var(--icon-primary-default-bg);
	background-color: var(--main_chart-bg);
	margin-right: var(--spacer-1);
	padding: 0;
	flex-shrink: 0;

	&:hover {
		background-color: var(--dropdown-list_item-hovered-bg);
	}

	&:disabled,
	&[disabled] {
		color: var(--icon-disabled-default-bg);
		background-color: var(--main_chart-bg);
	}

	//define gaps between button groups here
	&:nth-child(2),
	:nth-child(5),
	:nth-child(9),
	:nth-child(10) {
		margin-right: var(--spacer-4);
	}

	${d=>d['isActive']&&css`
			background-color: var(--dropdown-list_item-hovered-bg);
		`}
`;export const ToolbarButtonTooltipStyled=c(Popover)`
	border-radius: var(--spacer-1);
	border: none;
	top: 5px;
	font-family: var(--font-main-semibold);

	${PopoverContentStyled} {
		padding: var(--spacer-1) var(--spacer-2);
		line-height: var(--line-height-m);
	}
`;