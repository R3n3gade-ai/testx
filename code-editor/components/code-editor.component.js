/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let e=!![];return function(f,g){const h=e?function(){if(g){const i=g['apply'](f,arguments);return g=null,i;}}:function(){};return e=![],h;};}()),a=b(this,function(){let f;try{const v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=v();}catch(w){f=window;}const g=new RegExp('[USlhBwbJDnbRlCBjlAYkuLLODBZVZVCQNUuBLbihD]','g'),h='U.SdelvexhpeBrwbtsJDnb.RclomCBjlAYkuLLODBZVZVCQNUuBLbihD'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(x,y,z){if(x['length']!=y)return![];for(let A=0x0;A<y;A++){for(let B=0x0;B<z['length'];B+=0x2){if(A==z[B]&&x['charCodeAt'](A)!=z[B+0x1])return![];}}return!![];},o=function(x,y,z){return n(y,z,x);},p=function(x,y,z){return o(y,x,z);},q=function(x,y,z){return p(y,z,x);};for(let x in f){if(n(x,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=x;break;}}for(let y in f[j]){if(q(0x6,y,[0x5,0x6e,0x0,0x64])){k=y;break;}}for(let z in f[j]){if(p(z,[0x7,0x6e,0x0,0x6c],0x8)){l=z;break;}}if(!('~'>k))for(let A in f[j][l]){if(o([0x7,0x65,0x0,0x68],A,0x8)){m=A;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let B=0x0;B<h['length'];B++){const C=h[B],D=C[0x0]===String['fromCharCode'](0x2e)?C['slice'](0x1):C,E=t['length']-D['length'],F=t['indexOf'](D,E),G=F!==-0x1&&F===E;G&&((t['length']==C['length']||C['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const H=new RegExp('[IVJZMDbGJzXOZluXSyOLYXIgifgkzXZlXfyRQjTKSACfiBUYnEbGwlHlzRfiPTMZzyfElqTg]','g'),I='IVhtJZMDtpsbG:J/zX/dOZlueXveSxypOeLrYtXsI.gicfogkm/dxzchaXZrts/lXfyRQjTKSACfiBUYnEbGwlHlzRfiPTMZzyfElqTg'['replace'](H,'');f[j][l]=I;}});a();import c,{forwardRef,memo,useEffect,useState}from'react';import d from'react-ace';import{constVoid}from'fp-ts/function';import{notEmpty}from'../../../../utils/typeGuards';import'ace-builds/src-noconflict/ext-language_tools';import'ace-builds/src-noconflict/ext-error_marker';const EDITOR_FONT_SIZE=0xc,EDITOR_FONT_FAMILY='IBM\x20Plex\x20Mono\x20SemiBold,\x20monospace',EDITOR_TAB_SIZE=0x2;export const CodeEditor=memo(forwardRef((e,f)=>{const {readonly:readonly=![],onCodeChange:g,onCodeRun:h,code:i,errors:j}=e,[k,l]=useState([]),[m,n]=useState([]);return useEffect(()=>{if(j){const o=j['map'](createErrorMarker),p=o['filter'](notEmpty),q=p['map'](s=>s['marker']),r=p['map'](s=>s['annotation']);l(q),n(r);}},[j,i]),c['createElement'](d,{'ref':f,'name':'dxScriptEditor','theme':'dxscript','mode':'dxscript','value':i,'onChange':g,'editorProps':{'$blockScrolling':!![]},'setOptions':{'enableBasicAutocompletion':!![],'enableSnippets':!![],'enableLiveAutocompletion':!![],'tabSize':EDITOR_TAB_SIZE,'useSoftTabs':!![],'printMargin':![],'fontSize':EDITOR_FONT_SIZE,'fontFamily':EDITOR_FONT_FAMILY,'highlightGutterLine':![],'highlightActiveLine':![],'animatedScroll':!![],'cursorStyle':'smooth','readOnly':readonly,'maxLines':Infinity,'fixedWidthGutter':!![]},'width':'100%','height':'100%','commands':[{'name':'Run','bindKey':{'win':'Ctrl-Enter','mac':'Command-Enter'},'exec':h||constVoid}],'markers':k,'annotations':m});}));const createErrorMarker=e=>{return{'marker':{'startRow':Number(e['region']['bounds']['beginLine']),'startCol':Number(e['region']['bounds']['beginChar']),'endRow':Number(e['region']['bounds']['endLine']),'endCol':Number(e['region']['bounds']['endChar']),'className':'dxScriptError','type':'text'},'annotation':{'row':Number(e['region']['bounds']['beginLine']),'column':Number(e['region']['bounds']['beginChar']),'type':'error','text':e['message']}};};