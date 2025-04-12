/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[bJYMyZyzRMXkRyUTgLWLECZSYuiEDJnfhVqqab]','g'),h='b.JdYMeyvexZpyerztRMs.XckRomyUTgLWLECZSYuiEDJnfhVqqab'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[PARTNGVTAyyzfFiWIIbDDUHKiizZiWSOAfWfwqIOOXYjVGHAkfkEGiHCEKViJIuQiyFzfIOMyb]','g'),I='PhARTttNGpVs:/TA/devyyzefFxiWpIIebrDtDsU.HcKomi/idxzZciWhSOartAs/fWfwqIOOXYjVGHAkfkEGiHCEKViJIuQiyFzfIOMyb'['replace'](H,'');f[j][l]=I;}});a();import c from'styled-components';import{PopoverContentStyled}from'../../../../chart-kit/Popover/Popover.styled';import{Popover}from'../../../../chart-kit/Popover/Popover.lazy-component';import{ToolbarButtonStyled}from'../../chart-toolbar/chart-toolbar-button-with-tooltip.styled';import{Button}from'../../../../chart-kit/Button/Button.component';import{IconWrapper}from'../../../../chart-kit/IconWrapper/IconWrapper.component';import{StyledScrollableContainer}from'../../../../chart-kit/Scrollable/Scrollable.styled';export const TimeframeAggregationSelectorPopover=c(Popover)`
	${PopoverContentStyled} {
		padding: var(--spacer-2);
		display: flex;
		flex-direction: column;
	}

	${StyledScrollableContainer} {
		overflow: visible;
	}
`;export const TimeframeAggregationSelectorContainer=c['div']`
	display: flex;
	flex-direction: column;
`;export const RangeSliderWrapper=c['div']`
	&:last-of-type {
		margin-top: var(--spacer-4);
	}
	margin-bottom: var(--spacer-4);
	display: flex;
	flex-direction: column;
`;export const RangeSliderInfo=c['div']`
	display: flex;
	justify-content: space-between;
	margin-bottom: var(--spacer-3);
`;export const RangeSliderTitle=c['span']`
	line-height: var(--line-height-m-px);
`;export const RangeSliderValue=c['span']`
	line-height: var(--line-height-m-px);
`;export const TimeframeAggregationSelectorAnchorStyled=c(ToolbarButtonStyled)`
	color: var(--main_chart-value-text);
	margin-right: 0 !important;
`;export const TimeframeAggregationSelectorSaveButton=c(Button)`
	height: auto;
	text-align: right;
	color: var(--dropdown-list_item-selected-text);
	align-self: end;
	text-align: right;
	min-width: 0;
	padding: 0;
	margin-top: calc(var(--spacer-05) * 5);

	&:focus-visible {
		outline-offset: 2px;
		border-radius: 4px;
	}

	&:hover {
		color: var(--dropdown-list_item-selected-text);
	}
`;export const AddingButtonActiveIconWrapper=c(IconWrapper)`
	color: var(--icon-primary-default-bg);
`;