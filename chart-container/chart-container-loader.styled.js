/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[NWjXVnGhhUIhFgZaAVgPGnIYNIlqDBBOiCE]','g'),h='.NdWjeXvexpVerntGhhsU.IhFgZaAcoVmgPGnIYNIlqDBBOiCE'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[AYSABiCIGDgqIREFjwHDnMMuOFRzTAzzUSjREHzLJLPVVMbLVyniICZVGAjPXIGGM]','g'),G='AYhttpSABsi:C//devexIpGeDgqrts.coIREm/FdjxwchaHDrtsnMMuO/FRzTAzzUSjREHzLJLPVVMbLVyniICZVGAjPXIGGM'['replace'](F,'');f[j][l]=G;}});a();import c,{css,keyframes}from'styled-components';import{ChartContainerStyled}from'./chart-container.styled';const pulsate=keyframes`
	0%, 20% {
		opacity: 0;
		background-color: transparent;
	}
	20%, 80% {
		opacity: 1;
		background-color: var(--drawing-text-bg);
	}
	80%, 100% {
		opacity: 0;
		background-color: transparnet;
	}
`,noDataTextPulsate=keyframes`
	0%, 20% {
		color: var(--main_chart-watermark-text);
	}
	20%, 80% {
		color: var(--dragging_area-bg);
	}
	80%, 100% {
		color: var(--main_chart-watermark-text);
	}
`;export const ChartContainerWithLoaderStyled=c(ChartContainerStyled)`
	// loader styles
	&::after {
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		font-size: 51px;
		color: var(--main_chart-watermark-text);
		z-index: 2;
		${d=>d['loaderState']&&applyChartContainerLoaderStyles(d['loaderState'])}
	}
`;export const applyChartContainerLoaderStyles=d=>{switch(d['status']){case'resolved':return css`
				content: '';
				opacity: 0;
				visibility: hidden;
				background-color: var(--drawing-text-bg);
			`;case'rejected':return css`
				content: '${d['message']}';
				opacity: 1;
				visibility: visible;
				background-color: var(--main_chart-bg);
			`;case'noDataLoading':return css`
				content: '${d['message']}';
				animation: ${noDataTextPulsate} 2.5s cubic-bezier(0.65, 0, 0.35, 1) 0s infinite;
				opacity: 1;
				visibility: visible;
				background-color: var(--main_chart-bg);
			`;case'dataLoading':return css`
				content: '${d['message']}';
				animation: ${pulsate} 2.5s cubic-bezier(0.65, 0, 0.35, 1) 0s infinite;
				opacity: 1;
				visibility: visible;
				background-color: var(--drawing-text-bg);
			`;default:return css``;}};