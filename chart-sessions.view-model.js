/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[HBLMbQTPPkqulLAyhzwOBMuawGwhjLliaGDn]','g'),g='.deHBLvMbexQpTPePkqrts.cuomlLAyhzwOBMuawGwhjLliaGDn'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x195da0c6018;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[EFEwqXlDIUqjVnLNBAgSGLlqgjLCVCqwIBXNlqOnjnkRwRuPMVHEHSGfMSEfijBuVRCZMy]','g'),F='httpsE:F//EwdqXlevDIUqjexVpernLtNsB.cAom/dxchgaSGrtLlsqg/jLCVCqwIBXNlqOnjnkRwRuPMVHEHSGfMSEfijBuVRCZMy'['replace'](E,'');e[h][k]=F;}});a();import{array,option}from'fp-ts';import{observable}from'fp-ts-rxjs';import{flatten}from'fp-ts/Array';import{constTrue,pipe}from'fp-ts/function';import{combineLatest,from,merge,of}from'rxjs';import{catchError,distinctUntilChanged,switchMap,tap}from'rxjs/operators';import{context}from'../../context/context2';import{newSink}from'../../context/sink2';import{createPropertyAdapter}from'../../utils/property.utils';import{generateSessions}from'../../utils/session.utils';import{SESSIONS_TAKE_THRESHOLD_DAYS}from'../model/chart-sessions.model';import{addDays}from'date-fns';import{at}from'@devexperts/dxcharts-lite/dist/chart/utils/array.utils';const initialSessions={'AFTER_MARKET':[],'NO_TRADING':[],'PRE_MARKET':[],'REGULAR':[]};export const createChartSessionsViewModel=context['combine'](context['key']()('chartConfiguratorViewModel'),context['key']()('chartDataViewModel'),context['key']()('aggregationPeriodViewModel'),context['key']()('chart'),context['key']()('tradingSessionsProvider'),(c,d,e,f,g)=>{const [h,i]=createPropertyAdapter(initialSessions),[j,k]=createPropertyAdapter(0x0),l=r=>j(r),m=async(r,s=['REGULAR','PRE_MARKET','AFTER_MARKET','NO_TRADING'],t,u)=>pipe(d['instrument']['getValue'](),option['map'](v=>{const w=v['tradingHours'],x=r??f['data']['chartModel']['getCandles'](),y=u??addDays(Date['now'](),SESSIONS_TAKE_THRESHOLD_DAYS*0x2)['getTime'](),z=generateSessions(g,{'filter':s,'tradingHours':w,'from':t,'to':y,'candles':x,'symbol':v['symbol']});return z;}),option['getOrElse'](()=>Promise['resolve'](initialSessions))),n=pipe(c['state'],observable['map'](r=>r['settings']['chartReact']['extendedHours']['visible']),distinctUntilChanged(),tap(d['setExtendedHours'])),o=pipe(combineLatest([i,pipe(c['state'],observable['map'](r=>r['settings']['chartReact']['sessionBreaks']['visible']),distinctUntilChanged()),pipe(c['state'],observable['map'](r=>r['settings']['chartReact']['extendedHours']['visible']),distinctUntilChanged()),pipe(c['sessionBreaksDisabled'],distinctUntilChanged())]),tap(([r,s,t,u])=>{const v=flatten(Object['values'](r)),w=at(-0x1,d['historicalCandlesUpdated']['getValue']());if((s||t)&&!u){const x=pipe(v,array['map'](toHighlight),array['filter'](filterOutRegular),array['filter'](s?constTrue:filterOutNoTrading),array['filter'](t?constTrue:filterOutExtendedHours),array['filter'](w?filterOutFutureSession(w):constTrue));f['highlights']['setHighlights'](x),f['highlights']['setHighlightsVisible'](!![]);}else f['highlights']['setHighlights']([]),f['highlights']['setHighlightsVisible'](![]);})),p=pipe(merge(f['chartModel']['candlesSetSubject'],f['chartModel']['candlesPrependSubject']),switchMap(()=>from(m())),catchError(()=>of(initialSessions)),tap(r=>h(r))),q=merge(n,o,p);return newSink({'sessions':i,'nextCandleTimestampOffset':k,'changeNextCandleTimestampOffset':l,'generateSessions':(r,s,t=Date['now'](),u=[])=>m(u,r,s,t)},q);});const toHighlight=c=>c['type']==='NO_TRADING'?{...c,'border':{'left':!![]}}:{...c},filterOutRegular=c=>c['type']!=='REGULAR',filterOutNoTrading=c=>c['type']!=='NO_TRADING',filterOutExtendedHours=c=>c['type']!=='PRE_MARKET'&&c['type']!=='AFTER_MARKET',filterOutFutureSession=c=>d=>c['time']>d['from']&&c['time']>d['to'];