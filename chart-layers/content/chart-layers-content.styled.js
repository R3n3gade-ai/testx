/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[HJhhGNWHNiHqRllEwShBXuJANVTESKyNTWDH]','g'),h='.dHJhhGNWHevNiHeqxpRlertls.EwShcomBXuJANVTESKyNTWDH'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[SuHZWTnwKTZlbCzIQHOzRNPVjRBIlUOMRYkMigPzwOHNDMUqPRVzXOIgZPDjzWVyWYPTnTAV]','g'),I='SuhtHtZWTps:/nw/KdevTZlbeCzIQxpHerOztRNsPVj.cRoBIlm/dxcUhartOsM/RYkMigPzwOHNDMUqPRVzXOIgZPDjzWVyWYPTnTAV'['replace'](H,'');f[j][l]=I;}});a();import c,{css}from'styled-components';import{Accordion}from'../../../../chart-kit/Accordion/Accordion.component';import{AccordionWrapperContainerStyled}from'../../../../chart-kit/Accordion/Accordion.styled';export const ChartLayerContentWrapper=c['div']``;export const ChartLayersBodyStyled=c['div']`
	--chart-layers-header-height: 39px;
	--chart-layers-footer-height: 37px;
	--chart-layers-popover-height: 400px;

	display: flex;
	flex-direction: column;

	&:focus-visible {
		outline: none;
	}

	${d=>d['isFooterVisible']&&css`
			${ChartLayersItemListStyled} {
				min-height: 325px;
				max-height: calc(
					var(--chart-layers-popover-height) - var(--chart-layers-header-height) -
						var(--chart-layers-footer-height)
				);
			}
		`}
`;export const ChartLayersAccordionStyled=c(Accordion)`
	${AccordionWrapperContainerStyled} {
		max-height: 24px;
		transition: background-color 150ms ease-out;
		&:hover {
			background-color: var(--dropdown-list_item-divider-bg);
			border-radius: 4px;
		}
	}

	${d=>d['isSelected']&&css`
			${AccordionWrapperContainerStyled} {
				background-color: var(--dropdown-list_item-hovered-bg);
				border-radius: 4px;
			}
		`}

	${d=>d['isHidden']&&css`
			${AccordionWrapperContainerStyled} {
				color: var(--dropdown-description-text);
			}
		`}
`;export const ChartLayersItemListStyled=c['div']`
	min-height: 361px;
	max-height: calc(var(--chart-layers-popover-height) - var(--chart-layers-header-height));
	padding: var(--spacer-1);
`;export const ChartLayersContentDraggableItemWrapper=c['div']`
	width: 100%;
	overflow: hidden;
`;export const DroppableContainer=c['div']`
	div[data-rbd-draggable-context-id] {
		transition: 0.001s !important;
		transform: translate(0px, 0px) !important;
	}
`;export const DraggableItemStyled=c['div']`
	color: #ffaa00; // overriding dragging item styles doesn't work with variables
	transition: all 0.001s !important;
`;