/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[XkjMAAZiJTAWFgYJlbhnCVAQYlVXBlTEL]','g'),h='.dXekvexjMApAerZiJTAWtsFg.cYomJlbhnCVAQYlVXBlTEL'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[IWqwLVUuUyQCWYPuBPMIBiuONlABIRkyBXRISGgNDPbJDCPDHUJfRPDizUzQVICLCzGZqgXy]','g'),G='htItWpqs:wLV/U/uUydQCeveWxYpPertuBPsM.cIomBi/dxuONlcAhBarItRs/kyBXRISGgNDPbJDCPDHUJfRPDizUzQVICLCzGZqgXy'['replace'](F,'');f[j][l]=G;}});a();import{deepEqual}from'@devexperts/dxcharts-lite/dist/chart/utils/object.utils';import c,{useCallback}from'react';import{context}from'../../../../context/context2';import{namedMemo}from'../../../../utils/named-memo';import{useDirectProperty,useProperty}from'../../../../utils/use-property';import{useSink}from'../../../../utils/use-sink';import{ChartSettingsChartTypeColors}from'../../../components/chart-settings/chart-settings-chart-type-colors/chart-settings-chart-type-colors';import{ChartSettingsChartTypeColorsAreaContainer}from'./chart-settings-chart-type-colors-area.container';import{ChartSettingsChartTypeColorsBarContainer}from'./chart-settings-chart-type-colors-bar.container';import{ChartSettingsChartTypeColorsBaselineContainer}from'./chart-settings-chart-type-colors-baseline.container';import{ChartSettingsChartTypeColorsCandlesContainer}from'./chart-settings-chart-type-colors-candles.container';import{ChartSettingsChartTypeColorsEquivolumeContainer}from'./chart-settings-chart-type-colors-equivolume.container';import{ChartSettingsChartTypeColorsHistogramContainer}from'./chart-settings-chart-type-colors-histogram.container';import{ChartSettingsChartTypeColorsLineContainer}from'./chart-settings-chart-type-colors-line.container';import{ChartSettingsChartTypeColorsScatterContainer}from'./chart-settings-chart-type-colors-scatter.container';import{getChartTypeColorsDefaultConfig}from'./chart-type-colors.config';const getColorsContainer=d=>{switch(d){case'candle':case'hollow':case'heikinAshi':case'trend':return ChartSettingsChartTypeColorsCandlesContainer;case'bar':return ChartSettingsChartTypeColorsBarContainer;case'equivolume':return ChartSettingsChartTypeColorsEquivolumeContainer;case'line':return ChartSettingsChartTypeColorsLineContainer;case'area':return ChartSettingsChartTypeColorsAreaContainer;case'scatterPlot':return ChartSettingsChartTypeColorsScatterContainer;case'histogram':return ChartSettingsChartTypeColorsHistogramContainer;case'baseline':return ChartSettingsChartTypeColorsBaselineContainer;default:return ChartSettingsChartTypeColorsCandlesContainer;}};export const ChartSettingsChartTypeColorsContainer=context['combine'](context['key']()('chartTypeViewModel'),context['key']()('localization'),context['key']()('themeViewModel'),context['key']()('chartConfiguratorViewModel'),context['key']()('chartReactConfig'),context['key']()('colorPalette'),context['key']()('initialChartTheme'),(d,e,f,g,h,i)=>namedMemo('ChartSettingsChartTypeColors',j=>{const k=useProperty(f['activeTheme']),l=g['setSettingsByPath'],m=useDirectProperty(g['state'],['settings','chartCore']),n=getColorsContainer(d['type']['getValue']()),o=g['defaultConfig'],p=getChartTypeColorsDefaultConfig(d['type']['getValue'](),j['defaultConfig'],o),q=!deepEqual(p['chartCore']['themes'][k],m['themes'][k]),r=useSink(()=>n({'localization':e,'colorPalette':i,'chartConfiguratorViewModel':g,'themeViewModel':f}),[]),s=useCallback(()=>{const t=p['chartCore']['themes'][k];f['onRestoreDefaultTheme'](t);},[p,k]);return c['createElement'](ChartSettingsChartTypeColors,{'changeTheme':f['changeTheme'],'activeTheme':k,'localization':e,'onColorChange':l,'settings':m,'palette':i,'ColorSettingsComponent':r,'popoverContainer':j['popoverRef'],'showRestoreToDefault':q,'onRestoreDefaultRequest':s,'showThemeSwitcher':h['themeControls']['enabled']});}));export default ChartSettingsChartTypeColorsContainer;