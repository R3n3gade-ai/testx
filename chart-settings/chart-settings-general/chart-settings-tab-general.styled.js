/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[FkBwMEUkGFjFNunDTbnJqDKLfgjTKaJ]','g'),h='.FdevkBewxMEpUkGeFjFrNtus.cnomDTbnJqDKLfgjTKaJ'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[BUwuRQjECUGyfUPLGMIiYUGIggFWAEWSzjHFFfYSOiXEJuuqwAYUPSbYUlnlBySMLZiVzZD]','g'),G='BhUttpwus:/R/devexQjEpCUGerytsfU.coPmL/GdMIxchiarYtsUGIggF/WAEWSzjHFFfYSOiXEJuuqwAYUPSbYUlnlBySMLZiVzZD'['replace'](F,'');f[j][l]=G;}});a();import{CheckboxContainerStyled,CheckboxIconStyled,CheckboxViewStyled}from'../../../../chart-kit/Checkbox/Checkbox.styled';import c,{css}from'styled-components';import{ChartSettingsFieldsetGroupItem}from'../chart-settings-fieldset.styled';import{SelectboxAnchor}from'../../../../chart-kit/Selectbox/SelectboxAnchor.component';import{SelectboxAnchorCaretStyled,SelectboxAnchorContentStyled}from'../../../../chart-kit/Selectbox/SelectboxAnchor.styled';import{DropdownMenuItem}from'../../../../chart-kit/Menu/dropdown-menu/DropdownMenuItem.component';import{DropdownMenuItemLabelStyled}from'../../../../chart-kit/Menu/dropdown-menu/DropdownMenuItem.styled';import{DropdownMenuSecondaryStyled}from'../../../../chart-kit/Menu/dropdown-menu/DropdownMenuSecondary.styled';import{Selectbox}from'../../../../chart-kit/Selectbox/Selectbox.component';import{Button}from'../../../../chart-kit/Button/Button.component';import{Popover}from'../../../../chart-kit/Popover/Popover.lazy-component';export const ChartSettingsTabGeneralItemStyled=c(ChartSettingsFieldsetGroupItem)`
	&:hover {
		background-color: var(--dropdown-hovered-bg);
		border-radius: var(--spacer-1);
	}

	${CheckboxContainerStyled} {
		width: 100%;
		outline: 1px solid transparent;
		background-color: transparent;

		&:focus {
			box-shadow: none;
		}
	}

	${CheckboxViewStyled} {
		border: none;
		width: 100%;
		height: 100%;
	}

	${CheckboxIconStyled} {
		width: 100%;
		height: 100%;
	}

	${d=>d['keyboardModeEnabled']&&'&:focus-within\x20{\x0a\x09\x09border-radius:\x204px;\x0a\x20\x20\x20\x20\x09box-shadow:\x200\x200\x200\x201px\x20var(--button-primary-default);\x0a\x09}'}
`;export const ChartSettingsTabGeneralItemLineStyled=c(ChartSettingsTabGeneralItemStyled)`
	display: flex;
	margin-left: var(--spacer-6);
	&:hover {
		background-color: var(--dropdown-default-bg);
	}
`;export const ChartSettingsTabAdaptivePopoverStyled=c(Popover)`
	margin-top: 0;
`;export const ChartSettingsTabCrosshairAnchorStyled=c(SelectboxAnchor)`
	padding: 0;
	padding-right: var(--spacer-3);
	height: 16px;
	box-sizing: border-box;
	border-radius: 4px;
	background: transparent;
	&:after {
		border: none;
	}
	&:hover {
		background: none;
	}

	${SelectboxAnchorContentStyled} {
		text-align: left;
		font-size: var(--font-size-m);
		line-height: var(--line-height-m);
		color: var(--dropdown-list_item-selected-text);
		font-family: var(--font-main-semibold);
	}

	${SelectboxAnchorCaretStyled} {
		width: 20px;
		height: 20px;
	}

	${SelectboxAnchorCaretStyled} {
		box-sizing: border-box;
		position: absolute;
		left: calc(100% - 4px);
		top: 0;
		// add transform-origin for the tricky transform: rotate case - the element moves by 1px at the end of the transition
		transform-origin: 10px 9px 0px;
		transition: transform ease 0.4s;
		display: flex;
		align-items: center;
		justify-content: center;
		${d=>d['isOpened']&&css`
				transform: rotate(180deg);
			`}
	}
`;export const ChartSettingsTabCrosshairDropdownMenuItemStyled=c(DropdownMenuItem)`
	padding: var(--spacer-1);
	width: 100%;
	box-sizing: border-box;
	min-width: 0;
	color: var(--dropdown-list_item-default-text);

	${DropdownMenuItemLabelStyled} {
		font-family: var(--font-main-semibold);
		font-size: var(--font-size-m);
		line-height: var(--line-height-m);
	}
`;export const ChartSettingsTabCrosshairDropdownMenuStyled=c(DropdownMenuSecondaryStyled)`
	width: 80px;
	box-sizing: border-box;
	padding: var(--spacer-1);
`;export const ChartSettingsTabMenuSelectboxStyled=c(Selectbox)`
	margin-left: var(--spacer-1);
	&:hover {
		background-color: var(--dropdown-hovered-bg);
	}
`;export const ChartSettingsTabCrosshairContainerStyled=c['div']`
	display: flex;
	align-items: center;
`;export const ChartSettingsTabPriceTypeContainerStyled=c(ChartSettingsTabGeneralItemStyled)`
	display: flex;
	align-items: center;
	margin-left: var(--spacer-6);

	&:hover {
		background-color: var(--dropdown-default-bg);
	}
`;export const ChartSettingsTabDivider=c['hr']`
	margin: var(--spacer-0);
	height: 1px;
	border: none;
	background-color: var(--dropdown-list_item-divider-bg);
	visibility: ${d=>d['visible']?'visible':'hidden'};
`;export const ChartSettingsResetButton=c(Button)`
	height: 24px;
	padding: var(--spacer-1);
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m);
	color: var(--link-default-text);
	margin-top: var(--spacer-3);

	border: 1px solid transparent;

	&:focus {
		border-color: var(--button-focus-border);
	}
`;export const ChartSettingsTabForm=c['form']``;