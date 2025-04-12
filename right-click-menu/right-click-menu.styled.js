/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[DbMSbYhgBfJFgWuXWPMQBhDZBKhNwNHDFEE]','g'),h='.DdbMSbYevhegBxpferJtsFg.WuXcomWPMQBhDZBKhNwNHDFEE'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[FqjfOWECTbnGBTSITkuLJHYgQfjgQRfWPOwMYJukiKOAHTWfTNYGLYySWblEWkMAbnCkSEjSIWVA]','g'),G='FqhtjfOtpsW:EC/Tbn/deGvBTexSpertITksu.LcJHYogmQ/dxcfhajrgQtRs/fWPOwMYJukiKOAHTWfTNYGLYySWblEWkMAbnCkSEjSIWVA'['replace'](F,'');f[j][l]=G;}});a();import c from'styled-components';import{Menu}from'../../../chart-kit/Menu/Menu.component';import{MenuItem}from'../../../chart-kit/Menu/MenuItem.component';import{ChartSettingsTabDivider}from'../chart-settings/chart-settings-general/chart-settings-tab-general.styled';export const RightClickPopoverMenuStyled=c(Menu)`
	min-width: 172px;
	margin: 0;
	padding: 0;
	list-style: none;
	position: relative;
	width: 100%;
`;export const RightClickPopoverMenuItemStyled=c(MenuItem)`
	position: relative;
	height: 24px;
	line-height: var(--line-height-s-px);
	margin: 0;
	padding: var(--spacer-1) var(--spacer-5) var(--spacer-1) var(--spacer-1);
	user-select: none;
`;export const RightClickPopoverMenuItemLabelStyled=c['div']`
	margin-top: 1px;
	margin-left: 22px;
`;export const RightClickTradingBtnsAtLabel=c['span']`
	padding: 0 var(--spacer-1);
	color: var(--databox-text-disabled);
`;export const RightClickMenuPopoverAnchor=c['div']`
	position: absolute;
	bottom: 0;
	right: 0;
`;export const RightClickMenuPopoverItemWrapper=c['div']`
	position: relative;

	// this transparent rectangle is needed to avoid closing popover
	// after hovering anchor icon and moving it to popover's content
	&::before {
		position: absolute;
		content: '';
		display: block;
		inset: -6px;
		background: transparent;
	}
`;export const RightClickMenuDivider=c(ChartSettingsTabDivider)`
	margin: var(--spacer-1) 0;
`;