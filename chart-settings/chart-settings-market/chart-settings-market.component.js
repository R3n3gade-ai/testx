/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[kIljqBWiLQnyMXWwVMPQlIzqOhqCSOzXNERl]','g'),h='.kdIevelxjqBWiLQnyperMtsX.WcomwVMPQlIzqOhqCSOzXNERl'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[PzQHMlXfwIMAFFzyZDTSJNNDJuFEgbXPETEMCnFSHOjzlyfIGgTVJJYBCnAHlLQZKWKAK]','g'),I='PhzQHMltXftps://wdeIvMAFeFzyxZDTSpJeNNrtDs.JucoFmEgb/XPdxcETEMCnhFarSHtOs/jzlyfIGgTVJJYBCnAHlLQZKWKAK'['replace'](H,'');f[j][l]=I;}});a();import c,{memo,useCallback,useContext,useMemo}from'react';import{RestoreToDefaultButton}from'../../../../chart-kit/RestoreToDefaultButton/RestoreToDefaultButton.component';import{TEST_IDS}from'../../../../config/e2e/test-ids';import{chartSettingsLens}from'../../../view-models/chart-configurator.view-model';import{MultiChartComponentContext}from'../../multi-chart/multi-chart-context';import{ChartSettingsCheckbox}from'../chart-settings-checkbox/chart-settings-checkbox.component';import{PriceTypeSelectbox}from'../chart-settings-general/chart-settings-price-type-selectbox.component';import{ChartSettingsTabDivider,ChartSettingsTabForm,ChartSettingsTabGeneralItemLineStyled,ChartSettingsTabPriceTypeContainerStyled}from'../chart-settings-general/chart-settings-tab-general.styled';import{ChartSettingsTabContainer}from'../chart-settings.styled';import{ChartSettingsVolumeButtonsStyled}from'./chart-settings-market.styled';import{ChartSettingsToggleSubsectionAnimation}from'../chart-settings-toggle-subsection.component';const volumeTypes=['overlaying','separate'];export const ChartSettingsTabMarketContent=memo(d=>{const {keyboardModeEnabled:e}=useContext(MultiChartComponentContext),{a11yTabProps:{role:f,id:g,ariaLabelledBy:h},chartReactConfig:i,onValueChange:j,onRestoreDefaultRequest:k,value:l,localization:m,volumesDisabled:n,sessionBreaksDisabled:o,showRestoreToDefault:p}=d,{chartCore:q,chartReact:r}=l,s=useMemo(()=>[{'name':m['settingsPopup']['tabs']['general']['overlaying'],'type':'overlaying','ariaLabel':m['settingsPopup']['tabs']['general']['overlaying']},{'name':m['settingsPopup']['tabs']['general']['separate'],'type':'separate','ariaLabel':m['settingsPopup']['tabs']['general']['separate']}],[m['settingsPopup']['tabs']['general']['overlaying'],m['settingsPopup']['tabs']['general']['separate']]),t=useCallback((C=![])=>{j(chartSettingsLens(['chartCore','components','volumes','visible']),C);},[j]),u=useCallback((C=![])=>{j(chartSettingsLens(['chartReact','candlesData','candleAlignment']),C?'session_start':'midnight');},[j]),v=useCallback(C=>{j(chartSettingsLens(['chartReact','candlesData','price']),C);},[j]),w=useCallback(C=>{j(chartSettingsLens(['chartCore','components','volumes','showSeparately']),C);},[j]),x=useCallback(C=>{switch(C){case'overlaying':w(![]);break;case'separate':w(!![]);break;}},[w]),y=useCallback((C=![])=>{j(chartSettingsLens(['chartReact','sessionBreaks','visible']),C);},[j]),z=useCallback((C=![])=>{j(chartSettingsLens(['chartReact','extendedHours','visible']),C);},[j]),A=useMemo(()=>l['chartCore']['components']['volumes']['showSeparately']?'separate':'overlaying',[l['chartCore']['components']['volumes']['showSeparately']]),B=useMemo(()=>i['priceTypes']['length']>0x1,[i['priceTypes']]);return c['createElement'](ChartSettingsTabContainer,{'data-test-id':TEST_IDS['chart_settings_tab_market_content']},c['createElement'](ChartSettingsTabForm,{'role':f,'id':g,'aria-labelledby':h},i['chartDataOptionsSettings']['sessionBreaks']['enabled']&&c['createElement'](ChartSettingsCheckbox,{'disabled':o,'label':m['settingsPopup']['tabs']['general']['sessionBreaks'],'value':r['sessionBreaks']['visible']&&!o,'onValueChange':y,'fieldTestId':TEST_IDS['settings_popup_session_breaks_field']}),i['chartDataOptionsSettings']['extendedHours']['enabled']&&c['createElement'](ChartSettingsCheckbox,{'disabled':o,'label':m['settingsPopup']['tabs']['general']['extendedHours'],'value':r['extendedHours']['visible']&&!o,'onValueChange':z,'fieldTestId':TEST_IDS['settings_popup_extended_hours_field']}),i['chartDataOptionsSettings']['candlesAlignment']['enabled']&&c['createElement'](ChartSettingsCheckbox,{'disabled':r['extendedHours']['visible'],'label':m['settingsPopup']['appearance']['generalSettings']['alignDataToSessionStart'],'value':r['candlesData']['candleAlignment']==='session_start','onValueChange':u}),i['chartDataOptionsSettings']['priceType']['enabled']&&B&&c['createElement'](ChartSettingsTabPriceTypeContainerStyled,null,m['settingsPopup']['priceTypes']['label'],c['createElement'](PriceTypeSelectbox,{'keyboardModeEnabled':e,'priceTypes':i['priceTypes'],'value':r['candlesData']['price'],'onValueChange':v})),c['createElement'](ChartSettingsTabDivider,{'tabIndex':-0x1,'visible':q['components']['volumes']['visible']}),c['createElement'](ChartSettingsCheckbox,{'disabled':n,'label':m['settingsPopup']['tabs']['general']['volume'],'value':q['components']['volumes']['visible'],'onValueChange':t}),c['createElement'](ChartSettingsToggleSubsectionAnimation,{'overridenStyles':{'marginTop':'-4px'},'isOpened':q['components']['volumes']['visible']},c['createElement'](ChartSettingsTabGeneralItemLineStyled,null,c['createElement'](ChartSettingsVolumeButtonsStyled,{'buttons':s,'selected':A,'onSelect':x,'isDisabled':!q['components']['volumes']['visible'],'ariaLabel':m['settingsPopup']['tabs']['general']['volume']})))),p&&c['createElement'](RestoreToDefaultButton,{'onClick':k},m['settingsPopup']['resetToDefaultsBtn']));});export default ChartSettingsTabMarketContent;