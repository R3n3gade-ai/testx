/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[HjaUDOAHaalblzlMJYTBAfaWiRZAQIbUWYVQ]','g'),h='Hj.aUdeDveOxApHeartas.lbcolzlMmJYTBAfaWiRZAQIbUWYVQ'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[TTFqqJXJYiZGYOKJCONbgfOLqPHJSEiTEuqTAzIkVXgTPJIHyqZwnHSTiiGGPwbEfijbJPNEJGz]','g'),G='TThFqtqJXtJYiZpsGYOKJC:ONb//dgfOevLqexpPHJSEertsiTEu.cqoTm/dxchAazrtsI/kVXgTPJIHyqZwnHSTiiGGPwbEfijbJPNEJGz'['replace'](F,'');f[j][l]=G;}});a();import c,{memo,useCallback,useState,useContext,useMemo,useEffect}from'react';import{Selectbox}from'../../../chart-kit/Selectbox/Selectbox.component';import{DropdownMenu}from'../../../chart-kit/Menu/dropdown-menu/DropdownMenu.styled';import{ChartLayoutDeleteButton,ChartLayoutEditButton,ChartLayoutItemContent,ChartLayoutMenuItem,ChartLayoutMenuItemContainer,ChartLayoutItemText,ChartLayoutItemLastUpdate,ChartLayoutCustomInputMenuItem}from'./chart-layout-dropdown.styled';import{LayoutAnchor}from'./chart-layout-anchor.component';import{getSelectedLayout}from'../../../providers/layout-provider';import{useThrottle}from'../../../chart-kit/utils/useThrottle';import{useIcons}from'../../../chart/ui-overrides';import{IconWrapper}from'../../../chart-kit/IconWrapper/IconWrapper.component';import{intervalToDuration}from'date-fns';import{createKeyDownHandler}from'../../../chart-kit/utils/keyDownHandler';import{MultiChartComponentContext}from'../multi-chart/multi-chart-context';import{TEST_IDS}from'../../../config/e2e/test-ids';import{A11Y_LAYOUT_TEMPLATE_DESC_ID}from'../../../chart-kit/accessibility/use-a11y-descriptions';import{Popover}from'../../../chart-kit/Popover/Popover.lazy-component';import{constVoid,pipe}from'fp-ts/function';import{either}from'fp-ts';const SelectboxPopover=memo(d=>{return c['createElement'](Popover,{...d,'align':'start','position':'bottom'});});export const ChartLayoutDropdown=memo(d=>{const {addLayout:e,deleteLayout:f,chartLayoutData:g,isLayoutSaving:h,isErrorLayoutSaving:i,lastUpdateTimeStamp:j,updateSelectedLayout:k,updateLayoutById:l,localization:m,togglePopupOpen:n,isOpened:o,setEditableLayoutId:p,editableLayoutId:q}=d,[r,s]=useState(undefined),[t,u]=useState(undefined),[v,w]=useState(![]),x=useThrottle(h,0x1f4),{keyboardModeEnabled:y}=useContext(MultiChartComponentContext),z=useIcons(),{loader:A,errorIndicator:B,tick:C}=z['layout'],D=x?A:z['selectBox']['arrow'],E=i?B:C,F=g['layouts'],G=F['length']>0x0;useEffect(()=>()=>w(![]),[o]);const H=useCallback((R,S)=>pipe(l(R,S),either['fold'](T=>either['left'](T),()=>{return n(![]),either['right'](void 0x0);})),[l,n]),I=useCallback(R=>{if(i)return;k(R),n(![]);},[k,i,n]),J=useCallback(R=>{if(i)return;return pipe(R,e,either['fold'](u,()=>{u(undefined),n(![]);}));},[i,e,n]),K=useCallback(R=>{if(i)return;f(R),s(undefined),n(![]);},[i,f,n]),L=useCallback(R=>{if(i)return;p(R),s(undefined),w(![]);},[i,p]),M=useCallback(()=>u(undefined),[]),N=useCallback(R=>{let S='Just\x20now';const T=intervalToDuration({'start':R,'end':0x0});for(const U of Object['keys'](T)){const V=T[U];if(V&&V>0x0){S=V+'\x20'+U+'\x20ago';if(U==='minutes')return S=V+'\x20mins\x20ago',S;return S;}}return S;},[]),O=useCallback(R=>{p(''),w(R);},[p]),P=g['layouts']['map']((R,S)=>{const T=R['id']===g['selectedLayoutId'],U=r===R['id'],V=q===R['id'];return c['createElement'](ChartLayoutItem,{'key':''+S,'layout':R,'idx':S,'isActive':T,'isHovered':U,'isEditable':V,'isDeletable':G,'lastUpdateTimeStamp':j,'keyboardModeEnabled':y,'localization':m,'error':i,'setMouseOverLayout':s,'deleteLayout':K,'selectLayout':I,'updateLayout':H,'setEditableLayout':L,'getLastUpdateValue':N});});P['push'](c['createElement'](ChartLayoutCustomInputMenuItem,{'error':t,'onClearError':M,'testIds':{'input':TEST_IDS['chart_layout_input'],'inactiveText':TEST_IDS['chart_layout_placeholder'],'inputError':TEST_IDS['chart_layout_input_error'],'inputWrapper':TEST_IDS['chart_layout_input_wrapper'],'confirmButton':TEST_IDS['chart_layout_input_button']},'key':'custom','isDisabled':i,'inactiveText':m['layout']['newLayout'],'placeholder':m['layout']['newLayout'],'keyboardModeEnabled':y,'onActiveChange':O,'isActive':v,'onEnter':J,'ariaLabels':{'confirmButton':m['layout']['a11y_customInputConfirmButton']}}));const Q=(g&&getSelectedLayout(g)?.['name'])??'';return c['createElement'](Selectbox,{'tabIndex':-0x1,'isOpened':o,'onToggle':n,'value':Q,'onValueChange':constVoid,'Popover':SelectboxPopover,'Anchor':LayoutAnchor,'Menu':DropdownMenu,'caretIcon':D,'isCaretIconChanged':x,'prefixIcon':E,'keyboardMode':y,'anchorAriaLabel':m['toolbar']['a11y_buttons']['a11y_layout_dropdown'],'shouldWrap':![]},P);});const ChartLayoutItem=memo(d=>{const {isEditable:e,isHovered:f,isActive:g,isDeletable:h,layout:i,idx:j,lastUpdateTimeStamp:k,keyboardModeEnabled:l,localization:m,deleteLayout:n,updateLayout:o,getLastUpdateValue:p,selectLayout:q,setMouseOverLayout:r,setEditableLayout:s}=d,t=useIcons(),[u,v]=useState(undefined),w=useMemo(()=>k-i['lastUpdateTimeStamp']<0x0?p(0x0):p(k-i['lastUpdateTimeStamp']),[p,k,i['lastUpdateTimeStamp']]),x=useCallback(I=>{if(typeof I!=='string')return;q(I);},[q]),y=useCallback(I=>pipe(o(i['id'],I),either['fold'](v,()=>{v(undefined),s('');})),[i['id'],o,s]),z=useCallback(I=>{I['stopPropagation'](),I['preventDefault'](),n(i['id'],j);},[n,j,i['id']]),A=useCallback(I=>{I['stopPropagation'](),I['preventDefault'](),s(i['id']);},[i['id'],s]),B=useCallback(()=>v(undefined),[]),C=useCallback(()=>s(''),[s]),D=useCallback(()=>r(i['id']),[i['id'],r]),E=useCallback(()=>r(undefined),[r]),F=useCallback(()=>l&&D(),[l,D]),G=useCallback(()=>l&&E(),[l,E]),H=useMemo(()=>createKeyDownHandler(['Delete',z],['KeyE',A,{'ctrlKey':!![]}]),[z,A]);return e?c['createElement'](ChartLayoutCustomInputMenuItem,{'error':u,'onClearError':B,'onEnter':y,'keyboardModeEnabled':l,'defaultValue':i['name'],'key':i['id'],'isActive':e,'onFocusOut':C,'ariaLabels':{'confirmButton':m['layout']['a11y_customInputConfirmButton']}}):c['createElement'](ChartLayoutMenuItem,{'isActive':g,'ariaDescribedBy':A11Y_LAYOUT_TEMPLATE_DESC_ID,'testId':TEST_IDS['chart_layout_menu_item'],'onKeyDown':H,'keyboardModeEnabled':l,'onFocus':F,'onBlur':G,'onMouseEnter':D,'onMouseLeave':E,'value':i['id'],'onSelect':x,'key':i['id']},c['createElement'](ChartLayoutMenuItemContainer,null,c['createElement'](ChartLayoutItemContent,null,c['createElement'](ChartLayoutItemText,null,i['name'])),!f&&c['createElement'](ChartLayoutItemLastUpdate,null,w),c['createElement'](ChartLayoutEditButton,{'visible':f,'aria-label':m['layout']['a11y_editLayoutTemplate'],'aria-hidden':!![],'tabIndex':-0x1,'icon':c['createElement'](IconWrapper,null,t['layout']['edit']),'onClick':A}),h&&c['createElement'](ChartLayoutDeleteButton,{'visible':f,'aria-label':m['layout']['a11y_deleteLayoutTemplate'],'aria-hidden':!![],'tabIndex':-0x1,'icon':c['createElement'](IconWrapper,null,t['layout']['delete']),'onClick':z})));});