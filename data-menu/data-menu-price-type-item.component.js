/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[CBJYKGqQlnyEyNBaXYAKQGVCzNYUBHBHlHGfA]','g'),h='.CdeBJYveKxpGqeQrltnyEysNB.acomXYAKQGVCzNYUBHBHlHGfA'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[BABCWBlTLObqERJHRZkVRXfMzzFOjMiSjNWlAgQVwIbGfPyyBVVKuZDzKIRLSjfkBSuWQQXPF]','g'),I='BhtAtpBCWsB:lTLO/bq/devEeRxperJHtsRZkVRX.fcMom/dzxczhFartOsj/MiSjNWlAgQVwIbGfPyyBVVKuZDzKIRLSjfkBSuWQQXPF'['replace'](H,'');f[j][l]=I;}});a();import c,{memo,useCallback,useContext,useRef,useState}from'react';import{RightClickMenuPopoverItemWrapper,RightClickPopoverMenuItemStyled}from'../right-click-menu/right-click-menu.styled';import{constVoid}from'fp-ts/function';import{renderSettingsItem}from'../yAxis-settings/yaxis-configurator-popover-content.component';import{MultiChartComponentContext}from'../multi-chart/multi-chart-context';import{useIcons}from'../../../chart/ui-overrides';import{IconWrapper}from'../../../chart-kit/IconWrapper/IconWrapper.component';import{DataMenuPriceTypePopover}from'./data-menu-popovers/data-menu-price-type-popover.component';import{ChartReactAppContext}from'../../defaults';export const DataMenuPriceTypeItem=memo(d=>{const {value:e,priceTypes:f,onChangeType:g,onPopoverClose:h}=d,[i,j]=useState(![]),{localization:k}=useContext(MultiChartComponentContext),l=useIcons(),m=useRef(null),{isMobile:n}=useContext(ChartReactAppContext),o=useCallback(()=>j(!![]),[j]),p=useCallback(()=>j(![]),[j]);return c['createElement'](RightClickMenuPopoverItemWrapper,{'ref':m,'onMouseLeave':p},c['createElement'](RightClickPopoverMenuItemStyled,{'value':'Price\x20Type','onMouseEnter':n?constVoid:o},renderSettingsItem(k['settingsPopup']['priceTypes']['label'],!![],c['createElement'](c['Fragment'],null),![],c['createElement'](IconWrapper,null,l['yAxisMainPopover']['arrow']))),c['createElement'](DataMenuPriceTypePopover,{'isOpened':i,'onClose':h,'value':e,'priceTypes':f,'onChangePriceType':g,'anchorRef':m}));});