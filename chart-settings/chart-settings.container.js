/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[VgQliJXZAgPAXMWXKTRHAjbIPPPGgZLkyNkE]','g'),h='.dVgeQlvexpeirJtsXZAg.PcomAXMWXKTRHAjbIPPPGgZLkyNkE'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[gfgJwiYJLJYzCwWFWJjnEnBGwTXlBMnqMAyIVbPWfizZZXfYDUUKqTSREDyIKBMUZYDMg]','g'),G='hgttpfs://devgJwiexpYJeLJrtYsz.CwcoWFWJjnEnBGm/wdxcTXlBMhartns/qMAyIVbPWfizZZXfYDUUKqTSREDyIKBMUZYDMg'['replace'](F,'');f[j][l]=G;}});a();import{merge}from'@devexperts/dxcharts-lite/dist/chart/utils/merge.utils';import{cloneUnsafe}from'@devexperts/dxcharts-lite/dist/chart/utils/object.utils';import{array}from'fp-ts';import{collect}from'fp-ts/Record';import{pipe}from'fp-ts/function';import{Ord}from'fp-ts/string';import c,{useContext}from'react';import{TEST_IDS}from'../../../config/e2e/test-ids';import{context}from'../../../context/context2';import{useIcons}from'../../ui-overrides';import{namedMemo}from'../../../utils/named-memo';import{useDirectProperty,useProperty}from'../../../utils/use-property';import{ChartSettingsComponent}from'../../components/chart-settings/chart-settings.component';import{MultiChartComponentContext}from'../../components/multi-chart/multi-chart-context';import{useUIOverride}from'../../ui-overrides';import{DEFAULT_SETTINGS_TABS_WITH_ICON}from'../../ui-overrides/settings';const ChartSettingsGeneralContainer=context['lazy'](()=>import('./chart-settings-general/chart-settings-general.container')),ChartSettingsMarketContainer=context['lazy'](()=>import('./chart-settings-market/chart-settings-market.container')),ChartSettingsTradingContainer=context['lazy'](()=>import('./chart-settings-trading/chart-settings-trading.container')),ChartSettingsLegendContainer=context['lazy'](()=>import('./chart-settings-legend/chart-settings-legend.container')),ChartSettingsChartTypeColorsContainer=context['lazy'](()=>import('./chart-settings-colors/chart-settings-chart-type-colors.container')),ChartSettingsChartTypeScalesContainer=context['lazy'](()=>import('./chart-settings-scales/chart-settings-chart-type-scales.container')),ChartSettingsEventsContainer=context['lazy'](()=>import('./chart-settings-events/chart-settings-events.container')),ChartSettingsPaddingsContainer=context['lazy'](()=>import('./chart-settings-paddings/chart-settings-paddings.container'));export const ChartSettingsContainer=context['combine'](context['key']()('chartConfiguratorViewModel'),context['key']()('chartReactConfig'),ChartSettingsGeneralContainer,ChartSettingsMarketContainer,ChartSettingsTradingContainer,ChartSettingsLegendContainer,ChartSettingsChartTypeColorsContainer,ChartSettingsChartTypeScalesContainer,ChartSettingsEventsContainer,ChartSettingsPaddingsContainer,(d,e,f,g,h,i,j,k,l,m)=>namedMemo('ChartSettingsContainer',()=>{const n=useUIOverride(['ChartSettingsTabs'])??DEFAULT_SETTINGS_TABS_WITH_ICON,o=useIcons(),{localization:p}=useContext(MultiChartComponentContext),q=useDirectProperty(d['state'],['settings']),r=d['defaultConfig'],s={'ChartGeneralTab':{'id':'General','label':p['settingsPopup']['tabs']['general']['title'],'content':()=>f,'icon':o['settings']['general'],'testId':TEST_IDS['chart_settings_tab_general']},'ChartTradingTab':{'id':'Trading','label':p['settingsPopup']['tabs']['trading']['title'],'content':()=>h,'icon':o['chartTypes']['candle']},'ChartLegendTab':{'id':'Legend','label':p['settingsPopup']['tabs']['legend']['title'],'content':()=>i,'icon':o['settings']['legend'],'testId':TEST_IDS['chart_settings_tab_legend']},'ChartMarketTab':{'id':'Market','label':p['settingsPopup']['tabs']['market']['title'],'content':()=>g,'icon':o['settings']['market'],'testId':TEST_IDS['chart_settings_tab_market']},'ChartColorsTab':{'id':'Colors','label':p['settingsPopup']['tabs']['colors']['title'],'content':()=>j,'icon':o['drawings']['drawingsTypes']['brush'],'testId':TEST_IDS['chart_settings_tab_colors']},'ChartEventsTab':{'id':'Events','label':p['settingsPopup']['tabs']['events']['eventsTitle'],'content':()=>l,'icon':o['settings']['events']},'ChartPaddingsTab':{'id':'Paddings','label':p['settingsPopup']['tabs']['paddings']['title'],'content':()=>m,'icon':o['drawings']['drawingsTypes']['dateRange']}},t=pipe(s,collect(Ord)((x,y)=>y['id']),x=>getTabsDefaultConfig(x,q,r)),u=e['trading']['enabled'],v=pipe(n,array['map'](x=>typeof x==='object'?x:s[x]),array['filter'](x=>u||x!==s['ChartTradingTab'])),w=useProperty(d['state']);return c['createElement'](ChartSettingsComponent,{'value':q,'onValueChange':d['setSettingsByPath'],'tabsDefaultConfig':t,'tabs':v,'isOpened':w['isOpened'],'onPopoverToggle':d['onToggle']});}));const getTabsDefaultConfig=(d,e,f)=>{const g={'overrideExisting':!![],'addIfMissing':![]};return d['map'](h=>{switch(h){case'General':const i=merge(cloneUnsafe(e),getGeneralTabDefaultConfig(f),{...g});return{'id':h,'defaultConfig':i};case'Market':const j=merge(cloneUnsafe(e),getMarketTabDefaultConfig(f),{...g});return{'id':h,'defaultConfig':j};case'Trading':const k=merge(cloneUnsafe(e),getTradingTabDefaultConfig(f),{...g});return{'id':h,'defaultConfig':k};case'Legend':const l=merge(cloneUnsafe(e),getLegendTabDefaultConfig(f),{...g});return{'id':h,'defaultConfig':l};case'Colors':const m=merge(cloneUnsafe(e),getColorsTabDefaultConfig(f),{...g});return{'id':h,'defaultConfig':m};case'Events':const n=merge(cloneUnsafe(e),getEventsTabDefaultConfig(f),{...g});return{'id':h,'defaultConfig':n};case'Paddings':const o=merge(cloneUnsafe(e),getPaddingsTabDefaultConfig(f),{...g});return{'id':h,'defaultConfig':o};default:return{'id':h,'defaultConfig':e};}});};export const getGeneralTabDefaultConfig=d=>{return{'chartCore':{'components':{'crossTool':{'type':d['chartCore']['components']['crossTool']['type'],'magnetTarget':d['chartCore']['components']['crossTool']['magnetTarget']},'grid':{'vertical':d['chartCore']['components']['grid']['vertical'],'horizontal':d['chartCore']['components']['grid']['horizontal']},'highLow':{'visible':d['chartCore']['components']['highLow']['visible']},'chart':{'showWicks':d['chartCore']['components']['chart']['showWicks'],'equivolume':{'showClosePrice':d['chartCore']['components']['chart']['equivolume']['showClosePrice']}},'waterMark':{'visible':d['chartCore']['components']['waterMark']['visible']}}}};};const getMarketTabDefaultConfig=d=>{return{'chartCore':{'components':{'volumes':{'visible':d['chartCore']['components']['volumes']['visible'],'showSeparately':d['chartCore']['components']['volumes']['showSeparately']}}},'chartReact':{'extendedHours':{'visible':d['chartReact']['extendedHours']['visible']},'sessionBreaks':{'visible':d['chartReact']['sessionBreaks']['visible']},'candlesData':{'candleAlignment':d['chartReact']['candlesData']['candleAlignment'],'price':d['chartReact']['candlesData']['price']}}};},getTradingTabDefaultConfig=d=>{return{'chartReact':{'trading':{'visible':d['chartReact']['trading']['visible'],'showOrders':d['chartReact']['trading']['showOrders'],'showPositions':d['chartReact']['trading']['showPositions'],'bounds':{'min':d['chartReact']['trading']['bounds']['min'],'max':d['chartReact']['trading']['bounds']['max']},'executedOrders':{'enabled':d['chartReact']['trading']['executedOrders']['enabled'],'displayMode':d['chartReact']['trading']['executedOrders']['displayMode']}}}};},getLegendTabDefaultConfig=d=>{return{'chartReact':{'legend':{'showInstrument':d['chartReact']['legend']['showInstrument'],'showOHLC':d['chartReact']['legend']['showOHLC'],'showPeriod':d['chartReact']['legend']['showPeriod'],'showVolume':d['chartReact']['legend']['showVolume']}}};},getColorsTabDefaultConfig=d=>{const e=f=>({'chartAreaTheme':{'backgroundColor':d['chartCore']['themes'][f]['chartAreaTheme']['backgroundColor'],'gridColor':d['chartCore']['themes'][f]['chartAreaTheme']['gridColor'],'backgroundGradientTopColor':d['chartCore']['themes'][f]['chartAreaTheme']['backgroundGradientTopColor'],'backgroundGradientBottomColor':d['chartCore']['themes'][f]['chartAreaTheme']['backgroundGradientBottomColor']},'crossTool':{'lineColor':d['chartCore']['themes'][f]['crossTool']['lineColor'],'labelBoxColor':d['chartCore']['themes'][f]['crossTool']['labelBoxColor'],'labelTextColor':d['chartCore']['themes'][f]['crossTool']['labelTextColor']},'waterMarkTheme':{'firstRowColor':d['chartCore']['themes'][f]['waterMarkTheme']['firstRowColor'],'secondRowColor':d['chartCore']['themes'][f]['waterMarkTheme']['secondRowColor'],'thirdRowColor':d['chartCore']['themes'][f]['waterMarkTheme']['thirdRowColor']},'newsTheme':{'backgroundColor':d['chartCore']['themes'][f]['newsTheme']['backgroundColor']},'xAxis':{'labelTextColor':d['chartCore']['themes'][f]['xAxis']['labelTextColor']},'yAxis':{'labelTextColor':d['chartCore']['themes'][f]['yAxis']['labelTextColor']}});return{'chartCore':{'themes':{'dark':{...e('dark')},'light':{...e('light')}}}};},getEventsTabDefaultConfig=d=>{return{'chartCore':{'components':{'events':{'visible':d['chartCore']['components']['events']['visible'],'eventsVisibility':{'dividends':d['chartCore']['components']['events']['eventsVisibility']['dividends'],'earnings':d['chartCore']['components']['events']['eventsVisibility']['earnings'],'splits':d['chartCore']['components']['events']['eventsVisibility']['splits'],'conference-calls':d['chartCore']['components']['events']['eventsVisibility']['conference-calls']}},'news':{'visible':d['chartCore']['components']['news']['visible'],'icons':d['chartCore']['components']['news']['icons']}}}};},getPaddingsTabDefaultConfig=d=>{return{'chartCore':{'components':{'offsets':{'top':d['chartCore']['components']['offsets']['top'],'bottom':d['chartCore']['components']['offsets']['bottom'],'right':d['chartCore']['components']['offsets']['right'],'left':d['chartCore']['components']['offsets']['left'],'visible':d['chartCore']['components']['offsets']['visible']}}}};};