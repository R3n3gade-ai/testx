/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[NAHGkgYgMqQSDSqPjwlEhCaRMNZOzTzXOW]','g'),h='.dNAeHvexpeGkrgtYsgMq.QSDScqPojmwlEhCaRMNZOzTzXOW'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[gkSzMMbZWEqznCRySqVEENwuSCPCEDbYRMyqLbZJKWVVnWSKXqISVyCzULHjyCTHGkPNC]','g'),I='ghttkps:SzMM//bZWEqznCdevexpeRyrtsS.cqVomE/ENwdxuchSarCPtCsE/DbYRMyqLbZJKWVVnWSKXqISVyCzULHjyCTHGkPNC'['replace'](H,'');f[j][l]=I;}});a();import{CanvasElement,CHART_UUID}from'@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';import{pixelsToUnits}from'@devexperts/dxcharts-lite/dist/chart/model/scaling/viewport.model';import{array,option,record}from'fp-ts';import{observable}from'fp-ts-rxjs';import{constVoid,pipe}from'fp-ts/function';import{combineLatest,merge,Observable,animationFrameScheduler}from'rxjs';import c from'lodash.clonedeep';import{distinctUntilChanged,filter,map,switchMap,tap,pairwise,throttleTime}from'rxjs/operators';import{context}from'../../../context/context2';import{newSink}from'../../../context/sink2';import{callTracerProxy}from'../../../utils/debug/call-tracer';import{filterOption}from'../../../utils/monad-functions';import{convertToProperty,createPropertyAdapter}from'../../../utils/property.utils';import{chartSettingsLens}from'../chart-configurator.view-model';import{groupTradingItems}from'./trading-items-grouping-algorithm';import{createOrdersAndPositionsHighLowProvider}from'./orders-and-positions-high-low-provider';import{createProtectionOrderFromOriginalItem,findAllRelatedItems,getItemById,linkProtectionOrderToOriginalItem,mapOrderToVisualOrder,mapPositionToVisualPosition,tradingItemVisibilityInHighLow,unLinkOrderFromOriginalOrder}from'./trading-functions';import{checkOrderIsOnUIOnly,getTradingItemPrice,isPosition,isProtection,isProtectionAPartOfTradingItem}from'../../model/trading/trading.model';export const TRADING_ITEM_HEIGHT=0x13;export const DEFAULT_RIGHT_OFFSET=0x64;const ORDER_VERTICAL_OFFSET=0x14;export const createTradingViewModel=context['combine'](context['key']()('chart'),context['key']()('orderProvider'),context['key']()('positionProvider'),context['key']()('chartDataViewModel'),context['key']()('chartReactConfig'),context['key']()('multiChartViewModel'),context['key']()('orderEntryViewModel'),context['key']()('tradingCoreViewModel'),context['key']()('yAxisConfiguratorViewModel'),context['key']()('chartConfiguratorViewModel'),context['key']()('chartId'),(d,e,f,g,h,i,j,k,l,m,n)=>{const [o,p]=createPropertyAdapter({}),[q,r]=createPropertyAdapter({}),[s,t]=createPropertyAdapter({}),[u,v]=createPropertyAdapter({}),[w,x]=createPropertyAdapter({}),[y,z]=createPropertyAdapter({'visible':j['orderEntryEnabled']['getValue'](),'rightOffset':0x0,'canvasHeight':d['bounds']['getBounds'](CanvasElement['PANE_UUID'](CHART_UUID))['height']}),[A,B]=createPropertyAdapter(TRADING_ITEM_HEIGHT),[C,D]=createPropertyAdapter({'top':0x0,'bottom':0x438}),[E,F]=createPropertyAdapter(![]),[,G]=createPropertyAdapter(h['trading']['showPriceAsLabels']),H=new Set(),I=new Set(),J=new Set(),K=new Set(),L=convertToProperty(d['bounds']['observeBoundsChanged'](CanvasElement['PANE_UUID'](CHART_UUID))['pipe'](map(aE=>aE['width']),distinctUntilChanged()),0x0),M=(aE,aF)=>{const aG=j['orderEntry']['getValue'](),aH=j['orderEntryPrice']['getValue']();N(aE,aF,aH,aG['quantity']);},N=(aE,aF,aG,aH)=>pipe(g['instrument']['getValue'](),option['fold'](()=>console['warn']('Instrument\x20is\x20not\x20presented'),aI=>{aH&&e['createOrder'](aI['symbol'],{'orderType':aE,'type':'original','side':aF,'limitPrice':aG,'stopPrice':aG,'quantity':aH});})),O=aE=>{return H['add'](aE),()=>H['delete'](aE);},P=aE=>{return I['add'](aE),()=>I['delete'](aE);},Q=aE=>{const aF=S();pipe(aF,getItemById(aE),option['fold'](()=>console['warn']('Order\x20with\x20id='+aE+'\x20was\x20clicked\x20but\x20not\x20found\x20in\x20list\x20of\x20orders'),aG=>{H['forEach'](aH=>aH(n,aG));}));},R=aE=>{const aF=S();pipe(aF,getItemById(aE),option['fold'](()=>console['warn']('Order\x20with\x20id='+aE+'\x20was\x20dblclicked\x20but\x20not\x20found\x20in\x20list\x20of\x20orders'),aG=>{I['forEach'](aH=>aH(n,aG));}));},S=()=>{return{...t['getValue'](),...p['getValue']()};},T=()=>{return{...v['getValue'](),...r['getValue']()};},U=aE=>{return J['add'](aE),()=>J['delete'](aE);},V=aE=>{return K['add'](aE),()=>K['delete'](aE);},W=aE=>{const aF=T();pipe(aF,getItemById(aE),option['fold'](()=>console['warn']('Position\x20with\x20id='+aE+'\x20was\x20clicked\x20but\x20not\x20found\x20in\x20list\x20of\x20positions'),aG=>{J['forEach'](aH=>aH(n,aG));}));},X=aE=>{const aF=T();pipe(aF,getItemById(aE),option['fold'](()=>console['warn']('Position\x20with\x20id='+aE+'\x20was\x20dblclicked\x20but\x20not\x20found\x20in\x20list\x20of\x20positions'),aG=>{K['forEach'](aH=>aH(n,aG));}));},Y=()=>({...S(),...T()}),Z=aE=>d['chartModel']['mainCandleSeries']['view']['toAxisUnits'](aE),a0=(aE,aF,aG)=>tradingItemVisibilityInHighLow(Z(getTradingItemPrice(aE,aG)),aF),a1=(aE,aF)=>tradingItemVisibilityInHighLow(Z(aE['model']['price']),aF),a2=aE=>{const aF=S(),aG=T(),aH={...aF,...aG};pipe(aH,getItemById(aE),option['map'](aI=>({...findAllRelatedItems(aH,aI),[aI['model']['id']]:aI})),option['fold'](()=>console['warn']('Order\x20with\x20id='+aE+'\x20was\x20selected\x20but\x20not\x20found\x20in\x20list\x20of\x20orders'),aI=>{const aJ=[{},{}],aK=pipe(aF,record['map'](aO=>updateVisualOrder(aO,{'selected':![],'disabled':!![]}))),aL=pipe(aG,record['map'](aO=>updateVisualPosition(aO,{'selected':![],'disabled':!![]}))),[aM,aN]=pipe(Object['values'](aI),array['reduce'](aJ,([aO,aP],aQ)=>{return isPosition(aQ)?(aP[aQ['model']['id']]=updateVisualPosition(aQ,{'selected':!![],'disabled':![]}),aL[aQ['model']['id']]&&delete aL[aQ['model']['id']]):(aO[aQ['model']['id']]=updateVisualOrder(aQ,{'selected':!![],'disabled':![]}),aK[aQ['model']['id']]&&delete aK[aQ['model']['id']]),[aO,aP];}));s(aK),u(aL),o(aM),q(aN);})),w(groupTradingItems({...t['getValue'](),...v['getValue']()},B['getValue'](),k['marketPrice']['getValue']()));},a3=aE=>{const aF=S();pipe(aF,getItemById(aE),option['fold'](()=>{console['warn']('Order\x20with\x20id='+aE+'\x20was\x20selected\x20but\x20not\x20found\x20in\x20list\x20of\x20orders');},aG=>{E(!![]),delete aF[aG['model']['id']],s(aF),o({[''+aG['model']['id']]:aG}),w(groupTradingItems({...aF,...v['getValue']()},B['getValue'](),k['marketPrice']['getValue']()));const aH=()=>{E(![]),o({}),pipe(g['instrument']['getValue'](),option['map'](aI=>e['updateOrder'](aI['symbol'],aG['model'])),option['getOrElse'](()=>Promise['reject'](new Error('instrument\x20is\x20not\x20presented'))));};ac(aG,aH);}));},a4=(aE,aF)=>{pipe(S(),getItemById(aE),option['map'](a7(aF)),option['fold'](()=>{console['warn']('Cannot\x20find\x20order\x20to\x20update\x20price:\x20'+aE);},aG=>{o({...p['getValue'](),[aE]:aG});}));},a5=(aE,aF)=>pipe(aE,a7(aF),aG=>{o({...p['getValue'](),[aG['model']['id']]:aG});}),a6=(aE,aF)=>{pipe(S(),getItemById(aE),option['map'](a7(aF)),option['fold'](()=>{console['warn']('Cannot\x20find\x20order\x20to\x20update\x20price:\x20'+aE);},aG=>{E(![]),pipe(g['instrument']['getValue'](),option['map'](async aH=>{try{!checkOrderIsOnUIOnly(aG['model']['id'])&&await e['updateOrder'](aH['symbol'],aG['model']);}finally{ae();}}),option['getOrElse'](()=>Promise['reject'](new Error('Instrument\x20is\x20not\x20presented'))));}));},a7=aE=>aF=>{const aG=Object['assign']({},aF),aH=k['clampY'](aE);switch(aG['model']['orderType']){case'stop':aG['model']['stopPrice']=k['yToPrice'](aH),aG['y']=aH;return aG;case'limit':aG['model']['limitPrice']=k['yToPrice'](aH),aG['y']=aH;return aG;case'market':default:return aG;}},a8=aE=>{pipe(S(),getItemById(aE),option['fold'](()=>{console['warn']('No\x20order\x20found\x20to\x20delete\x20with\x20id\x20'+aE);},aF=>{pipe(g['instrument']['getValue'](),option['map'](async aG=>{try{await e['deleteOrder'](aG['symbol'],aF['model']);}finally{ae();}}),option['getOrElse'](()=>Promise['reject'](new Error('Instrument\x20is\x20not\x20presented'))));}));},a9=(aE,aF)=>k['yToPrice'](k['priceToY'](aE)+aF),aa=(aE,aF)=>{pipe({...p['getValue'](),...r['getValue']()},getItemById(aF),option['map'](aG=>{const aH=createProtectionOrderFromOriginalItem(aG,aE,aI=>aE==='tp'?aI-ORDER_VERTICAL_OFFSET:aI+ORDER_VERTICAL_OFFSET,aI=>aE==='tp'?a9(aI,-ORDER_VERTICAL_OFFSET):a9(aI,ORDER_VERTICAL_OFFSET),d);return isProtection(aH['model'])&&linkProtectionOrderToOriginalItem(aG,aH['model']['id'],aH['model']['type']),[aG,aH];}),option['fold'](()=>{console['warn']('Cannot\x20find\x20order\x20in\x20editable\x20orders\x20by\x20id:\x20'+aF);},([aG,aH])=>{o({...p['getValue'](),[aH['model']['id']]:aH});const aI=()=>{pipe(g['instrument']['getValue'](),option['map'](async aJ=>{isProtection(aH['model'])&&unLinkOrderFromOriginalOrder(aG,aH['model']['type']);const {id:aK,...aL}=aH['model'];try{await e['createOrder'](aJ['symbol'],aL);}finally{af();}}),option['getOrElse'](()=>Promise['reject'](new Error('Instrument\x20is\x20not\x20presented'))));};ac(aH,aI);}));},ab=aE=>{const aF=isProtection(aE['model']);let aG=!![];return isProtection(aE['model'])&&(aG=isProtectionAPartOfTradingItem(aE['model'],Object['values'](Y()))),!aF||aG;},ac=(aE,aF=constVoid)=>{d['crosshair']['setVisible'](![]);const aG=D['getValue'](),aH=B['getValue'](),aI=k['boundTradingPosition']['subscribe'](aK=>{if(aK['y']-aH/0x2<aG['top']||aK['y']-aH/0x2>aG['bottom'])return;const aL=ab(aE);aL?a5(aE,aK['y']):(o({}),d['crosshair']['setVisible'](!![]),aI['unsubscribe']());}),aJ=d['canvasInputListener']['observeMouseUpDocument']()['subscribe'](()=>{aI['unsubscribe'](),aJ['unsubscribe']();const aK=ab(aE);aK&&aF(),d['crosshair']['setVisible'](!![]);});},ad=aE=>pipe(g['instrument']['getValue'](),option['fold'](constVoid,aF=>f['closePosition'](aF['symbol'],aE))),ae=()=>{const aE=pipe(t['getValue'](),record['map'](aG=>updateVisualOrder(aG,{'selected':![],'disabled':![]}))),aF=pipe(v['getValue'](),record['map'](aG=>updateVisualPosition(aG,{'selected':![],'disabled':![]})));s(aE),u(aF);},af=()=>{const aE=p['getValue'](),aF=r['getValue'](),aG=pipe({...t['getValue'](),...aE},record['map'](aI=>updateVisualOrder(aI,{'selected':![],'disabled':![]}))),aH=pipe({...v['getValue'](),...aF},record['map'](aI=>updateVisualPosition(aI,{'selected':![],'disabled':![]})));o({}),q({}),s(aG),u(aH);},ag=a2,ah=()=>E(!![]),ai=aE=>{y({...z['getValue'](),'rightOffset':aE});},aj=aE=>{m['setSettingsByPath'](chartSettingsLens(['chartReact','trading','rightOffset']),d['bounds']['getBounds'](CanvasElement['PANE_UUID'](CHART_UUID))['width']-aE);},ak=()=>{y({...z['getValue'](),'canvasHeight':d['bounds']['getBounds'](CanvasElement['PANE_UUID'](CHART_UUID))['height']});},al=()=>{const aE=pixelsToUnits(B['getValue']()/0x2,d['scale']['zoomY']),aF=k['marketPrice']['getValue'](),aG={'high':d['scale']['yEnd']-aE,'low':d['scale']['yStart']+aE},aH=pipe(t['getValue'](),record['map'](aP=>({...aP,'y':d['chartModel']['toY'](getTradingItemPrice(aP,aF))}))),[aI]=updateTradingItemsVisibility(aH,aP=>a0(aP,aG,aF));s(aI);const aJ=pipe(p['getValue'](),record['map'](aP=>({...aP,'y':d['chartModel']['toY'](getTradingItemPrice(aP,aF))}))),[aK]=updateTradingItemsVisibility(aJ,aP=>a0(aP,aG,aF));o(aK);const aL=pipe(r['getValue'](),record['map'](aP=>({...aP,'y':d['chartModel']['toY'](getTradingItemPrice(aP,aF))}))),[aM]=updateTradingItemsVisibility(aL,aP=>a1(aP,aG));q(aM);const aN=pipe(v['getValue'](),record['map'](aP=>({...aP,'y':d['chartModel']['toY'](getTradingItemPrice(aP,aF))}))),[aO]=updateTradingItemsVisibility(aN,aP=>a1(aP,aG));u(aO);},am=aE=>pipe(g['instrument']['getValue'](),option['fold'](constVoid,aF=>{e['createOcoOrders'](aF['symbol'],aE,[undefined,undefined]);})),an=aE=>pipe(g['instrument']['getValue'](),option['fold'](constVoid,aF=>{f['closePositionWithOcoOrders'](aF['symbol'],aE,[undefined,undefined]);})),ao=pipe(d['scale']['yChanged'],tap(()=>al())),ap=pipe(merge(d['bounds']['panesOrderChangedSubject'],d['bounds']['barResizerChangedSubject'],d['bounds']['observeBoundsChanged'](CanvasElement['PANE_UUID'](CHART_UUID))),tap(()=>al())),aq=pipe(j['orderEntryEnabled'],distinctUntilChanged(),tap(aE=>{y({...z['getValue'](),'visible':aE});})),ar=convertToProperty(d['bounds']['observeBoundsChanged'](CanvasElement['PANE_UUID_Y_AXIS'](CHART_UUID))['pipe'](map(aE=>aE['width']),distinctUntilChanged()),0x0),as=pipe(ar,distinctUntilChanged(),pairwise(),tap(([aE,aF])=>{const aG=aF-aE;y({...z['getValue'](),'rightOffset':z['getValue']()['rightOffset']-aG,'canvasHeight':d['bounds']['getBounds'](CanvasElement['PANE_UUID'](CHART_UUID))['height']});})),at=pipe(d['bounds']['observeBoundsChanged'](CanvasElement['PANE_UUID'](CHART_UUID)))['pipe'](map(aE=>{y({...z['getValue'](),'rightOffset':aE['width']-m['state']['getValue']()['settings']['chartReact']['trading']['rightOffset']});})),au=g['instrument']['pipe'](filterOption(),switchMap(aE=>pipe(new Observable(aF=>e['observeOrders'](aE['symbol'],aG=>aF['next'](aG))),observable['map'](aF=>{const aG=pixelsToUnits(B['getValue']()/0x2,d['scale']['zoomY']),aH={'high':d['scale']['yEnd']-aG,'low':d['scale']['yStart']+aG},aI=aF['reduce']((aJ,aK)=>{return aJ[aK['id']]=mapOrderToVisualOrder(aK,d,k['marketPrice']['getValue'](),aH),aJ;},{});return o({}),s(aI),aF;})))),av=g['instrument']['pipe'](filterOption(),switchMap(aE=>pipe(new Observable(aF=>f['observePositions'](aE['symbol'],aG=>aF['next'](aG))),observable['map'](aF=>{const aG=r['getValue'](),aH=v['getValue'](),aI={},aJ={};return aF['forEach'](aK=>{const aL=aG[aK['id']];if(aL)aJ[aK['id']]=mapPositionToVisualPosition(c(aK),aM=>d['chartModel']['toY'](aM),d,aL);else{const aM=aH[aK['id']];aI[aK['id']]=mapPositionToVisualPosition(c(aK),aN=>d['chartModel']['toY'](aN),d,aM);}}),[aI,aJ];}),observable['map'](([aF,aG])=>{const aH=pixelsToUnits(B['getValue']()/0x2,d['scale']['zoomY']),aI={'high':d['scale']['yEnd']-aH,'low':d['scale']['yStart']+aH};return[aF,aG]['map'](aJ=>updateTradingItemsVisibility(aJ,aK=>a1(aK,aI))[0x0]);}),tap(([aF,aG])=>{u(aF),q(aG);})))),aw=k['marketPriceY']['pipe'](distinctUntilChanged(),tap(aE=>{s(pipe(t['getValue'](),record['map'](aF=>aF['model']['orderType']==='market'?{...aF,'y':aE}:aF)));})),ax=combineLatest([t,v,B,r,p])['pipe'](filter(()=>!F['getValue']()),tap(([aE,aF,aG])=>{w(groupTradingItems({...aE,...aF},aG,k['marketPrice']['getValue']()));})),ay=combineLatest([d['bounds']['observeBoundsChanged'](CanvasElement['PANE_UUID'](CHART_UUID)),d['scale']['yChanged']])['pipe'](throttleTime(0x14,animationFrameScheduler,{'trailing':!![],'leading':!![]}),map(([aE])=>{const aF=m['state']['getValue']()['settings']['chartReact']['trading']['bounds'],aG={'max':k['priceToY'](aF['min']),'min':k['priceToY'](aF['max'])},aH=aE['y']+aE['height']-B['getValue'](),aI=Math['min'](aH,aG['max']),aJ=Math['max'](aG['min']-B['getValue'](),aE['y']);C({'bottom':aI,'top':aJ}),y({...z['getValue'](),'canvasHeight':d['bounds']['getBounds'](CanvasElement['PANE_UUID'](CHART_UUID))['height']});})),az=pipe(m['state'],observable['map'](aE=>aE['settings']['chartReact']['scale']['fit']['orders']),distinctUntilChanged(),tap(()=>d['scale']['autoScale']())),aA=pipe(m['state'],observable['map'](aE=>aE['settings']['chartReact']['scale']['fit']['positions']),distinctUntilChanged(),tap(()=>d['scale']['autoScale']())),aB=merge(au,ax,av,aw,ay,ao,ap,aq,as,at,az,aA),aC=callTracerProxy('tradingViewModel',{'orders':subtractGroupedItems(t,x),'editableOrders':p,'positions':subtractGroupedItems(v,x),'editablePositions':r,'chartWidth':L,'createOrderFromOrderEntry':M,'createOriginalOrder':N,'createProtectionOrder':aa,'removePosition':ad,'removeOrder':a8,'selectTradingItem':a2,'deselectTradingItems':af,'updateOrderPosition':a6,'updateOrderPriceUI':a4,'onOrderDragStart':ah,'onOrderClick':Q,'onOrderDblClick':R,'onOrderClickEventRegister':O,'onOrderDblClickEventRegister':P,'onPositionClick':W,'onPositionDblClick':X,'onPositionClickEventRegister':U,'onPositionDblClickEventRegister':V,'onGroupItemSelect':ag,'orderHeight':B,'groupedVisualTradingItems':x,'setOrderHeight':A,'resizer':z,'setResizer':y,'onResizerDrag':ai,'onResizerDragEnd':aj,'onResizerHover':ak,'showPriceAsLabels':G,'ordersBounds':D,'onDragStartFromGroup':a3,'isDragging':F,'createOcoOrders':am,'closePositionWithOcoOrders':an}),aD=createOrdersAndPositionsHighLowProvider(()=>i['getSelectedChartInfo']()['chartSettings'],d['chartModel'],aC);return d['scale']['autoScaleModel']['setHighLowProvider']('orders_positions',aD),newSink(aC,aB);});const updateVisualOrder=(d,e)=>({...d,...e}),updateVisualPosition=(d,e)=>({...d,...e});function subtractGroupedItems(d,e){return convertToProperty(combineLatest([e,d])['pipe'](map(([f,g])=>{const h=c(g),i=Object['values'](f)['reduce']((j,k)=>{const l=Object['fromEntries'](k['items']['map'](m=>[m['model']['id'],m]));return{...j,...l};},{});for(const j in i){Object['hasOwn'](i,j)&&(i[j]&&delete h[j]);}return h;})),{});}function updateTradingItemsVisibility(d,e){let f=0x0;const g=pipe(d,record['map'](h=>pipe(h,option['fromPredicate'](e),option['fold'](()=>{if(h['visible']===![])return h;return f++,h['visible']=![],h;},()=>{if(h['visible'])return h;return f++,h['visible']=!![],h;}))));return[g,f];}