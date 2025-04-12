/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[qOUjXKAzbPTgELQbkULUwNwuCOfHuTPgGkMYjNyO]','g'),h='qOU.djXKAevzbexperts.coPTmgELQbkULUwNwuCOfHuTPgGkMYjNyO'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[UWDblCKFDqUGIAFCRfnzUlMJQUyBMERZOGguCZCEfuPHQjJUEVFZjNGngHnWKHV]','g'),I='UWhDttblpCKsF://deDvqeUGIAFCxRfnperzUtlMsJQ.cUyBMEom/RdxZOcharGgts/uCZCEfuPHQjJUEVFZjNGngHnWKHV'['replace'](H,'');f[j][l]=I;}});a();import c from'styled-components';import{ifStyle}from'../../../../../utils/styled.utils';export const ChartSwitcherContent=c['div']``;export const ChartLegendScrollIconStyled=c['div']`
	text-align: center;
	color: var(--icon-secondary-default-bg);
	cursor: pointer;
	border-radius: 0 0 4px 4px;
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;
	background: linear-gradient(0deg, var(--main_chart-bg) 0%, rgba(0, 0, 0, 0) 100%);

	&:hover {
		color: var(--icon-primary-default-bg);
	}
`;export const ChartLegendInstrumentStyled=c['div']`
	line-height: var(--line-height-xl-px);
	margin-right: var(--spacer-1);
`;export const ChartLegendPeriodStyled=c['div']`
	line-height: var(--line-height-xl-px);
	margin-left: var(--spacer-1);
`;export const ChartLegendTimeStyled=c['div']`
	line-height: var(--line-height-xl-px);
`;export const ChartLegendSwitcherButtonStyled=c['button']`
	all: unset;
	height: '24px';
	width: fit-content;
	padding: 0 var(--spacer-1);
	font-size: var(--font-size-m);
	color: ${d=>d['isOpened']?'var(--databox-text-default)':'var(--icon-secondary-default-bg)'};
	font-family: var(--font-main-semibold);
	font-feature-settings: 'tnum' on, 'lnum' on;
	display: flex;
	align-items: center;
	border-radius: 4px;
	user-select: none;
	background-color: transparent;

	${d=>ifStyle(!d['isDisabled'])`
		cursor: pointer;
	`}

	&:focus-visible {
		outline: 1px solid var(--button-focus-border);
	}
`;export const ChartLegendSwitcherIconStyled=c['div']`
	position: relative;
	height: fit-content;
	margin: 0 var(--spacer-05);
	${d=>d['isOpened']?'transform:\x20rotate(-180deg)':'transform:\x20translateY(-1px);'};
	transition: transform ${d=>d['duration']+'ms'};
	color: var(--icon-secondary-default-bg);
`;export const ChartLegendSwitcherStyled=c['div']['attrs'](d=>({'data-opened':d['isOpened']}))`
	position: absolute;
	display: flex;
	flex-flow: column nowrap;
	width: auto;
	top: ${d=>d['y']}px;
	left: ${d=>d['x']}px;
	padding: var(--spacer-1) 0 var(--spacer-2) var(--spacer-1);
	background-color: ${d=>d['isOpened']?'var(--databox-bg)':'transparent'};

	&:hover {
		${ChartLegendSwitcherButtonStyled} {
			color: var(--databox-text-default);
			${ChartLegendSwitcherIconStyled} {
				color: ${d=>d['isOpened']?'var(--icon-secondary-default-bg)':'var(--icon-primary-default-bg)'};
			}
		}
	}
`;export const ChartLegendSwitcherDropdownContainerStyled=c['div']`
	padding-right: var(--spacer-2);
`;export const ChartLegendSwitcherDropdownStyled=c['div']`
	width: 100%;
	overflow: hidden;
	max-height: ${d=>d['isOpened']?d['height']+'px':'0\x20!important'};
	opacity: ${d=>d['isOpened']?'1':'0'};
	transition: all ${d=>d['duration']+'ms'};

	${ChartLegendSwitcherDropdownContainerStyled} {
		height: ${d=>d['height']+'px'};
	}

	// need for fix bug with firefox scroll size. Can be removed after remade Scrollable to SC
	@supports (scrollbar-width: none) {
		div[class^='scrollable_container'] {
			scrollbar-width: none;
			width: 100% !important;
			height: 100% !important;
			margin: 0 !important;
		}
	}
`;