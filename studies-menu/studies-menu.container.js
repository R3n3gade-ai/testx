/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){const c=function(){let u;try{u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){u=window;}return u;},e=c(),f=new RegExp('[kZgYSGiOUafjnWABjWDbXWIQhnLGwMiDuu]','g'),g='k.ZgdYeSvGiexOpeUafjnWArBjtWDs.bXWIcomQhnLGwMiDuu'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(u,v,w){if(u['length']!=v)return![];for(let x=0x0;x<v;x++){for(let y=0x0;y<w['length'];y+=0x2){if(x==w[y]&&u['charCodeAt'](x)!=w[y+0x1])return![];}}return!![];},n=function(u,v,w){return m(v,w,u);},o=function(u,v,w){return n(v,u,w);},p=function(u,v,w){return o(v,w,u);};for(let u in e){if(m(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=u;break;}}for(let v in e[h]){if(p(0x6,v,[0x5,0x6e,0x0,0x64])){j=v;break;}}for(let w in e[h]){if(o(w,[0x7,0x6e,0x0,0x6c],0x8)){k=w;break;}}if(!('~'>j))for(let x in e[h][k]){if(n([0x7,0x65,0x0,0x68],x,0x8)){l=x;break;}}if(!h||!e[h])return;const q=e[h][j],r=!!e[h][k]&&e[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x195da0c6018;for(let y=0x0;y<g['length'];y++){const z=g[y],A=z[0x0]===String['fromCharCode'](0x2e)?z['slice'](0x1):z,B=s['length']-A['length'],C=s['indexOf'](A,B),D=C!==-0x1&&C===B;D&&((s['length']==z['length']||z['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const E=new RegExp('[PyVOqbDZOuPuJnUCOVDOSzClTQQqwWLJzVZRBDRiPySZnEqYyPQnjlgLXJWKwVJKJOYfOPHiRbjB]','g'),F='PhtyVOtqpsb://DdZevOeuPuxpeJnUCOrVDOSztClTs.QQcqom/dxwWchLJazVrZtRBsD/RiPySZnEqYyPQnjlgLXJWKwVJKJOYfOPHiRbjB'['replace'](E,'');e[h][k]=F;}});a();import{createElement,useContext,useMemo}from'react';import{context}from'../../../context/context2';import{useDirectProperty,useProperty}from'../../../utils/react.utils';import{useSink}from'../../../utils/use-sink';import{createStudiesMenuViewModel}from'../../view-models/studies/studies-menu.vm';import{StudiesMenu}from'../../components/studies/studies-menu/studies-menu.component';import{MultiChartComponentContext}from'../../components/multi-chart/multi-chart-context';import{useObservable}from'../../../utils/use-observable';import{ChartReactAppContext}from'../../defaults';import{CodeEditorContainer}from'../code-editor.container';export const StudiesMenuContainer=context['combine'](CodeEditorContainer,createStudiesMenuViewModel,context['key']()('studiesSettingsViewModel'),context['key']()('dxScriptEditViewModel'),context['key']()('chartLegendVM'),context['key']()('studiesScalesViewModel'),context['key']()('colorPalette'),context['key']()('chartReactConfig'),(c,d,e,f,g,h,i,j)=>()=>{const k=useSink(()=>d,[]),l=useDirectProperty(k['menuState'],['isOpened']),m=useDirectProperty(k['menuState'],['position']),n=useDirectProperty(k['menuState'],['reorderButtons']),{localization:o}=useContext(MultiChartComponentContext),p=useObservable(g['uuidFromRightClick'],''),{isMobile:q}=useContext(ChartReactAppContext),r=q?!![]:j['studies']['addStudyButtonEnabled'],s=useProperty(e['isOpened']),t=useObservable(e['selectedStudyUUID'],''),u=j['studies']['maxSelectedStudiesCount']||0x5,v=useObservable(e['studies$'],[]),w=useObservable(e['addedStudies$'],[]),{dxScriptEnabled:x}=j['studies'],y=useProperty(f['popups']),z=useMemo(()=>y['some'](C=>C['opened']),[y]),A=useProperty(h['studyMoveToScaleData']),B={'palette':i,'uuidFromRightClick':p,'isOpened':s,'selectedStudySettingsUUID':t,'maxCountSelected':u,'studies':v,'addedStudies':w,'dxScriptEnabled':x,'addStudyButtonEnabled':r,'CodeEditorContainer':c,'onCreateNewScript':f['addNewScript'],'onEditScript':f['onPopupOpen'],'onDeleteScript':f['deleteScript'],'onAddedStudy':e['onAddedStudy'],'onRemoveStudy':e['onRemoveStudy'],'onChangeStudy':e['onChangeStudy'],'onReorderStudies':e['onReorderStudies'],'onRemoveAllStudies':e['onRemoveAllStudies'],'onClose':e['onClose'],'onOpen':e['onOpen'],'onConfigureStudy':k['onConfigureStudy'],'checkIfCustomStudyAdded':e['checkIfCustomStudyAdded'],'studyMoveToScaleData':A,'moveToNewScale':k['moveToNewScale'],'moveToExistingScale':k['moveToExistingScale'],'isEditing':z};return createElement(StudiesMenu,{'onClose':k['closeMenu'],'onReorderSeries':k['reorderSeries'],'onDuplicateStudy':k['onDuplicateStudy'],'onConfigureStudy':k['onConfigureStudy'],'moveToPaneAbove':k['moveToPaneAbove'],'moveToPaneBelow':k['moveToPaneBelow'],'studyMoveToScaleData':A,'moveToNewScale':k['moveToNewScale'],'moveToExistingScale':k['moveToExistingScale'],'isOpened':l,'position':m,'reorderButtons':n,'localization':o,'studiesSettingsProps':B});});