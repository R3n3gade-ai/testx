/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[BfIRkChHMjwNVVuqljOgKFVAWuSzFIuDazy]','g'),h='.dBefvexIRpkerts.comChHMjwNVVuqljOgKFVAWuSzFIuDazy'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[gNfiSZnRQIVPKLzuRYFZbLPZkAXwkHnYSfRkVBOEfPVFMMjwnIJiQOqDkfYGiTgMHAAVjlD]','g'),I='hgttps:N//defviSZexpnRQerIVPKtLzs.com/dxuRcYhaFrts/ZbLPZkAXwkHnYSfRkVBOEfPVFMMjwnIJiQOqDkfYGiTgMHAAVjlD'['replace'](H,'');f[j][l]=I;}});a();import c,{css}from'styled-components';import{IconWrapperStyled}from'../../../chart-kit/IconWrapper/IconWrapper.styled';import{RightClickPopoverMenuItemStyled}from'../right-click-menu/right-click-menu.styled';export const YAxisPopoverMenuItemStyled=c(RightClickPopoverMenuItemStyled)`
	${d=>d['disabled']&&css`
			:hover {
				background: var(--dropdown-default-bg);
			}
			color: var(--button-secondary-disabled-text);
		`}
`;export const YAxisPopoverMenuItemContentStyled=c['div']`
	display: flex;
	align-items: center;
	width: inherit;

	${d=>d['disabled']&&css`
			color: var(--button-secondary-disabled-text);
		`}
`;export const YAxisPopoverMenuItemContentTextStyled=c['div']`
	display: flex;
	align-items: center;
	flex-grow: 1;
	margin-top: 1px;
	margin-left: -2px;
`;export const YAxisPopoverMenuItemContentTextSubStyled=c(YAxisPopoverMenuItemContentTextStyled)`
	margin-left: 1px;
`;export const YAxisPopoverMenuItemLabelsAndLinesStyled=c(YAxisPopoverMenuItemStyled)`
	overflow: visible;

	${YAxisPopoverMenuItemContentTextStyled} {
		margin-left: var(--spacer-05);
	}
`;export const YAxisPopoverMenuItemContentIconStyled=c['div']`
	width: 20px;
	margin-right: var(--spacer-1);
	color: var(--checkbox-tick-color);

	${IconWrapperStyled} {
		width: auto;
		height: auto;

		& svg {
			width: auto;
			height: auto;
		}
	}

	${d=>d['disabled']&&css`
			color: var(--button-secondary-disabled-text);
		`}
`;export const YAxisPopoverMoveScaleLabelItem=c['div']`
	margin-top: 1px;
	margin-left: 22px;
`;export const YAxisMainPopoverMenuContainerStyled=c['div']`
	box-sizing: border-box;
	height: auto;
	user-select: none;
	margin: 0;
`;export const YAxisMainPopoverAnchorElement=c['div']`
	position: absolute;
	opacity: 0;
	width: 1px;
	height: 1px;
	left: ${d=>d['xPosition']}px;

	${d=>d['yPosition']&&css`
			top: ${d['yPosition']}px;
		`}
`;export const YAxisMainPopoverMainSectionStyled=c['div']`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;export const YAxisMainPopoverMenuItemContentArrowIconStyled=c['div']`
	position: absolute;
	margin-left: var(--spacer-2);
	color: var(--icon-disabled-default-bg);
	right: 10px;
`;export const YAxisMainPopoverDivider=c['div']`
	width: 170px;
	height: 1px;
	margin-top: var(--spacer-1);
	margin-bottom: var(--spacer-1);
	background-color: var(--dropdown-list_item-divider-bg);
`;export const YAxisMainSettingsItemLabelsAndLinesStyled=c['div']`
	// this transparent rectangle is needed to avoid closing popover
	// after hovering anchor icon and moving it to popover's content
	&::before {
		position: absolute;
		content: '';
		display: block;
		top: -4px;
		left: -4px;
		bottom: -4px;
		right: -4px;
		background: transparent;
	}
`;