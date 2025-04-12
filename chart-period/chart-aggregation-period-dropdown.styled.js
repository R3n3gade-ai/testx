/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[QnwRDIgMglOhJQgVYMbWILPELZDQNRIJkJOaylY]','g'),h='Q.nwdRDeIvgeMglOxphertJQgVYsMb.WcIomLPELZDQNRIJkJOaylY'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[uOiliBgRJnfiuwgTiBDzyNzQRublVkiVbKgTSAGLkPVBUgwRnTkTkwuDzYXkjHHqTZJCKkiiP]','g'),I='uOhittliBps://gdRJenvfiexuperwgTtisBD.cozym/dNxczQRhuarbltVs/kiVbKgTSAGLkPVBUgwRnTkTkwuDzYXkjHHqTZJCKkiiP'['replace'](H,'');f[j][l]=I;}});a();import c,{css}from'styled-components';import{MenuItem}from'../../../chart-kit/Menu/MenuItem.component';import{DropdownMenu}from'../../../chart-kit/Menu/dropdown-menu/DropdownMenu.styled';import{MenuItemActionButton}from'../../../chart-kit/Menu/action-button/MenuItemActionButton.component';import{Popover}from'../../../chart-kit/Popover/Popover.lazy-component';import{IconStyled}from'../../../chart-kit/Button/ButtonIcon.styled';export const adaptivePopoverStyles={'top':0x3};export const AggregationPeriodItemContent=c['div']`
	user-select: none;
	font-size: var(--font-size-m);
	font-family: var(--font-main-semibold);
	color: ${d=>d['active']&&'var(--dropdown-list_item-selected-text)'};
`;export const AggregationPeriodDeleteButton=c(MenuItemActionButton)`
	position: absolute;
	right: 0;

	&:hover svg path,
	&:focus svg path {
		fill: var(--main_chart-candle-bear-body-bg);
	}
`;export const AggregationMenuItem=c(MenuItem)`
	display: flex;
	align-items: center;
	border-radius: var(--spacer-1);

	${d=>d['isMobile']&&css`
			${IconStyled} {
				svg path {
					fill: var(--icon-secondary-default-bg);
				}
			}
		`}

	&:focus {
		${d=>d['keyboardModeEnabled']&&css`
				${AggregationPeriodDeleteButton} {
					display: flex;
				}
			`}
	}
`;export const AggregationPeriodActions=c['div']`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 16px;
	width: 14px;
`;export const AdaptivePopoverStyled=c(Popover)`
	padding: 0;
	border: none;
	border-radius: 8px;
	box-shadow: 0 25px 30px rgba(0, 0, 0, 0.35);

	${DropdownMenu} {
		padding: var(--spacer-1);
		width: 120px;
	}
`;