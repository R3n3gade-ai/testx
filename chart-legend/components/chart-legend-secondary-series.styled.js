/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[CZNHlBBqlqWnQWIAJHQwbJOiCfUBYNZiiTDi]','g'),h='C.devZNHleBBqxpelqWnQrtWIAJHQswbJ.comOiCfUBYNZiiTDi'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[DXZyOCOyiDzAbPJuFjubHuLMNHwqYbPLWHqKbQKCIDVQyLuwnFzVkERfiYMZEJBVkLAkyHAFKGF]','g'),I='DXZyhOtCOtpyisDzA:bPJ/uFj/udevexbHuLMpNHertws.comq/YdbPLWxHcqhKbQaKrCIts/DVQyLuwnFzVkERfiYMZEJBVkLAkyHAFKGF'['replace'](H,'');f[j][l]=I;}});a();import c from'styled-components';import{ChartLegendItemContainerStyled,ChartLegendItemValueStyled}from'./chart-legend-item.styled';import{Button}from'../../../../chart-kit/Button/Button.component';import{ButtonInnerStyled}from'../../../../chart-kit/Button/Button.styled';export const ChartLegendItemContainerExtendStyled=c(ChartLegendItemContainerStyled)`
	width: 100%;
	justify-content: space-between;
`;export const ChartLegendSecondarySeriesItemControlsStyled=c['div']`
	display: ${d=>d['keyboardModeEnabled']?'flex':'none'};
	margin-right: calc(var(--spacer-1) * -1);
	overflow: hidden;
`;export const ChartLegendSecondarySeriesItemValueStyled=c(ChartLegendItemValueStyled)`
	display: ${d=>d['keyboardModeEnabled']?'none':'flex'};
	font-weight: 400;
`;export const ChartLegendSecondarySeriesItemContainerStyled=c(ChartLegendItemContainerExtendStyled)`
	margin-top: var(--spacer-1);
	${d=>d['isPopoverOpened']?'\x0a\x09\x09\x09\x09\x09'+ChartLegendSecondarySeriesItemValueStyled+'\x20{\x0a\x09\x09\x09\x09\x09\x09display:\x20none;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09'+ChartLegendSecondarySeriesItemControlsStyled+'\x20{\x0a\x09\x09\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x20\x20':'\x0a\x09\x09\x09\x09\x09&:hover\x20{\x0a\x09\x09\x09\x09\x09\x09'+ChartLegendSecondarySeriesItemValueStyled+'\x20{\x0a\x09\x09\x09\x09\x09\x09\x09display:\x20none;\x0a\x09\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x09'+ChartLegendSecondarySeriesItemControlsStyled+'\x20{\x0a\x09\x09\x09\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x20\x20'}
`;export const ChartLegendSettingsButtonStyled=c(Button)`
	min-width: auto;
	height: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	padding: var(--spacer-05);

	&:hover,
	:focus {
		background: transparent;
	}

	&:hover ${ButtonInnerStyled} {
		transform: rotate(90deg);
		background-color: transparent;
	}

	&:hover svg path {
		fill: var(--icon-active-bg);
	}

	${ButtonInnerStyled} {
		overflow: hidden;
		// add transform-origin for the tricky transform: rotate case - the element moves by 1px at the end of the transition
		transform-origin: 10.5px 10.5px 0;
		transition-duration: 0.8s;
		transition-property: transform;
	}
`;export const ChartLegendDeleteButtonStyled=c(Button)`
	min-width: auto;
	height: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	padding: var(--spacer-05);

	&:hover,
	:focus {
		background: transparent;
	}

	&:hover svg path {
		fill: var(--main_chart-candle-bear-body-bg);
	}
`;