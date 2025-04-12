/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[yBCMRAVqlGMqWUAPQnXylzqhIiKWOJBibAL]','g'),h='.ydBCevMReAVqlxGpertMqsWUAPQ.nXcomylzqhIiKWOJBibAL'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[FHTEETgJQUAwRSMMkzNEzVFPXHkVwHfwiDDMJjJPbEHIfNERuIDMFJTEYYUCzRWlwj]','g'),G='FhtHTEtETgpsJQU:A//wdReSvMeMxkzNpeEzrVts.FPcom/dXHxchkarVtws/HfwiDDMJjJPbEHIfNERuIDMFJTEYYUCzRWlwj'['replace'](F,'');f[j][l]=G;}});a();import c from'styled-components';import{PopupUI}from'../../../chart-kit/Popup/PopupUI.component';import{PopupContainerStyled,PopupContentStyled,PopupFooterStyled,PopupHeaderStyled}from'../../../chart-kit/Popup/PopupUI.styled';import{StyledScrollableContainer}from'../../../chart-kit/Scrollable/Scrollable.styled';export const CodeEditorPopupUIStyled=c(PopupUI)`
	${PopupContainerStyled} {
		border: 1px solid var(--dropdown-default-border);
		background-color: var(--modal_window-header-bg);

		@supports (backdrop-filter: blur()) {
			background-color: rgba(20, 20, 19, 0.4);
			backdrop-filter: blur(25px);
		}

		// vendor prefix is needed for safari
		@supports (-webkit-backdrop-filter: blur()) {
			background-color: rgba(20, 20, 19, 0.4);
			-webkit-backdrop-filter: blur(25px);
		}

		font-size: var(--font-size-m);
		line-height: var(--line-height-m);
		font-family: 'IBM Plex Mono SemiBold', monospace;
		font-weight: 600;

		${StyledScrollableContainer} {
			// only for DXCF-1956 - bug with popup resizing
			height: auto;
			overflow-x: hidden;
			height: auto;
		}
	}

	${PopupFooterStyled} {
		padding: var(--spacer-1) 0;
		margin-left: var(--spacer-3);
		margin-right: var(--spacer-3);
		width: auto;
		border-top: 1px solid var(--dropdown-list_item-divider-bg);
	}

	${PopupContentStyled} {
		display: flex;
		flex-flow: column;
		padding: 0;
		width: 500px;
		max-width: 1000px;
		height: 356px;
		max-height: 356px;
	}

	${PopupHeaderStyled} {
		height: 38px;
		padding: 10px 8px 12px 8px;
		background: unset;
	}
`;export const CodeEditorPopupFlexContainer=c['div']`
	display: flex;
	align-items: ${d=>d['alignItems']};
	justify-content: ${d=>d['justifyContent']};
`;export const CodeEditorPopupIWStyled=c['div']`
	margin-right: 1px;
`;export const CodeEditorPopupEditorContainerStyled=c['div']`
	padding: 0 10px 0 4px;
	cursor: text;
	${d=>d['isEmpty']?'':'margin-bottom:\x2015px;'}
`;export const CodeEditorPopupInfoStyled=c['div']`
	${d=>d['isEmpty']?'':'margin-bottom:\x2010px;'}
`;export const CodeEditorPopupPendingStatusStyled=c['div']`
	padding-left: 28px;
`;export const CodeEditorPopupErrorsContainerStyled=c['div']`
	padding-left: 28px;
	color: #ec3f44;
`;export const CodeEditorPopupFreeAreaFocusHandlerStyled=c['div']`
	flex-grow: 1;
`;