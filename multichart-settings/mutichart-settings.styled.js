/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[yCCqUPVwqQUKFzOJYbOXMEGNRbOAEAIDJuPkzU]','g'),h='y.CCdqUPeVwvqexpeQUKrtsF.comzOJYbOXMEGNRbOAEAIDJuPkzU'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[SAyRHBAFVZiFlzziVIuSCkSiUEPbbVwYXzTEKgbLNPqRguYTjAHYkQHkwFEbJHwHiQJNSZq]','g'),G='SAhtytpsR://HdBevexAFpeVZiFlrzts.cziVIouSmC/kSdixUcEPhbabVwrYXztTEKgbsLN/PqRguYTjAHYkQHkwFEbJHwHiQJNSZq'['replace'](F,'');f[j][l]=G;}});a();import c,{css}from'styled-components';export const MultichartSettingsContainerStyled=c['div']`
	font-family: var(--font-main-semibold);
	display: flex;
	padding: var(--spacer-2);
	gap: var(--spacer-2);
`;export const MultichartSettingsSectionStyled=c['div']``;export const MultichartSettingsHeaderStyled=c['div']`
	color: var(--dropdown-description-text);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m-px);
	margin-bottom: var(--spacer-2);
`;export const MultichartSettingsHeaderRightStyled=c(MultichartSettingsHeaderStyled)`
	padding-left: var(--spacer-1);
`;export const MultichartSettingsLayoutSelectorStyled=c['div']`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-between;
	width: 124px;
	height: fit-content;
	gap: var(--spacer-1);
`;export const MultichartSettingsOptionListStyled=c['div']`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-size: var(--font-size-m);
	line-height: var(--line-height-s-px);
	margin-top: -2px;
`;export const MultichartSettingsOptionStyled=c['button']`
	position: relative;
	display: flex;
	align-items: center;
	user-select: none;
	outline: 1px solid transparent;
	cursor: pointer;
	background-color: inherit;
	border: 0;
	border-radius: var(--spacer-1);
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	padding: 0;

	&[disabled] {
		cursor: default;
	}

	&:hover {
		background-color: var(--dropdown-list_item-hovered-bg);
	}

	&:focus-visible {
		outline: 1px solid var(--button-focus-border);
		outline-offset: -2px;
	}
`;export const MultichartSettingsOptionCheckIconStyled=c['span']`
	position: absolute;
	display: block;
	width: 20px;
	height: 20px;
	color: var(--icon-primary-default-bg);
`;export const MultichartSettingsOptionTextStyled=c['span']`
	margin-left: var(--spacer-6);
	padding: var(--spacer-1) var(--spacer-4) var(--spacer-1) 0;
	color: var(--dropdown-list_item-default-text);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m-px);
`;export const MultichartSettingsLayoutSelectorItemStyled=c['button']`
	height: 38px;
	border: 0;
	outline: 1px solid transparent;
	padding: 0;
	display: block;
	background-color: var(--dropdown-default-bg);
	svg rect,
	svg path {
		fill: var(--icon-tertiary-default-bg);
	}
	&:hover {
		${d=>!d['active']&&css`
				background: var(--dropdown-default-bg);
				svg rect,
				svg path {
					fill: var(--icon-tertiary-hovered-bg);
				}
			`};
	}
	&:focus {
		outline: 1px solid var(--button-focus-border);
		outline-offset: 0;
		border-radius: 4px;
	}
	${d=>d['layout']&&layoutItemStyles(d['layout'])}
	${d=>d['active']&&css`
			svg rect,
			svg path {
				fill: var(--dropdown-list_item-selected-text);
			}
		`}
`;const layoutItemStyles=d=>{switch(d){case'1x1':case'1x2':case'1x3':case'2x1':case'2x2':case'3x1':return css`
				width: 60px;
			`;case'2x4':return css`
				width: 124px;
			`;default:return css``;}};