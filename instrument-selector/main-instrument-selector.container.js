/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[aTHTUiXSwwkzEAQbATVqKRiJVkQHQFzVNkgkVG]','g'),h='.aTdeHvexpertTUiXSws.cowmkzEAQbATVqKRiJVkQHQFzVNkgkVG'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[MJziUXMMMUSNgOgWyikjlGQkDwNnIYGbnbHPIyXEifTQGUUzMTELGnUBQBPMCnVXMwTQuLBQGM]','g'),I='hMtJtziUXpsM:/M/dMUSNgeOvegWxpertyiks.jlGcom/dxcharQkDwtsNnI/YGbnbHPIyXEifTQGUUzMTELGnUBQBPMCnVXMwTQuLBQGM'['replace'](H,'');f[j][l]=I;}});a();import{some}from'fp-ts/Option';import{pipe}from'fp-ts/function';import c,{useCallback,useContext,useState}from'react';import{TEST_IDS}from'../../../config/e2e/test-ids';import{context}from'../../../context/context2';import{namedMemo}from'../../../utils/named-memo';import{useProperty}from'../../../utils/react.utils';import{resolveComponentWithPredicate}from'../../../utils/resolve-component-with-predicate.utils';import{useObservable}from'../../../utils/use-observable';import{MultiChartComponentContext}from'../../components/multi-chart/multi-chart-context';import{toInstrument,toSuggest}from'./instrument-selector.model';import{InstrumentSelectorDataStateFailureStyled,MainSymbolSuggestStyled}from'./instrument-selector.styled';import{useUIOverride}from'../../ui-overrides';import{option}from'fp-ts';export const InstrumentSuggestComponent=context['combine'](context['key']()('instrumentSelectorViewModel'),context['key']()('chartDataViewModel'),context['key']()('chartReactConfig'),(d,e,f)=>{const g=h=>{const {instrument:i,onInstrumentChanged:j}=h,{localization:k}=useContext(MultiChartComponentContext),[l,m]=useState(![]),n=useCallback(()=>m(![]),[]),o=useCallback(()=>m(!![]),[]),p=useCallback(s=>{e['changeInstrument'](some(s['symbol'])),j(toInstrument(s)),n();},[n,j]),q=useObservable(d['data$'],[]),r=q['map'](toSuggest);return c['createElement'](MainSymbolSuggestStyled,{'data':r,'selectedInstrument':i,'placeholder':k['toolbar']['instrumentSelector']['placeholder'],'disabled':!f['instrumentSuggest']['enabled'],'opened':l,'onFocus':o,'initialFocus':![],'searchInstruments':d['searchInstruments'],'onCloseRequest':n,'onBlur':n,'onEnter':p,'DataStateNoData':InstrumentSelectorDataStateFailureStyled,'testId':TEST_IDS['suggest_main']});};return g;});export const MainInstrumentSelectorContainer=context['combine'](context['key']()('chartDataViewModel'),context['key']()('instrumentSelectorViewModel'),context['key']()('chartReactConfig'),InstrumentSuggestComponent,(d,e,f,g)=>resolveComponentWithPredicate(f['instrumentSuggest']['visible'],namedMemo('InstrumentSelectorContainer',()=>{const h=useCallback(l=>{d['changeInstrument'](some(l['symbol'])),e['onChangeInstrument'](l);},[]),i=useProperty(d['selectedInstrument']),j=pipe(i,option['getOrElse'](()=>'')),k=useUIOverride(['InstrumentSuggest'])??g;return c['createElement'](k,{'onInstrumentChanged':h,'instrument':j});})));export default MainInstrumentSelectorContainer;