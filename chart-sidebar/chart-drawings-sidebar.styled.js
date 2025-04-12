/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[kHyDSlzAnnUNFIFnZnqggLlIEkNDCZuBOiM]','g'),h='.kHyDdevSlezxperAnntUsNFIF.comnZnqggLlIEkNDCZuBOiM'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[THfBifwiRkMPQLjSZNVnyGOOQMGuRJQwUnzJiXASzPRiunXIDgTQALZCVqAzOHXFwLWYD]','g'),G='htTHftBpifsw:iR/k/MdPQLjSZevNeVxpertsn.yGOOcQMGuRoJmQwU/nzdxcJhaiXrAts/SzPRiunXIDgTQALZCVqAzOHXFwLWYD'['replace'](F,'');f[j][l]=G;}});a();import c from'styled-components';import{Scrollable}from'../../../chart-kit/Scrollable/Scrollable';import{ChartLegendScrollIconStyled}from'../chart-legend/components/chart-legend-switcher/chart-legend-switcher.styled';import{ifStyle}from'../../../utils/styled.utils';export const DrawingsSidebarStyled=c['div']`
	position: relative;
	height: 100%;
	background-color: var(--main_chart-bg);

	&:after {
		content: '';
		width: 1px;
		height: 100%;
		background-color: var(--main_chart-grid-line);
		position: absolute;
		top: 0;
		right: 0;
	}
`;export const SidebarDrawingsItemsStyled=c['div']`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 0;
`;export const DrawingsListStyled=c['div']`
	position: relative;
	height: ${d=>d['isMobile']?'calc(100%\x20-\x20132px)':'calc(100%\x20-\x20164px)'};
`;export const SidebarScrollableStyled=c(Scrollable)`
	overflow-y: hidden;
`;export const SidebarDrawingsArrowUp=c(ChartLegendScrollIconStyled)`
	top: 0;
	bottom: auto;
	z-index: 1;
	background: linear-gradient(180deg, var(--main_chart-bg) 0%, rgba(0, 0, 0, 0) 100%);

	${d=>ifStyle(d['isMobile'])`
		color: var(--icon-primary-default-bg);
	`}

	&:hover {
		color: var(--icon-primary-default-bg);
	}
`;export const SidebarDrawingsArrowDown=c(ChartLegendScrollIconStyled)`
	z-index: 1;
	${d=>ifStyle(d['isMobile'])`
		color: var(--icon-primary-default-bg);
	`}
`;