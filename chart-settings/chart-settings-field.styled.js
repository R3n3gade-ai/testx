/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[PNUPjViEANHGOiYZKUWHVNTXFXULOFkhHgUqHK]','g'),h='.dPevNUPjVieEANxHGOipeYrZKtUWs.HcoVmNTXFXULOFkhHgUqHK'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[XgCEqPubHVVbLKZPAkHDGKWQiEJVGNgjAnNFMGgbHYMnIgROQENOSVWLWyRjwlLgzROq]','g'),G='htXtgCpEqPsub:/HV/dVbLKZePvAkHeDxGKWpeQirtEJVGsN.gcjomAn/NdFMGxgbchHartsYMn/IgROQENOSVWLWyRjwlLgzROq'['replace'](F,'');f[j][l]=G;}});a();import c from'styled-components';import{ifStyle}from'../../../utils/styled.utils';export const ChartSettingsFieldContainerStyled=c['label']`
	display: flex;
	align-items: center;
	font-size: var(--font-size-l);
	user-select: none;
	color: var(--checkbox-default-text);
	white-space: nowrap;
	cursor: pointer;

	${d=>ifStyle(d['disabled'])`
			color: var(--checkbox-default-text);
			cursor: default;
		`}

	${d=>ifStyle(d['subfield'])`
			padding-left: 22px;
		`}

    ${d=>ifStyle(d['align']==='right')`
			max-width: 180px;
			width: 100%;
			min-width: 180px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		`}
`;export const ChartSettingsFieldLabelStyled=c['span']`
	display: inline-block;
	vertical-align: middle;
	width: 100%;
	font-size: var(--font-size-m);
	line-height: var(--line-height-m);
	font-family: var(--font-main-semibold);

	${d=>ifStyle(d['align'])`
			margin-right: 15px;
		`}

	${d=>ifStyle(d['hint'])`
			display: block;
			margin-left: 0;
			margin-bottom: var(--spacer-2);
		`}

    ${d=>ifStyle(d['secondary'])`
			color: var(--form-title-text);
		`}

    ${d=>ifStyle(d['isDisabled'])`
			color: var(--dropdown-list_item-disabled-text);
			cursor: default;
		`}
`;export const ChartSettingsFieldControlStyled=c['span']`
	display: flex;
	margin-right: var(--spacer-1);
	width: ${d=>d['controlsCount']>0x1?'auto':'20px'};
	height: 20px;

	& > *:not(:last-child) {
		margin-right: var(--spacer-1);
	}
`;export const ChartSettingsFieldHintStyled=c['span']`
	display: inline-block;
	vertical-align: middle;
	margin-left: 10px;
`;