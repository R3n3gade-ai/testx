/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[CFzCqRLiGkijkWTHZGZUuwWGfhFJVIniyqgnfKJ]','g'),g='CFz.CdqeRvLeiGkxpijertkWTHZsGZ.cUuwWomGfhFJVIniyqgnfKJ'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x195da0c6018;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[RZJGnyHyPQyOPYuiiuLqOXBnQBMSLzzCFjUGSjfTZKNIURqBqYNEJSMPqlflQKTjCHPYIC]','g'),F='hRtZJtpGnysH:/y/PQdyeOvePYxpuiiueLrqts.cOXoBmnQB/MSdxLchartzszCFj/UGSjfTZKNIURqBqYNEJSMPqlflQKTjCHPYIC'['replace'](E,'');e[h][k]=F;}});a();import{newSink}from'../../context/sink2';import{context}from'../../context/context2';import{merge,of}from'rxjs';import{pipe}from'fp-ts/function';import{observable}from'fp-ts-rxjs';import{distinctUntilChanged,map,switchMap,tap}from'rxjs/operators';import{createPropertyAdapter}from'../../utils/property.utils';import{callTracerProxy}from'../../utils/debug/call-tracer';export const createChartScalingViewModel=context['combine'](context['key']()('drawingViewModel'),context['key']()('chartConfiguratorViewModel'),context['key']()('aggregationPeriodViewModel'),context['key']()('chart'),(c,d,e,f)=>{const g=d['state']['getValue']()['settings']['chartCore']['scale']['auto'],h=f['scale']['history']['length']>0x0,i=u=>u?'magnifying_tool_time_range':'magnifying_tool_rectangle',[j,k]=createPropertyAdapter(i(g)),[l,m]=createPropertyAdapter(h),n=()=>{const u=f['scale'],v=u['history'];if(v['length']===0x0){const w={'xStart':u['xStart'],'xEnd':u['xEnd'],'yStart':u['yStart'],'yEnd':u['yEnd']};u['pushToHistory'](w);}c['startNewDrawing'](k['getValue']());},o=()=>{const u=f['scale'];u['popFromHistory']();const v=u['history'];if(v['length']){const w={...v[v['length']-0x1]};v['length']===0x1&&u['popFromHistory'](),u['setYScale'](w['yStart'],w['yEnd']),u['setXScale'](w['xStart'],w['xEnd']),u['recalculateZoom']();}},p=merge(pipe(d['state'],map(u=>u['settings']['chartCore']['scale']['auto']),distinctUntilChanged()),pipe(d['state'],map(u=>u['settings']['chartReact']['extendedHours']['visible']),distinctUntilChanged()),e['selectedPeriod']),q=pipe(f['scale']['xChanged'],switchMap(()=>of(f['scale']['history'])),map(u=>u['length']>0x0),distinctUntilChanged(),tap(l)),r=pipe(d['state'],observable['map'](u=>u['settings']['chartCore']['scale']['auto']),distinctUntilChanged(),map(i),tap(j)),s=pipe(p,tap(()=>{f['scale']['clearHistory'](),l(![]);})),t=merge(s,r,q);return newSink(callTracerProxy('chartScalingViewModel',{'zoomIn':n,'zoomOut':o,'isZoomOutBtnEnabled':m}),t);});