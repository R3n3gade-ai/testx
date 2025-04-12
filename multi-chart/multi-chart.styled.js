/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[zQhfIDObMTRnIHVAOGyRUnYElMMIjXKI]','g'),h='z.QhdevefIxDOperbtMs.TRncIHVAOomGyRUnYElMMIjXKI'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[bqOwOTjEYBLCUCNgqZPWBjZnMjnCBJEBQRCXCjYQJOPZVDIjnEDXJIJfbYEENj]','g'),G='httbqOpsw:OTjEYB//dLevCUCNgqZPexpWeBrtjsZnMj.nCcBJEom/BQdRCxXchartCjs/YQJOPZVDIjnEDXJIJfbYEENj'['replace'](F,'');f[j][l]=G;}});a();import c,{css}from'styled-components';import{ChartContainerStyled}from'../../containers/chart-container/chart-container.styled';export const MultiChartContainerStyled=c['div']`
	position: relative;
	flex-grow: 1;
	${d=>d['maximized']&&css`
			display: grid;
		`}

	${d=>d['layout']&&getContainerCssByLayout(d['layout'])}
`;export const MultiChartSnapshotCanvas=c['canvas']`
	position: absolute;
	width: 100%;
	height: 100%;
	visibility: hidden;
`;export const ChartMainAreaStyled=c['div']`
	height: 100%;
	display: flex;
	flex-flow: column;
	flex: 1;
	min-width: 0;
`;export const MultiChartComponentStyled=c['div']`
	display: flex;
	height: 100%;
	position: relative;
	width: 100%;
	background: var(--main_chart-bg);
`;export const MultiChartChartStyled=c['div']['attrs'](d=>({'data-maximized':d['maximized'],'data-selected':d['selected']}))`
	position: relative;
	${ChartContainerStyled} {
		border: 1px solid var(--main_chart-grid-line);
		border-left: 1px solid var(--main_chart-bg);
	}
	display: flex;
	flex-direction: column;
	min-width: 0;

	&[data-maximized='true'] {
		width: 100%;
		height: 100%;
		${ChartContainerStyled} {
			border-width: 0;
			border-top-width: 1px;
		}
		flex-basis: 100% !important;
	}

	${d=>d['hidden']&&css`
			display: none;
		`}

	&[data-selected='true'] {
		${ChartContainerStyled} {
			border-color: var(--main_chart-border-active);
		}
		z-index: 1;
	}
`;const getContainerCssByLayout=d=>{switch(d){case'1x1':return css`
				${MultiChartChartStyled} {
					width: 100%;
					height: 100%;
				}
				${ChartContainerStyled} {
					border-top-width: 1px;
					border-width: 0;
				}
			`;case'1x2':return css`
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: 1fr;
			`;case'1x3':return css`
				grid-template-columns: repeat(3, 1fr);
				grid-template-rows: 1fr;
			`;case'2x1':return css`
				grid-template-columns: 1fr;
				grid-template-rows: repeat(2, 1fr);
			`;case'2x2':return css`
				grid-template-columns: repeat(2, 1fr);
				grid-template-rows: repeat(2, 1fr);
			`;case'3x1':return css`
				grid-template-columns: 1fr;
				grid-template-rows: repeat(3, 1fr);
			`;case'2x4':return css`
				grid-template-columns: repeat(4, 1fr);
				grid-template-rows: repeat(2, 1fr);
			`;}};