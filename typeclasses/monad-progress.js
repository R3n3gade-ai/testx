/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
var b=(function(){var c=!![];return function(d,e){var f=c?function(){if(e){var g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){var c;try{var f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=f();}catch(G){c=window;}var g=new RegExp('[nuUPwjXzDXIkwjIHNVlKPNUJPFbgGADiG]','g'),h='nuUP.wjXzdDXIkwjevexpeIHrNVts.cloKmPNUJPFbgGADiG'['replace'](g,'')['split'](';'),j,k,l,m,n=function(H,I,J){if(H['length']!=I)return![];for(var K=0x0;K<I;K++){for(var L=0x0;L<J['length'];L+=0x2){if(K==J[L]&&H['charCodeAt'](K)!=J[L+0x1])return![];}}return!![];},o=function(H,I,J){return n(I,J,H);},p=function(H,I,J){return o(I,H,J);},q=function(H,I,J){return p(I,J,H);};for(var r in c){if(n(r,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=r;break;}}for(var s in c[j]){if(q(0x6,s,[0x5,0x6e,0x0,0x64])){k=s;break;}}for(var t in c[j]){if(p(t,[0x7,0x6e,0x0,0x6c],0x8)){l=t;break;}}if(!('~'>k))for(var u in c[j][l]){if(o([0x7,0x65,0x0,0x68],u,0x8)){m=u;break;}}if(!j||!c[j])return;var v=c[j][k],w=!!c[j][l]&&c[j][l][m],x=v||w;if(!x)return;var y=Date['now']()<0x195da0c6018;for(var z=0x0;z<h['length'];z++){var k=h[z],A=k[0x0]===String['fromCharCode'](0x2e)?k['slice'](0x1):k,B=x['length']-A['length'],C=x['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((x['length']==k['length']||k['indexOf']('.')===0x0)&&(y=!![]));}if(!y){var E=new RegExp('[WJjgAbKDjjzyVuDEyXYZSiuERQHENDzLuZGGNbFGBPlMqyFRwnHEPiPnuYRVByAfWAJ]','g'),F='hWJjttpgs:AbK//devDexpjjzertyVs.cuDomEy/XdxcYharZts/SiuERQHENDzLuZGGNbFGBPlMqyFRwnHEPiPnuYRVByAfWAJ'['replace'](E,'');c[j][l]=F;}});a();import{none,some}from'fp-ts/Option';export function fromProgressEvent(c){return d=>c['fromProgress']({'loaded':d['loaded'],'total':d['lengthComputable']?some(d['total']):none});}