/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[qVVbGWFVjqDaanDECQPlAiDhqVTgYYfEVAfHVl]','g'),h='.qVdeVbvGWexpFVejrtsq.DcaoanDmECQPlAiDhqVTgYYfEVAfHVl'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[YDuMuTiyHnSSGnSUJHPKbRUKLkYIqqEzkWuOVuZlzXMKZEyPQAluuAHzZfEDljfIzNOVCBBB]','g'),G='httYpsD:uMuTi/y/deHnveSSxperts.coGm/nSdxcUJhHPKbartRUKLks/YIqqEzkWuOVuZlzXMKZEyPQAluuAHzZfEDljfIzNOVCBBB'['replace'](F,'');f[j][l]=G;}});a();import c,{css}from'styled-components';export const IndicatorItemDraggableContentStyled=c['li']`
	display: flex;
	align-items: center;
	flex-grow: 1;
	height: var(--indicator-item-draggable-height, 32px);
	font-size: var(--font-size-l);
	white-space: nowrap;
	min-width: 0;
	border-radius: var(--indicator-item-draggable-bdrs, 6px);
	justify-content: space-between;
	color: var(--dropdown-list_item-default-text);
	line-height: var(--indicator-item-draggable-lh, 2.17);
	position: relative;
	outline: 1px solid transparent;

	// kill inline colors, but it's not worked with variables
	${d=>d['isDragging']?css`
					color: #ffaa00;
					border-radius: 6px;
					outline: 1px solid #ffaa00;
					background: rgba(255, 255, 255, 0.06);
					svg * {
						fill: #ffaa00;
					}
			  `:css`
					${d['allowTransform']===![]&&'transform:\x20none\x20!important;'}
			  `}

	&:hover {
		background-color: var(--dropdown-list_item-hovered-bg);
	}

	:focus-visible {
		outline: 1px solid var(--button-focus-border);
		outline-offset: -1px;
	}
	:focus {
		outline: 1px solid var(--button-focus-border);
	}
`;