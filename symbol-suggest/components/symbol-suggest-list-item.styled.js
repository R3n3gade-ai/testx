/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[JYREzIBAiuGAZCWONUqIFNqyYnTqMCya]','g'),h='.JYdReEvzexIpertsB.AcoimuGAZCWONUqIFNqyYnTqMCya'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[DTKOynMILREzSHEgkDUXSHZICOGFOAUFwTbXPDCPXFwiZnHJLLAfGLGfZylMwTwCHDRJSUDk]','g'),G='httpsD://TKdOevyneMIxpertLs.comRE/dxczharStHsE/gkDUXSHZICOGFOAUFwTbXPDCPXFwiZnHJLLAfGLGfZylMwTwCHDRJSUDk'['replace'](F,'');f[j][l]=G;}});a();import c from'styled-components';import{MenuItem}from'../../../../chart-kit/Menu/MenuItem.component';import{HighlightMarkStyled}from'../../../../chart-kit/Highlight/Highlight.styled';import{Highlight}from'../../../../chart-kit/Highlight/Highlight.component';export const SymbolSuggestListMenuItem=c(MenuItem)``;export const SymbolSuggestListItemRowStyled=c['tr']`
	margin: 0;
	padding: 0 var(--spacer-3) 0 0;
	border: 0;
	font: inherit;
	line-height: var(--line-height-m);
	vertical-align: baseline;
	text-align: left;
	cursor: pointer;
	background-color: ${d=>d['isHovered']&&'var(--dropdown-list_item-hovered-bg)'};
	@media (max-width: 650px) {
		max-width: 320px;
		font-size: var(--font-size-s);
	}
	@media (max-width: 510px) {
		max-width: 220px;
	}
	@media (max-width: 430px) {
		max-width: 120px;
	}
`;export const SymbolSuggestListItemColumnStyled=c['td']`
	margin: 0;
	padding: var(--spacer-1) var(--spacer-1) var(--spacer-1) var(--spacer-2);
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	text-align: left;
	@media (max-width: 650px) {
		max-width: 320px;
		:nth-child(2n) {
			span {
				display: block;
			}
		}
	}
	@media (max-width: 510px) {
		max-width: 220px;
	}
	@media (max-width: 430px) {
		max-width: 120px;
	}
`;export const SymbolSuggestListItemColumnNameStyled=c(SymbolSuggestListItemColumnStyled)`
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
`;export const SymbolSuggestListItemColumnTypeStyled=c(SymbolSuggestListItemColumnStyled)`
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
	text-align: right;
	vertical-align: middle;
	padding-right: var(--spacer-2);
	color: var(--dropdown-description-text);
`;export const SymbolSuggestHighlightStyled=c(Highlight)`
	position: relative;
	display: inline-block;
	max-width: 400px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	${HighlightMarkStyled} {
		background-color: transparent;
		color: var(--dropdown-list_item-selected-text);
	}
`;