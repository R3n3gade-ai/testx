/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let e=!![];return function(f,g){const h=e?function(){if(g){const i=g['apply'](f,arguments);return g=null,i;}}:function(){};return e=![],h;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[AlIFKuUlElZzXBHAyJzyDuUWEGBGBGEWwiOMS]','g'),h='.dAevelIFKxupUlEleZzXrtBs.HcAyJozmyDuUWEGBGBGEWwiOMS'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[NRVGOGkVlZALRXlfKlQwNBfYjRHWORzLuEEnnJClzEuywMVVHbjzfNFWgkHVkLgCPblGWqSKfOj]','g'),I='NhRtVtpsGOG:k/V/ldZeAvLexpRertXlfs.comKl/dxcQwhNBfYjaRrtsHWORz/LuEEnnJClzEuywMVVHbjzfNFWgkHVkLgCPblGWqSKfOj'['replace'](H,'');f[j][l]=I;}});a();import c from'styled-components';import{IconWrapperStyled}from'../../../../../../chart-kit/IconWrapper/IconWrapper.styled';import d from'../../../../../../chart-kit/Popover/Popover.component';export const IndicatorListItemContainerStyled=c['div']`
	display: flex;
	align-items: center;
	flex-grow: 1;
	height: var(--indicator-list-item-container-height, 32px);
	font-size: var(--font-size-l);
	white-space: nowrap;
	line-height: var(--indicator-list-item-container-lh, 32px);
	transition: background-color 120ms ease-out;
	min-width: 0;
	border-radius: var(--indicator-list-item-container-bdrs, 6px);
	padding-left: var(--spacer-2);
	padding-right: var(--spacer-2);

	&:hover {
		background-color: var(--dropdown-list_item-hovered-bg);
	}

	background-color: ${e=>e['active']&&'var(--dropdown-list_item-hovered-bg)'};

	&:focus {
		outline: 1px solid var(--button-focus-border);
		outline-offset: -1px;
		border-radius: 4px;
	}
`;export const IndicatorListItemIconStyled=c['div']`
	min-width: var(--indicator-list-item-icon-mw, 24px);
	height: var(--indicator-list-item-icon-height, 24px);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: var(--icon-disabled-default-bg);

	@media (max-width: 480px) {
		&:nth-of-type(2) {
			height: var(--indicator-list-item-icon-height, 24px);
			margin-left: auto;

			i {
				height: var(--indicator-list-item-icon-height, 24px);
			}
		}
	}
`;export const IndicatorListItemSelectIconStyled=c(IndicatorListItemIconStyled)`
	color: var(--icon-primary-default-bg);
	&:hover {
		i {
			color: var(--icon-active-bg);
			cursor: default;
		}
	}
`;export const IndicatorListItemIconUpStyled=c['div']`
	flex-shrink: 0;
`;export const IndicatorListItemIconDownStyled=c['div']`
	flex-shrink: 0;
`;export const IndicatorListItemDxIconStyled=c['div']`
	flex-shrink: 0;
`;export const IndicatorListItemTitleStyled=c['span']`
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
	white-space: nowrap;
`;export const IndicatorListItemLengthStyled=c['div']`
	margin-left: 10px;
	margin-right: auto;
	font-size: var(--font-size-s);
	opacity: 0.7;
`;export const IndicatorListItemDescriptionStyled=c['div']`
	margin-left: 10px;
	margin-right: auto;
	font-size: var(--font-size-s);
	color: var(--dropdown-description-text);
	margin-top: 2px;
`;export const IndicatorListItemAddIconStyled=c(IndicatorListItemIconStyled)`
	height: var(--indicator-list-item-add-icon-height, 12px);

	& i {
		width: var(--indicator-list-item-add-icon-width, 24px);
		height: var(--indicator-list-item-add-icon-height, 12px);
	}
`;export const IndicatorListItemTooltipIconStyled=c(IconWrapperStyled)`
	color: ${e=>e['hovered']?'var(--link-hovered-text)':'var(--icon-secondary-default-bg)'};
	cursor: default;
`;export const IndicatorListItemInfoPopover=c(d)`
	overflow: visible;

	// this transparent rectangle is needed to avoid closing popover
	// after hovering help icon and moving it to popover's content
	&::before {
		position: absolute;
		content: '';
		display: block;
		width: 20px;
		height: 100%;
		top: 0;
		left: -20px;
		background: transparent;
	}
`;export const IndicatorListItemInfoStyled=c['div']`
	max-width: 320px;
	z-index: 1000;
	background: var(--dropdown-default-bg);
`;export const IndicatorListItemInfoHeader=c['div']`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--spacer-2);
	border-bottom: 1px solid var(--dropdown-list_item-divider-bg);
`;export const IndicatorListItemInfoWrapper=c['div']`
	max-height: 300px;
`;export const IndicatorListItemInfoText=c['div']`
	padding: var(--spacer-2);
	margin: 0;
	font-family: var(--font-main);
	font-size: var(--font-size-m);
	line-height: var(--line-height-l-px);
	color: var(--dropdown-list_item-default-text);
	text-align: left;
`;export const IndicatorListItemDocsLinkStyled=c['a']`
	display: block;
	text-decoration: none;
	color: var(--link-default-text);
	padding: var(--spacer-2);
	&:hover {
		color: var(--link-hovered-text);
	}
`;export const IndicatorListItemIconsContainer=c['div']`
	display: flex;
	align-items: center;
	margin-left: auto;
	margin-right: 0;
`;