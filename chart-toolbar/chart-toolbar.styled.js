/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[ICluNEiEXzOAOESDOHJTWnSPJWqXqbJyOUHXYI]','g'),h='.ICdevlexupNerEiEXztOsAOESDOH.JTWcomnSPJWqXqbJyOUHXYI'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[SnIUiKZVKYnECElYCLUOkQiwYPFlCfnMDFSYJMTbbAUQYBCABVYVCHTMYHXqLSRqUfUTyyTBUzAwyzCzfBzF]','g'),I='ShntItUiKZVps://KdYnevexECElYpeCrtsLUO.ckom/dxQchiwaYPrFts/lCfnMDFSYJMTbbAUQYBCABVYVCHTMYHXqLSRqUfUTyyTBUzAwyzCzfBzF'['replace'](H,'');f[j][l]=I;}});a();import c from'styled-components';import{ButtonIcon}from'../../../chart-kit/Button/ButtonIcon.component';export const ChartToolbarArea=c['div']`
	background: var(--main_chart-bg);
	border-bottom: 1px solid var(--main_chart-grid-line);
`;export const ChartToolbarLoadingIndicatorStyled=c['div']`
	position: absolute;
	content: '';
	display: block;
	width: ${d=>d['percentage']+'%'};
	height: 1px;
	background-color: var(--progress_bar);
	transition: width 300ms ease-out;
	bottom: -1px;
	z-index: 2;
`;export const ChartToolbarStyled=c['div']`
	position: relative;
	display: flex;
	width: 100%;
	top: 0;
	left: 0;
	background: var(--main_chart-bg);
	align-items: center;
`;export const ChartToolbarPopupsButtonsStyled=c['div']`
	display: flex;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	position: relative;
	height: var(--chart-toolbar-popup-button-height, 32px);
	min-width: var(--chart-toolbar-popup-button-mw, 0);

	@media (max-width: 480px) {
		width: auto;
		padding-left: var(--spacer-4);
		padding-right: var(--spacer-4);
	}
`;export const ChartToolbarPopupsButtonsWrapperStyled=c['div']`
	display: flex;
	overflow-x: auto;
	width: 100%;

	@media (max-width: 480px) {
		width: auto;
	}

	&::-webkit-scrollbar {
		display: none;
	}
	scrollbar-width: none;

	@supports (-moz-appearance: none) {
		scrollbar-width: none;
	}
`;export const ChartToolbarPopupsButtonsTrackStyled=c['div']`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	transition: left ease 0.2s;

	@media (max-width: 480px) {
		width: auto;
	}
`;export const ChartToolbarPopupsButtonsArrowStyled=c(ButtonIcon)`
	position: absolute;
	${d=>d['float']==='right'?'right:\x200px':null};
	${d=>d['float']==='left'?'left:\x200px':null};
	transform: rotate(${d=>d['float']==='right'?'0':'180deg'});
	border-radius: 0;
	top: 0;
	border-left: 1px solid var(--main_chart-grid-line);
	color: var(--toolbar-button-default-color);
	background-color: var(--main_chart-bg);
	height: 100%;
	width: 17px;
	min-width: auto;
	margin: 0;

	&:hover {
		background-color: var(--toolbar-button-default-hover-bg);
	}
`;export const MultiChartSettingsButtonStyled=c['div']`
	display: flex;

	button:first-child {
		margin-right: 5px;
	}

	@media (max-width: 480px) {
		display: none;
	}
`;export const InstrumentSelectorContainerWrapperStyled=c['div']``;