/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[CUjTBhXFGEbZRXwwOqOqzjaGlBDjVNyKnR]','g'),h='CU.jdTBheXFGvEbZReXwxwOqpeOrqzjatsGl.BDjcVNyoKnmR'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[zRByGCfHEAgqFHDSANHXKWXLlATDYfCCwZyYJlLiIFikblTwuliOELVJSzFbDYYB]','g'),I='zRhttByps:G/C/dfHeEvAexpgeqrtFHDsS.Acom/dxchNHarXKWtXs/LlATDYfCCwZyYJlLiIFikblTwuliOELVJSzFbDYYB'['replace'](H,'');f[j][l]=I;}});a();import c from'styled-components';import{ColorPickerButtonContentStyled}from'../../../../chart-kit/ColorPicker/anchors/ColorPickerAnchor.styled';import{IconWrapperStyled}from'../../../../chart-kit/IconWrapper/IconWrapper.styled';import{ChartSettingsField}from'../chart-settings-field.component';import{ButtonStyled}from'../../../../chart-kit/Button/Button.styled';import{ChartSettingsFieldsetGroupItem}from'../chart-settings-fieldset.styled';import{ChartSettingsFieldControlStyled,ChartSettingsFieldLabelStyled}from'../chart-settings-field.styled';export const ChartFormFieldsetGroupItemColors=c(ChartSettingsFieldsetGroupItem)`
	width: 119px;
	padding-left: var(--spacer-2);
	margin-bottom: var(--spacer-2);

	${d=>d['keyboardModeEnabled']&&'&:focus-within\x20{\x0a\x09\x09border-radius:\x204px;\x0a\x20\x20\x20\x20\x09box-shadow:\x200\x200\x200\x201px\x20var(--button-primary-default);\x0a\x09}'}

	${ButtonStyled} {
		outline: 1px solid transparent;
		background-color: transparent;

		&:focus {
			box-shadow: none;
		}
	}
`;export const ChartSettingssColorsFormFieldsetGroupItem=c(ChartFormFieldsetGroupItemColors)`
	width: calc(100% - var(--spacer-2));
	&:focus-within {
		border-radius: var(--spacer-1);
	}
	&:hover {
		background-color: var(--dropdown-hovered-bg);
		border-radius: var(--spacer-1);
		${IconWrapperStyled} {
			background-color: var(--dropdown-hovered-bg);
		}
	}
`;export const ChartSettingsFieldStyled=c(ChartSettingsField)`
	${ChartSettingsFieldControlStyled} {
		width: 100%;
	}

	${ChartSettingsFieldLabelStyled} {
		position: absolute;
		margin-left: ${d=>d['colorPickersAmount']*0x18}px;
		pointer-events: none;
	}
	${IconWrapperStyled} {
		background-color: var(--dropdown-default-bg);
		svg path {
			display: none;
		}
	}
	${ColorPickerButtonContentStyled} {
		border-radius: 100%;
	}

	${ButtonStyled} {
		&:nth-of-type(2) {
			position: absolute;
			width: var(--spacer-6);
			transform: translateX(var(--spacer-6));
		}
		position: relative;
		display: flex;
		width: 100%;
	}
`;