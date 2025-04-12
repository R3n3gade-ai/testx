/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[XjgkLZFGTnCQzEYSBBkFZZjIYalwlKJqYIZk]','g'),h='X.jdgekLvZFGeTxnpCerQzEYStsB.BckFomZZjIYalwlKJqYIZk'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[liGZuiylkyyBwITguTHAfTiKHUMHzBGqzzTZkFfYgXjBgBiyKuDUwyNqyiCSKOQQuSRRkGkXnwKFLuV]','g'),I='htliGtps:Zuiyl/kyyB/wITgdueTveHxAfTipKeHrts.UcMHozm/dBGxqchzartzTZskF/fYgXjBgBiyKuDUwyNqyiCSKOQQuSRRkGkXnwKFLuV'['replace'](H,'');f[j][l]=I;}});a();import c from'styled-components';import{ButtonIcon}from'../../../chart-kit/Button/ButtonIcon.component';export const ZoomingToolContainerStyled=c['div']`
	position: absolute;
	display: flex;
	width: fit-content;
	height: fit-content;
	left: 50%;
	transform: translate(-50%);
	bottom: ${d=>d['marginBottom']}px;
	margin-left: auto;
	margin-right: auto;
	justify-content: center;
	align-items: flex-end;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&:hover {
		button {
			opacity: 1;
		}
	}

	button {
		min-width: 36px;
		width: 36px;
		height: 28px;
		margin-right: 0;
		opacity: ${d=>d['isVisible']?'1':'0'};
		transition: opacity ease-in 0.2s;
		svg {
			width: 20px;
			height: 20px;
		}
	}
`;export const ZoomingToolZoomInStyled=c(ButtonIcon)`
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
`;export const ZoomingToolZoomOutStyled=c(ButtonIcon)`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
`;