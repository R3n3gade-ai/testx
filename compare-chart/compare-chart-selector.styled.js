/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[wibGAXjBHbYOnFHGEnFGawXXRauCqfYnZQuYW]','g'),h='.devexpwibeGrAtsXj.cBomHbYOnFHGEnFGawXXRauCqfYnZQuYW'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[RXQXOCYqIOBWXHMiAbzNzQXTjQMOTBuPnBkUYPKViOHGGZTRCCNWNPzVzVFGINCIVkGGlVNiXqIBDF]','g'),G='htRtpsX:Q//dXOCYqIeOveBWxXperts.HcMiomAb/zNzQdxXchaTjQrMOTtBsu/PnBkUYPKViOHGGZTRCCNWNPzVzVFGINCIVkGGlVNiXqIBDF'['replace'](F,'');f[j][l]=G;}});a();import{Popover}from'../../../chart-kit/Popover/Popover.lazy-component';import c from'styled-components';import{InputContainerStyled}from'../../../chart-kit/Input/Input.styled';import{SymbolSuggest}from'../symbol-suggest/symbol-suggest.component';import{SuggestContainerStyled}from'../symbol-suggest/symbol-suggest.styled';export const CompareChartPopoverStyled=c(Popover)`
	margin: 1px 0 0;
`;export const CompareChartContainerStyled=c['div']`
	font-family: var(--font-main-semibold);
	max-width: 460px;
	height: auto;
`;export const CompareChartNoDataContentStyled=c['p']`
	margin: 0;
	vertical-align: baseline;
	color: var(--dropdown-description-text);
	padding: var(--spacer-1) var(--spacer-3) var(--spacer-2);
	user-select: none;
	pointer-events: none;
	white-space: pre-line;
`;export const CompareChartSymbolSuggestStyled=c(SymbolSuggest)`
	${SuggestContainerStyled} {
		min-width: 228px;
		max-width: 448px;
	}

	${InputContainerStyled} {
		height: 28px;
		max-width: 100%;
		padding: 6px var(--spacer-3);
		margin: var(--spacer-1);
		border-radius: 6px;
		background-color: var(--dropdown-list_item-hovered-bg);
		width: calc(100% - 2 * var(--spacer-1));

		&:focus-within {
			outline-offset: -3px;
			border-radius: var(--spacer-2);
		}
	}
`;