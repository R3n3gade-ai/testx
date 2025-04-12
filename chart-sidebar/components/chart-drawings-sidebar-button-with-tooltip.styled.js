/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[BADGGbwXPgWIQySJHqMUXLFyOzAzjZUKPbZ]','g'),h='.BAdeDveGxGpbwXPgWeIrQts.coySmJHqMUXLFyOzAzjZUKPbZ'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[ARGbAYYiBVGfEMUqKTIjAfAwfOSjEJMMBRIIGFJfKPSDCQOyjjYiLBCCEPWVWWZNOUZyZFIAU]','g'),G='hAtRtpGsb:A/YYi/devexperts.BVGfcom/EMUdqKTxcIhajrts/AfAwfOSjEJMMBRIIGFJfKPSDCQOyjjYiLBCCEPWVWWZNOUZyZFIAU'['replace'](F,'');f[j][l]=G;}});a();import c,{css}from'styled-components';import{ButtonInnerStyled}from'../../../../chart-kit/Button/Button.styled';import{ButtonWithTooltip}from'../../../../chart-kit/Button/ButtonWithTooltip';import{IconWrapper}from'../../../../chart-kit/IconWrapper/IconWrapper.component';export const DrawingsSidebarBWTIconContainerStyled=c['div']`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: var(--spacer-05);
	min-width: 20px;
	width: 20px;
	height: 20px;
	color: var(--dropdown-list_item-default-text);
`;export const DrawingsSidebarBWTLabelStyled=c['div']`
	text-align: start;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding: var(--spacer-1);
	color: var(--dropdown-list_item-default-text);
	font-family: var(--font-main-semibold);
	line-height: var(--line-height-m);
	font-size: var(--font-size-m);
	user-select: none;
	-moz-user-select: none;
`;export const DrawingsSidebarButtonWithTooltipStyled=c(ButtonWithTooltip)`
	position: relative;
	height: 24px;
	width: calc(100% - 2 * var(--spacer-05));
	display: flex;
	justify-content: center;
	align-items: center;
	margin: var(--spacer-05);
	padding: 0;
	border-radius: 4px;
	color: var(--icon-primary-default-bg);
	fill: currentColor;
	overflow: hidden;
	white-space: nowrap;

	${ButtonInnerStyled} {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	&:hover {
		background-color: var(--dropdown-list_item-hovered-bg);
	}

	${DrawingsSidebarBWTLabelStyled} {
		flex-grow: 2;
	}

	${d=>d['isActive']&&css`
			${DrawingsSidebarBWTIconContainerStyled},
			${DrawingsSidebarBWTLabelStyled} {
				color: var(--dropdown-list_item-selected-text);
			}
		`}
	${d=>d['disabled']&&css`
			${DrawingsSidebarBWTIconContainerStyled},
			${DrawingsSidebarBWTLabelStyled} {
				color: var(--dropdown-list_item-disabled-text);
			}
		`}

	${d=>!d['expanded']&&css`
			width: 24px !important;
			min-width: 24px !important;

			${DrawingsSidebarBWTIconContainerStyled} {
				margin: 0;
			}

			${DrawingsSidebarBWTLabelStyled} {
				/**
				* these styles allow to make some content hidden but still be accessible to screen-reader, good for a11y
				* @doc-tags a11y
				*/
				clip: rect(0 0 0 0);
				-webkit-clip-path: inset(50%);
				clip-path: inset(50%);
				height: 0.1rem;
				overflow: hidden;
				position: absolute;
				white-space: nowrap;
				width: 0.1rem;
			}
		`}
`;export const DrawingsSidebarPopoverIWStyled=c(IconWrapper)`
	color: var(--icon-disabled-default-bg);
`;