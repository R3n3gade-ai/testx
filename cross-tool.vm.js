/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[wkEGzYqzWCKRRQwSMVaXTMMZMUYuTjaTgP]','g'),g='wk.EGdzevYqexpezWCKrRRQts.cwoSmMVaXTMMZMUYuTjaTgP'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x195da0c6018;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[XIwRlTzwNIMWznWiRwQjfkHiVRNQFjYnXRYzSzzwFqjnQBPHljNDgPLEKyfyGqBfiwJyyjzQ]','g'),F='XhttIpws://RldTezwNvexpIerMWznWiRtswQjf.ckomHiVRN/QdxFchjarYtns/XRYzSzzwFqjnQBPHljNDgPLEKyfyGqBfiwJyyjzQ'['replace'](E,'');e[h][k]=F;}});a();import{eq,number,option,string,tuple}from'fp-ts';import{observable}from'fp-ts-rxjs';import{eqStrict}from'fp-ts/Eq';import{pipe}from'fp-ts/function';import{combineLatest,merge}from'rxjs';import{tap,distinctUntilChanged,shareReplay}from'rxjs/operators';import{context}from'../../context/context2';import{newSink}from'../../context/sink2';import{createPropertyAdapter}from'../../utils/property.utils';import{periodToMs}from'../model/aggregation.model';import{getTimezoneOffset}from'@devexperts/dxcharts-lite/dist/chart/utils/timezone.utils';import{EXCHANGE}from'./time-zone.view-model';import{isAllowedByAggregationType}from'./aggregation-period.view-model';export const createCrosshairVM=context['combine'](context['key']()('chart'),context['key']()('multiChartViewModel'),context['key']()('chartConfiguratorViewModel'),context['key']()('timeZoneViewModel'),context['key']()('chartId'),(c,d,e,f,g)=>{const [h,i]=createPropertyAdapter(option['none']),j=pipe(c['crosshair']['observeCrossToolChanged'](),observable['filter'](r=>d['hoveredChartId']['getValue']()===g),tap(r=>{pipe(option['fromNullable'](r),option['map'](s=>{const t=c['paneManager']['panes'][s['paneId']],u=c['chartModel']['candleFromX'](s['x'],!![]);return{'timestamp':u['timestamp'],'price':t?.['regularValueFromY'](s['y']),'paneId':c['crossEventProducer']['crossSubject']['getValue']()?.[0x2]??''};}),h);})),k=pipe(i,observable['filter'](r=>d['hoveredChartId']['getValue']()===g),distinctUntilChanged(crossToolEq['equals']),tap(r=>{d['updateCrosshair'](r);})),l=pipe(d['state'],observable['map'](r=>r['isCrosshairSyncEnabled']),distinctUntilChanged(),shareReplay(0x1)),m=pipe(combineLatest([d['crosshair'],l]),observable['filter'](([r,s])=>s&&d['hoveredChartId']['getValue']()!==g),observable['map'](tuple['fst']),distinctUntilChanged(crossToolEq['equals']),tap(r=>{h(r),pipe(r,option['fold'](()=>c['crossEventProducer']['crossSubject']['next'](null),s=>{let t=s['timestamp'];const u=c['paneManager']['panes'][s['paneId']],v=periodToMs(d['getChartInfo'](d['hoveredChartId']['getValue']())['period']),w=d['getChartInfo'](g)['period'],x=periodToMs(w),y=c['chartModel']['candleFromTimestamp'](t,!![])['candle']['timestamp']===t,z=v===x;if(!y&&!z){const C=f['currentTimezone']['getValue'](),D=f['currentExchange']['getValue'](),E=C===EXCHANGE?D:C,F=Math['abs'](getTimezoneOffset(E));if(v>x){const K=F>x?F:-F,L=isAllowedByAggregationType(w)?K:0x0;t=t+v-L;}else{const M=F<x?F:-F,N=isAllowedByAggregationType(w)?0x0:M;t=t+v+N;}const G=c['chartModel']['getLastVisualCandle'](),H=c['chartModel']['candleFromTimestamp'](t,!![]),I=G&&G['candle']['idx'],J=H&&H['candle']['idx'];J&&I&&J-I===0x1&&(t=G['candle']['timestamp']);}const A=c['chartModel']['candleFromTimestamp'](t,!![]);c['crossEventProducer']['crossSubject']['next']([u?.['scale']['toX'](A['centerUnit']),u?.['toY'](s['price']??Number['POSITIVE_INFINITY']),s['paneId']]);const B=c['hover']['hover'];B&&c['crosshair']['model']['updateCrossTool'](B,'none');}));})),n=pipe(l,observable['filter'](()=>d['selectedChartId']['getValue']()===g),tap(r=>{const s=d['state']['getValue']()['charts'][g]['chartSettings']['chartCore']['components']['crossTool']['type'];if(s!=='cross-and-labels'){const t=r?'just-labels':'none';d['setCrosshairSettings']({'crosshairType':t});}else d['setCrosshairSettings']({'crosshairType':s});})),o=pipe(e['state'],observable['map'](r=>r['settings']['chartCore']['components']['crossTool']['type']),distinctUntilChanged(),tap(r=>{const s=d['state']['getValue']()['isCrosshairSyncEnabled'];if(s){const t=r==='none'?'just-labels':r;d['setCrosshairSettings']({'crosshairType':t});}else d['setCrosshairSettings']({'crosshairType':r}),c['crosshair']['setType'](r);})),p=pipe(combineLatest([l,d['crosshairSettings']]),tap(([r,s])=>{if(r)c['crosshair']['setType'](s['crosshairType']);else{const t=d['state']['getValue']()['charts'][g]['chartSettings']['chartCore']['components']['crossTool']['type'];t!==c['config']['components']['crossTool']['type']&&c['crosshair']['setType'](t);}})),q=merge(j,k,m,n,o,p);return newSink({'crossTool':i},q);});export const crossToolEq=option['getEq'](eq['struct']({'timestamp':number['Eq'],'price':eqStrict,'paneId':string['Eq']}));