/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[CPPDuqbOZLMagHSjDgZYZuaXaJiATGbgzGW]','g'),g='CP.devPDuqbOeZxLpeMagrHSts.cjomDgZYZuaXaJiATGbgzGW'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x195da0c6018;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[GKBQMzuwVMKHNRCMwkRwqnlPIRlCnKObnYBYFzZDGHFKlDyzAQUByPIgJTKNENwDMlLTbnkF]','g'),F='hGtKtBQps:Mzuw/V/dMKHNRevCMexpewrtks.cRwqomnl/dxPIRlCcnKOhartbsnY/BYFzZDGHFKlDyzAQUByPIgJTKNENwDMlLTbnkF'['replace'](E,'');e[h][k]=F;}});a();import{pipe}from'fp-ts/function';import{array}from'fp-ts';import{right,left}from'fp-ts/Either';import{semverCmp}from'../utils/semver.utils';import{MIGRATIONS_LIST}from'./migrations-list';import{CHART_VERSION}from'../version';import{cloneUnsafe}from'@devexperts/dxcharts-lite/dist/chart/utils/object.utils';export const tryMigrate=c=>{const d=cloneUnsafe(c);try{const f=pipe(MIGRATIONS_LIST,array['filter'](g=>filterMigrations(d['version'],g['version'],CHART_VERSION)),g=>{return g['length']!==0x0&&console['log']('Will\x20run\x20migrations\x20for\x20versions:\x20'+g['map'](h=>h['version'])['join'](',\x20')),g;},array['map'](g=>g['scripts']),array['flatten'],array['reduce'](d,(g,h)=>{try{return console['log']('Running\x20migration\x20'+h['name']),h['migrateFn'](g);}catch(i){console['warn']('Error\x20migrating\x20script:\x20'+h['name']);throw i;}}));return f['version']=CHART_VERSION,right(f);}catch(g){return left(g);}};export const filterMigrations=(c,d,e)=>{if(d==='NEXT_RELEASE_VERSION')return semverCmp(c,e)<0x0;const f=semverCmp(c,d),g=semverCmp(e,d),h=f<0x0,i=g>=0x0;return h&&i;};