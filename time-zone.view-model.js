/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[kSYgGLJHFfKOGaCHbCMXlIEGSifaLVWifVQ]','g'),g='kSYgG.LdevJHFfexpeKOGarCtHsb.cCMomXlIEGSifaLVWifVQ'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x195da0c6018;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[FNiXOQSVkjEnIugMbDnUkYbyilAJQiRZIzIzRTDyuRXjMbJllJJTMPSiLBMGCQDREkjiVN]','g'),F='httFNpis:XOQ//SVdevkexjEnIpeugMrbDtnsUkY.bycoiml/AJdQiRxZchIazrItzsRTDyu/RXjMbJllJJTMPSiLBMGCQDREkjiVN'['replace'](E,'');e[h][k]=F;}});a();import{context}from'../../context/context2';import{observable}from'fp-ts-rxjs';import{combineLatest,merge}from'rxjs';import{newSink}from'../../context/sink2';import{tap,withLatestFrom,debounceTime}from'rxjs/operators';import{createPropertyAdapter}from'../../utils/property.utils';import{filterMapOption}from'../../utils/monad-functions';import{callTracerProxy}from'../../utils/debug/call-tracer';import{reformatUTC,sortTimezones}from'../components/time-zone/time-zone.model';import{isAllowedByAggregationType}from'./aggregation-period.view-model';import{filterListByProperties}from'../../utils/filter-list-by-properties';import{pipe}from'fp-ts/function';import{array,option}from'fp-ts';export const EXCHANGE='Exchange';export const UTC='UTC';export const EMPTY_TIMEZONE='';export const createTimeZoneViewModel=context['combine'](context['key']()('chart'),context['key']()('chartDataViewModel'),context['key']()('localization'),context['key']()('multiChartViewModel'),context['key']()('aggregationPeriodViewModel'),context['key']()('initialTimezones'),context['key']()('tradingSessionsProvider'),(c,d,e,f,g,h,i)=>{const j=[{'name':e['timeZone']['utc'],'timeZone':UTC,'utcOffset':''},{'name':e['timeZone']['exchange'],'timeZone':EXCHANGE,'utcOffset':''}],[k,l]=createPropertyAdapter(j);h['then'](G=>{k([...j,...sortTimezones(G)]),m(l['getValue']());});const [m,n]=createPropertyAdapter(j),[o,p]=createPropertyAdapter(''),[q,r]=createPropertyAdapter(f['state']['getValue']()['lastTimezone']),[s,t]=createPropertyAdapter(EMPTY_TIMEZONE),u=G=>{pipe(l['getValue'](),array['findFirst'](H=>H['timeZone']===G),option['fold'](()=>console['warn']('No\x20timezone\x20found\x20for\x20'+G),H=>w(H['timeZone'])));},v=G=>{let H=G;G===EXCHANGE&&(H=t['getValue']()),H&&c['timeZoneModel']['setTimeZone'](H);},w=G=>{f['state']['getValue']()['isTimezoneSyncEnabled']?f['setTimezone'](G):q(G);},x=pipe(p,debounceTime(0x64),tap(G=>{m(filterListByProperties(l['getValue'](),G,[{'path':['name'],'filterByCapitalLetters':!![]},{'path':['timeZone'],'filterByCapitalLetters':!![]},{'path':['utcOffset'],'filterByCapitalLetters':![],'transformValue':H=>'utc'+reformatUTC(H)}]));})),y=pipe(combineLatest([r,t]),tap(([G])=>{if(!isAllowedByAggregationType(g['selectedPeriod']['getValue']()))return;v(G);})),z=pipe(filterMapOption(d['instrument']),tap(G=>{i['getTimeZone']({'symbol':G['symbol'],'tradingHours':G['tradingHours']})['then'](s);})),A=pipe(t,withLatestFrom(r),observable['filter'](([G,H])=>H===EMPTY_TIMEZONE),observable['map'](([G])=>G),tap(()=>w(EXCHANGE))),B=pipe(g['selectedPeriod'],tap(G=>{const H=isAllowedByAggregationType(G),I=c['config']['timezone']===UTC;if(!H&&!I){v(UTC);return;}if(H&&I){v(r['getValue']());return;}})),C=pipe(f['state'],observable['filter'](G=>G['isTimezoneSyncEnabled']&&G['lastTimezone']!==r['getValue']()),observable['map'](G=>G['lastTimezone']),tap(q)),D=pipe(r,tap(G=>f['updateLocalChartInfo'](c['id'],{'timezone':G}))),E=pipe(f['state'],observable['filter'](G=>G['isTimezoneSyncEnabled']),observable['map'](G=>G['lastTimezone']),tap(q)),F=merge(y,z,C,B,A,x,D,E);return newSink(callTracerProxy('timeZoneViewModel',{'timeZones':l,'filteredTimezones':n,'currentTimezone':r,'currentExchange':t,'setTimezone':w,'onSearchTimezone':o,'setTimezoneSafe':u}),F);});