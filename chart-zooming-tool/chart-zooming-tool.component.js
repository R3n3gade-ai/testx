/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[WLyMXaYUYaKDDNPiJiSBVknZHkGAgMOOhgkC]','g'),h='W.LydeMXavYUYeaKDDNxPiJiSpBVknZHkeGrtAsgM.coOOmhgkC'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[BLinEzZfkjGKXEjPjFbWQqqXZjZbPUgDlyAVfiEwiqOLELBzOXLlwMYIFMwyREkWUL]','g'),G='BhLinEzZttfpks:j/G/dKXEejvexPjFpertsb.cWQoqm/qdxXcharZjZbtsP/UgDlyAVfiEwiqOLELBzOXLlwMYIFMwyREkWUL'['replace'](F,'');f[j][l]=G;}});a();import{inRectangle}from'@dx-private/dxchart5-modules/dist/drawings/model/drawing.view-model';import c,{memo,useCallback,useContext,useEffect,useState}from'react';import{IconWrapper}from'../../../chart-kit/IconWrapper/IconWrapper.component';import{TEST_IDS}from'../../../config/e2e/test-ids';import{useIcons,useUIOverrideComponent}from'../../ui-overrides';import{ChartReactAppContext}from'../../defaults';import{MultiChartComponentContext}from'../multi-chart/multi-chart-context';import{ZoomingToolContainerStyled,ZoomingToolZoomInStyled,ZoomingToolZoomOutStyled}from'./chart-zooming-tool-container.styled';export const ChartZoomingTool=memo(d=>{const {chart:e,zoomIn:f,zoomOut:g,buttonsDisabled:h,marginBottom:i,localization:j,currentCanvasBounds:k}=d,[l,m]=useState(![]),n=useCallback(t=>{e['crossEventProducer']['fireCrossClose'](),t['stopPropagation']();},[e['crossEventProducer']]),{isMobile:o}=useContext(ChartReactAppContext);useEffect(()=>{const t=e['canvasInputListener']['observeMouseMove']()['subscribe'](v=>{const w=k['width']*0.375,x=k['height']*0.85-i+0xa,y=k['width']*0.25,z=k['height']*0.15+i+0xa;m(inRectangle(v,[w,x,y,z]));}),u=e['canvasInputListener']['observeMouseEnter']()['subscribe'](()=>{m(![]);});return()=>{t['unsubscribe'](),u['unsubscribe']();};},[e,k,i]);const {zooming:p}=useIcons(),{keyboardModeEnabled:q}=useContext(MultiChartComponentContext),r=l||q,s=useUIOverrideComponent(['ChartZoomingTool'],d)??c['createElement'](ZoomingToolContainerStyled,{'isVisible':r,'marginBottom':i},c['createElement'](ZoomingToolZoomInStyled,{'aria-label':j['legend']['a11y_zoomIn'],'disabled':h['zoomIn'],'onClick':f,'onMouseMove':n,'icon':c['createElement'](IconWrapper,null,p['zoomin']),'testId':TEST_IDS['zoom_button_in']}),c['createElement'](ZoomingToolZoomOutStyled,{'aria-label':j['legend']['a11y_zoomOut'],'disabled':h['zoomOut'],'onClick':g,'onMouseMove':n,'icon':c['createElement'](IconWrapper,null,p['zoomout']),'testId':TEST_IDS['zoom_button_out']}));return!o?s:c['createElement'](c['Fragment'],null);});