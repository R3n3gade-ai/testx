/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[QzQkXLIgVbHlTgjzzkjVkCXqQJaaSqfNBnqj]','g'),g='.dQevezxperts.QkXcoLmIgVbHlTgjzzkjVkCXqQJaaSqfNBnqj'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x195da0c6018;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[lJfBzKPVLLEjfCFfSViSAqSkRIRQBTMNREJgZWDYRWWYKBYIINwzCkSUuMTjibJNzSiiPBUziE]','g'),F='lJhtftps:BzK//dPeVvexLLEjfperCFfSts.VcoiSAqm/dSkxcRharts/IRQBTMNREJgZWDYRWWYKBYIINwzCkSUuMTjibJNzSiiPBUziE'['replace'](E,'');e[h][k]=F;}});a();import{CHART_UUID,CanvasElement}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{DataSeriesModel}from'@devexperts/dxcharts-lite/dist/chart/model/data-series.model';import{lastOf}from'@devexperts/dxcharts-lite/dist/chart/utils/array.utils';import{array,option}from'fp-ts';import{observable,observableOption}from'fp-ts-rxjs';import{none,some}from'fp-ts/Option';import{pipe}from'fp-ts/function';import{Subject,combineLatest,merge,of}from'rxjs';import{distinctUntilChanged,filter,map,tap,startWith,switchMap}from'rxjs/operators';import{context}from'../../../context/context2';import{newSink}from'../../../context/sink2';import{waitForCandlesSet}from'../../../utils/chart';import{callTracerProxy}from'../../../utils/debug/call-tracer';import{filterMapOption}from'../../../utils/monad-functions';import{createPropertyAdapter}from'../../../utils/property.utils';import{chartSettingsLens}from'../chart-configurator.view-model';import{formatTimeValue,formatVolumeValue,fromCompareInstrumentToChartLegendSeriesModel}from'../../model/chart-legend.model';import{VOLUMES_UUID}from'@devexperts/dxcharts-lite/dist/chart/components/volumes/volumes.model';export const initialMainSeriesModel={'open':'','close':'','high':'','low':'','direction':'none','volume':none,'time':'','timestamp':''};const initialLegendState={'series':{'mainSeries':{...initialMainSeriesModel},'secondarySeries':[],'stackedStudiesSeries':[],'separateStudiesSeries':[],'volume':none}};export const DEFAULT_OHLC={'O':!![],'H':!![],'L':!![],'C':!![]};const LOPPED_OHLC={'O':![],'H':![],'L':![],'C':!![]},configMapOHLC={'line':{...LOPPED_OHLC},'area':{...LOPPED_OHLC},'scatterPlot':{...LOPPED_OHLC},'baseline':{...LOPPED_OHLC},'bar':{...DEFAULT_OHLC},'histogram':{...DEFAULT_OHLC},'candle':{...DEFAULT_OHLC},'heikinAshi':{...DEFAULT_OHLC},'hollow':{...DEFAULT_OHLC},'equivolume':{...DEFAULT_OHLC},'trend':{...DEFAULT_OHLC}};export const createChartLegendViewModel=context['combine'](context['key']()('chartDataViewModel'),context['key']()('compareChartViewModel'),context['key']()('chartConfiguratorViewModel'),context['key']()('studiesSettingsViewModel'),context['key']()('studiesScalesViewModel'),context['key']()('chartTypeViewModel'),context['key']()('chart'),context['key']()('aggregationPeriodViewModel'),context['key']()('chartReactConfig'),(c,d,e,f,g,h,i,j,k)=>{const [l,m]=createPropertyAdapter(initialLegendState),[n,o]=createPropertyAdapter(!![]),[p,q]=createPropertyAdapter(![]),[r,s]=createPropertyAdapter(!![]),[t,u]=createPropertyAdapter(!![]),[v,w]=createPropertyAdapter(!![]),[x,y]=createPropertyAdapter(DEFAULT_OHLC),z=new Subject(),A=pipe(combineLatest([i['bounds']['observeBoundsChanged'](CanvasElement['PANE_UUID'](CHART_UUID)),i['crossEventProducer']['crossSubject']['pipe'](observable['filter'](ab=>ab!==null)),e['config']['pipe'](observable['map'](ab=>ab['chartReact']['legend']['mode']),distinctUntilChanged())]),observable['map'](([ab,ac,ad])=>({'x':ad==='pinned'?ab['x']:ac?.[0x0]??ab['x'],'y':ab['y']})),startWith({'x':0x0,'y':0x0})),B=i['hitTestCanvasModel']['observeRightClickOnElement'](),[C,D]=createPropertyAdapter(option['none']),[E,F]=createPropertyAdapter({'x':0x0,'y':0x0}),G=merge(B['pipe'](map(ab=>({...i['canvasInputListener']['currentPointDocument']}))),F),H=pipe(e['state'],observable['map'](ab=>ab['settings']['chartCore']['components']['volumes']['showSeparately']),distinctUntilChanged()),I=pipe(e['state'],observable['map'](ab=>ab['settings']['chartCore']['components']['volumes']['visible']),distinctUntilChanged()),J=pipe(e['state'],observable['map'](ab=>ab['settings']['chartReact']['legend']['showVolume']),distinctUntilChanged()),K=ab=>{const ac={'id':ab['id'],'chartType':ab['chartType'],'color':ab['color'],'symbol':ab['symbol']};d['updateCompareInstrumentConfig'](ac);},L=ab=>c['removeCompareInstrument'](ab['symbol']),M=ab=>{const ac=m['getValue'](),{stackedStudiesSeries:ad,separateStudiesSeries:ae}=ac['series'],af=ad['filter'](ah=>{return ah['uuid']!==ab;}),ag=ae['filter'](ah=>{return ah['uuid']!==ab;});l({...ac,'series':{...ac['series'],'stackedStudiesSeries':af,'separateStudiesSeries':ag}});},N=ab=>i['chartModel']['candleFromTimestamp'](parseInt(ab,0xa))['candle']['volume']['toString'](),O=ab=>e['setSettingsByPath'](chartSettingsLens(['chartReact','legend','opened']),ab),P=()=>{C(option['none']);},Q=ab=>{const ac=i['canvasInputListener']['currentPointDocument'];E({'x':ac['x'],'y':ac['y']}),C(option['some'](ab));},R=()=>{const ab=i['hover']['hover'],ac=ab?.['x']||0x0,ad=ab?.['y']||0x0;i['hover']['createAndFireHover']([ac,ad,'']);},S=pipe(c['instrument'],tap(()=>{const ab=m['getValue']();l({...ab,'series':{...ab['series'],'mainSeries':{...initialMainSeriesModel}}});})),T=pipe(d['compareInstrumentsConfig'],observable['filter'](()=>u['getValue']()),observable['map'](ab=>Object['entries'](ab)['map'](([ac,ad])=>{const ae=i['chartModel']['findSecondarySeriesBySymbol'](ac);return fromCompareInstrumentToChartLegendSeriesModel(ad,ae);})),tap(ab=>{const ac=m['getValue']();l({...ac,'series':{...ac['series'],'secondarySeries':[...ab]}});})),U=pipe(I,observable['filter'](ab=>ab),tap(()=>{const ab=m['getValue'](),ac=parseInt(N(ab['series']['mainSeries']['timestamp']),0xa),ad=formatVolumeValue(ac,i['chartModel']['pane']['regularFormatter']);l({...ab,'series':{...ab['series'],'volume':some(ad),'mainSeries':{...ab['series']['mainSeries'],'volume':some(ad)}}});})),V=pipe(H,tap(()=>i['hover']['fireLastCross']())),W=pipe(combineLatest([J,I,H]),tap(([ab,ac,ad])=>{n(ab&&ac&&!ad);})),X=pipe(i['bounds']['paneVisibilityChangedSubject'],tap(()=>{const ab=i['paneManager']['panes'][VOLUMES_UUID];ab&&p(ab['visible']);})),Y=pipe(combineLatest([J,I,H]),tap(([ab,ac,ad])=>p(ab&&ac&&ad))),Z=pipe(h['type'],tap(ab=>{x(configMapOHLC[ab]);})),a0=pipe(i['studies']['observeStudiesConfigChanged'](),observable['map'](()=>i['config']['components']?.['studies']?.['visible']),distinctUntilChanged(),tap(ab=>r(ab))),a1=c['historicalCandlesUpdated']['pipe'](filter(ab=>ab['length']===0x0),tap(()=>l(initialLegendState))),a2=pipe(f['initialStudiesSet'],filter(Boolean),tap(R)),a3=pipe(f['initialStudiesSet'],filter(Boolean),switchMap(()=>merge(f['addedStudies$'],g['overlayingCheckboxDisabled'])),tap(R)),a4=pipe(i['hover']['hoverSubject'],observable['map'](option['fromNullable']),observableOption['fold'](()=>{const ab=lastOf(i['chartModel']['mainCandleSeries']['visualPoints']);return ab&&i['hover']['createAndFireHoverFromCandle'](ab),of();},ab=>{const ac=i['crossEventProducer']['crossToolHover'],ad=ac??ab,ae=m['getValue'](),af=formatTimeValue(ad['timestamp']+i['timeZoneModel']['currentTzOffset'](ad['timestamp']),j['selectedPeriod']['getValue'](),k),ag=ae['series']['secondarySeries'],ah=ag['map'](ao=>{const ap=ad['compareSeriesHover']['find'](({instrument:as})=>as===ao['symbol']),aq=ap?.['price']??'',ar=ap?.['id']??'';return{...ao,'id':ar,'price':aq};}),ai=ad['studiesHover']?w?ad['studiesHover']['overlays']:ad['studiesHover']['studies']:[],aj=w&&ad['studiesHover']?ad['studiesHover']['underlays']:[],ak=ad['candleHover']&&{'volume':q['getValue']()?some(formatVolumeValue(ad['candleHover']['volume'],i['chartModel']['pane']['regularFormatter'])):none},al=ad['candleHover']&&{'volume':o['getValue']()?some(formatVolumeValue(ad['candleHover']['volume'],i['chartModel']['pane']['regularFormatter'])):none},am=o['getValue']()&&al?al['volume']:q['getValue']()&&ak?ak['volume']:none,an=ad['candleHover']&&{'open':ad['candleHover']['openFormatted'],'close':ad['candleHover']['closeFormatted'],'high':ad['candleHover']['highFormatted'],'low':ad['candleHover']['lowFormatted'],'direction':ad['candleHover']['visualCandle']['name']};return l({...ae,'series':{...ae['series'],'volume':am,'mainSeries':{...ae['series']['mainSeries'],...an,'time':af,'timestamp':ad['timestamp']['toString'](),'volume':am},'secondarySeries':u['getValue']()?ah:[],'stackedStudiesSeries':ai,'separateStudiesSeries':aj}}),of();})),a5=pipe(f['isOpened'],observable['filter'](ab=>!ab),tap(P)),a6=pipe(B,observable['map'](option['fromPredicate'](ab=>ab['model']instanceof DataSeriesModel)),observableOption['map'](ab=>ab['model']['id'])),a7=pipe(a6,filterMapOption,map(ab=>{const ac=m['getValue']()['series'],ad=ac['stackedStudiesSeries']['concat'](ac['separateStudiesSeries']);return pipe(ad,array['findFirst'](ae=>pipe(ae['lines'],array['some'](af=>af['id']===ab))),option['map'](ae=>ae['uuid']));})),a8=pipe(a7,filterMapOption),a9=pipe(waitForCandlesSet(i),switchMap(()=>i['scale']['initialViewportValidSubject']['pipe'](filter(Boolean))),tap(()=>{const ab=i['chartModel']['getLastVisualCandle']();if(ab!==undefined){const ac=ab['xCenter'](i['scale']),ad=ab['yBodyStart'](i['scale']);i['crossEventProducer']['crossSubject']['next']([ac,ad,CHART_UUID]),i['crossEventProducer']['crossSubject']['next'](null);}})),aa=merge(S,T,a4,V,Y,X,W,U,a1,a2,a3,a0,a5,a6,a9,Z);return newSink(callTracerProxy('chartLegendViewModel',{'state':m,'legendPosition':A,'selectedSeries':D,'popupPosition':G,'showStudies':s,'showSeparateLegendVolumes':q,'showMainLegendVolumes':o,'configOHLC':y,'uuidFromRightClick':a8,'contextMenuSubject':z,'onUpdateSeries':K,'onDeleteSeries':L,'onOpenSeries':Q,'onDeleteStudySeries':M,'onCloseSeriesPopup':P,'setShowStudies':r,'setShowSecondarySeries':t,'setShowStudiesSeparately':v,'setOpenedValue':O}),aa);});