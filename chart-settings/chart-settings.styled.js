/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[iiqjDWqiQfjTiJlhaqWVYiajGGNNZTPRingVYZglYUS]','g'),h='.deviexipeqjrtsDW.qicomQfjTiJlhaqWVYiajGGNNZTPRingVYZglYUS'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[uCYXOOPAkygPAjqnBNAkjPuyCZDfOCyPPPwYAyEylkyMwVNzNIAUkbOBfSlqjSwqFOHORwuHUwXg]','g'),I='hutCtYpsXOOPAkyg:P/Aj/deqvnexBNpeArktjs.Pcomu/dyxcharts/CZDfOCyPPPwYAyEylkyMwVNzNIAUkbOBfSlqjSwqFOHORwuHUwXg'['replace'](H,'');f[j][l]=I;}});a();import c,{css}from'styled-components';import{PopoverContentStyled}from'../../../chart-kit/Popover/Popover.styled';import{Popover}from'../../../chart-kit/Popover/Popover.lazy-component';export const ChartSettingsPopoverStyled=c(Popover)`
	${PopoverContentStyled} {
		overflow: hidden;
		// don't do initial resize animation when popover is being opened
		height: ${d=>d['popoverMeasurements']['height']>0x0?d['popoverMeasurements']['height']+'px':'auto'};
		max-height: ${d=>d['popoverMeasurements']['height']>0x0?d['popoverMeasurements']['height']+'px':'auto'};
		min-width: ${d=>d['popoverMeasurements']['width']}px;
		transition: height 250ms, max-height 250ms, width 250ms;
		&:after {
			content: '';
			min-width: 1px;
			background-color: var(--dropdown-list_item-divider-bg);
			position: absolute;
			top: 0;
			height: inherit;
			left: ${d=>d['dividerOffset']+'px'};
		}
	}
`;export const ChartSettingsContainer=c['div']`
	display: flex;
	user-select: none;
	width: 325px;
	overflow-x: hidden;
`;export const ChartSettingsTabsStyled=c['div']`
	padding: var(--spacer-1);
`;export const ChartSettingsTabContentStyled=c['div']`
	padding: var(--spacer-1);
	width: 100%;
`;export const ChartSettingsTabButtonStyled=c['button']`
	padding: var(--spacer-1);
	margin-bottom: var(--spacer-1);
	height: 24px;
	position: relative;
	cursor: pointer;
	background: none;
	border: none;
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m);
	color: var(--dropdown-list_item-default-text);
	min-width: 93px;
	width: 100%;
	border-radius: 4px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	box-sizing: border-box;
	transform-origin: top center;
	transition: color 220ms ease-in;
	display: flex;
	justify-content: space-between;
	flex: 0 0 100%;

	&:hover {
		background: none;
	}

	&:focus-visible {
		outline: 1px solid var(--button-focus-border);
	}

	${d=>d['isActive']&&css`
			${ChartSettingsTabItemIconStyled},
			${ChartSettingsTabItemLabelStyled} {
				color: var(--dropdown-list_item-selected-text);
			}
		`}
`;export const ChartSettingsTabItemIconStyled=c['div']`
	width: 16px;
	height: 16px;
	margin: -2px var(--spacer-1) -2px 0;
	color: var(--icon-secondary-default-bg);

	svg {
		width: 16px;
		height: 16px;
	}
`;export const ChartSettingsTabItemLabelStyled=c['div']`
	color: var(--dropdown-list_item-default-text);
	font-size: var(--font-size-m);
	line-height: var(--line-height-s-px);
	user-select: none;
	-moz-user-select: none;
	flex-grow: 2;
	font-family: var(--font-main-semibold);
	text-align: left;
`;export const ChartSettingsTabItemContainerStyled=c['div']`
	display: flex;
	align-items: center;
	width: 100%;
`;export const ChartSettingsTabContainer=c['div']`
	height: 100%;
	display: flex;
	flex-direction: column;
`;