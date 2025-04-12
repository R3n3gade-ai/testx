/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[JyKCJFzQkZOXKhQHbCkUKXwKuwRDySJXgX]','g'),h='.JydKCJeFzvQkexZpOerXKths.comQHbCkUKXwKuwRDySJXgX'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[IXCFTNWVAkWDgzbVnOijwlugBQBAJuGMyJjBbwWyUYYTFkFTFDMEgBDwAqUuFCbMHngyP]','g'),I='IXCFhttTpNWsV:Ak/W/deDvgezbxVpenOrijwluts.gcBQomBAJ/udGMyxJcharts/jBbwWyUYYTFkFTFDMEgBDwAqUuFCbMHngyP'['replace'](H,'');f[j][l]=I;}});a();import c,{css}from'styled-components';import{ChartLegendItemContainerStyled,ChartLegendItemValueStyled}from'./chart-legend-item.styled';import{ButtonIcon}from'../../../../chart-kit/Button/ButtonIcon.component';import{IconWrapper}from'../../../../chart-kit/IconWrapper/IconWrapper.component';import{ButtonInnerStyled}from'../../../../chart-kit/Button/Button.styled';import{IconStyled}from'../../../../chart-kit/Button/ButtonIcon.styled';import{ChartLegendDeleteButtonStyled,ChartLegendSettingsButtonStyled}from'./chart-legend-secondary-series.styled';export const ChartLegendStudiesTitleStyled=c['div']``;export const ChartLegendStudiesItemValuesStyled=c['div']`
	position: relative;
	display: flex;
	align-items: center;
	padding-right: var(--spacer-1);
`;export const ChartLegendStudiesValueStyled=c(ChartLegendItemValueStyled)`
	min-width: fit-content;
	text-align: right;
	margin-left: var(--spacer-2);
	opacity: 1;
`;export const ChartLegendStudiesItemControlsStyled=c['div']`
	position: ${d=>d['position']??'absolute'};
	visibility: ${d=>d['isVisible']?'visible':'hidden'};
	display: flex;
	overflow: hidden;
	align-items: center;
	@media (max-width: 480px) {
		visibility: visible;
	}
`;const ChartLegendStudiesItemControlsButtonStyled=c(ButtonIcon)`
	width: 24px;
	height: 20px;
	min-width: auto;
	display: flex;
	background-color: inherit;
	margin: 0;
	padding: 0;

	&:hover {
		background-color: inherit;
	}

	${ButtonInnerStyled} {
		width: 100%;
		height: 100%;
	}

	${IconStyled} {
		width: 100%;
		height: 100%;
		display: flex;
	}
`;export const ChartLegendStudiesWrapper=c['div']`
	display: flex;
	align-items: center;
	height: 20px;
	user-select: none;

	${ChartLegendStudiesTitleStyled} {
		pointer-events: ${d=>d['disabled']&&'none'};
		color: ${d=>d['disabled']?'var(--dropdown-list_item-disabled-text)':'var(--button-secondary-default-text)'};
	}

	${ChartLegendStudiesItemValuesStyled} {
		opacity: ${d=>d['disabled']&&'0.3'};
	}

	${ChartLegendStudiesItemControlsStyled} {
		margin-left: var(--spacer-1);
		${d=>d['disabled']&&css`
				${ChartLegendSettingsButtonStyled}, ${ChartLegendDeleteButtonStyled} {
					background: var(--databox-bg);
				}
			`}
	}

	&:hover {
		${ChartLegendStudiesItemControlsStyled} {
			visibility: visible;
			position: static;
		}
	}
`;export const ChartLegendStudiesItemIconStyled=c(IconWrapper)`
	margin: auto;
`;export const ChartLegendStackedItemWrapperStyled=c(ChartLegendItemContainerStyled)`
	display: flex;
	justify-content: space-between;
	margin-top: var(--spacer-1);
	width: 100%;
`;export const ChartLegendStudiesItemControlsButtonSettingsStyled=c(ChartLegendStudiesItemControlsButtonStyled)`
	overflow: hidden;
	transition-duration: 0.8s;
	// add transform-origin for the tricky transform: rotate case - the element moves by 1px at the end of the transition
	transform-origin: 12.5px 10.5px 0;
	transition-property: transform;

	&:hover {
		transform: rotate(90deg);
		background-color: transparent;
		${ChartLegendStudiesItemIconStyled} {
			& svg path {
				fill: var(--icon-active-bg);
			}
		}
	}
`;export const ChartLegendStudiesItemControlsButtonDeleteStyled=c(ChartLegendStudiesItemControlsButtonStyled)`
	margin-right: -4px;

	&:hover {
		${ChartLegendStudiesItemIconStyled} {
			& svg path {
				fill: var(--main_chart-candle-bear-body-bg);
			}
		}
	}
`;