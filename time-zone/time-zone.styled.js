/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[GaHOOIqTOEaSHhujlFAnVJHIMZgUEGG]','g'),h='.GdeveaHxOOpeIqTOrEaStHs.cohmujlFAnVJHIMZgUEGG'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[kiWGNLFQQlFzIIVRCBAPVOfwPOgUDAFEWRwDKMSJqzWLVuWSDnJBDyPiTGUQSgKkUJKUzgGYIFwg]','g'),I='khitWtGpNLFQQlsF:z/II/VdRCeBvAPexperVtOfswP.cOomg/UdxDcAFharEWtRs/wDKMSJqzWLVuWSDnJBDyPiTGUQSgKkUJKUzgGYIFwg'['replace'](H,'');f[j][l]=I;}});a();import c from'styled-components';import{MenuItem}from'../../../chart-kit/Menu/MenuItem.component';import{Popover}from'../../../chart-kit/Popover/Popover.lazy-component';import{PopoverContentStyled}from'../../../chart-kit/Popover/Popover.styled';import{StyledScrollableContainer}from'../../../chart-kit/Scrollable/Scrollable.styled';import{ifStyle}from'../../../utils/styled.utils';import{MenuStyled}from'../../../chart-kit/Menu/Menu.styled';export const TimeZoneContainerStyled=c['div']`
	position: relative;
	z-index: 19;
	background: var(--main_chart-bg);
	user-select: none;
	margin-right: var(--spacer-2);
	flex-shrink: 0;
`;export const AdaptivePopoverStyled=c(Popover)`
	background-color: var(--dropdown-default-bg) !important;
	border: none;
	border-radius: 8px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.15), 0 25px 30px rgba(0, 0, 0, 0.35);
	padding-top: 35px;
	padding-bottom: 5px;

	${StyledScrollableContainer} {
		min-width: inherit;
	}

	${PopoverContentStyled} {
		overflow: visible;
		width: 170px;
		height: 330px;
	}

	${MenuStyled} {
		display: flex;
		height: inherit;
	}
`;export const TimeZoneMenuItemStyled=c(MenuItem)`
	font-family: var(--font-main-semibold);
	font-size: var(--font-size-m);
	line-height: var(--line-height-m-px);
	padding: var(--spacer-1) var(--spacer-2);
	margin: 0;
	border-radius: 4px;
	justify-content: flex-start;
`;export const TimeZoneMenuItemUTCDiffStyled=c['span']`
	color: var(--dropdown-list_item-disabled-text);
	margin-left: var(--spacer-1);

	${d=>ifStyle(d['isActive'])`
		color: var(--dropdown-list_item-selected-text);
    `}
`;export const TimezonesVirtualItemsContainer=c['div']`
	width: 100%;
	position: relative;
	height: ${d=>d['height']}px;
`;export const TimezonesVirtualItemsWrapper=c['div']`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	transform: translateY(${d=>d['offset']}px);
`;