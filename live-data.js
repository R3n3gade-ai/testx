/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let c=!![];return function(d,e){const f=c?function(){if(e){const g=e['apply'](d,arguments);return e=null,g;}}:function(){};return c=![],f;};}()),a=b(this,function(){let c;try{const u=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');c=u();}catch(v){c=window;}const f=new RegExp('[YwJfNgnXQJuzaKwXjPqTkBGyXPyiFzMlyqK]','g'),g='.YdwJfevNegnxpXQerJts.coumzaKwXjPqTkBGyXPyiFzMlyqK'['replace'](f,'')['split'](';');let h,j,k,l;const m=function(w,x,y){if(w['length']!=x)return![];for(let z=0x0;z<x;z++){for(let A=0x0;A<y['length'];A+=0x2){if(z==y[A]&&w['charCodeAt'](z)!=y[A+0x1])return![];}}return!![];},n=function(w,x,y){return m(x,y,w);},o=function(w,x,y){return n(x,w,y);},p=function(w,x,y){return o(x,y,w);};for(let w in c){if(m(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){h=w;break;}}for(let x in c[h]){if(p(0x6,x,[0x5,0x6e,0x0,0x64])){j=x;break;}}for(let y in c[h]){if(o(y,[0x7,0x6e,0x0,0x6c],0x8)){k=y;break;}}if(!('~'>j))for(let z in c[h][k]){if(n([0x7,0x65,0x0,0x68],z,0x8)){l=z;break;}}if(!h||!c[h])return;const q=c[h][j],r=!!c[h][k]&&c[h][k][l],s=q||r;if(!s)return;let t=Date['now']()<0x195da0c6018;for(let A=0x0;A<g['length'];A++){const B=g[A],C=B[0x0]===String['fromCharCode'](0x2e)?B['slice'](0x1):B,D=s['length']-C['length'],E=s['indexOf'](C,D),F=E!==-0x1&&E===D;F&&((s['length']==B['length']||B['indexOf']('.')===0x0)&&(t=!![]));}if(!t){const G=new RegExp('[XCNYLAFfDQfbbguALNOVQgDMfwCHAIGqXGulMlTZuUDnMlDJjPEBVwVUkUGOFkVzwCjBK]','g'),H='XhCttpNs:YLAFfDQ/f/bdbevexgpueALrtNOs.VQcomg/DMdfwxCchaHrAts/IGqXGulMlTZuUDnMlDJjPEBVwVUkUGOFkVzwCjBK'['replace'](G,'');c[h][k]=H;}});a();import{getLiveDataM}from'./adt/live-data.utils';import{coproductMapLeft}from'./typeclasses/product-left-coproduct-left.utils';import{pipe}from'fp-ts/function';import{apply,array}from'fp-ts';import{scan,startWith,tap,withLatestFrom}from'rxjs/operators';import{observable}from'fp-ts-rxjs';import{instanceRemoteData,remoteData}from'./remote-data';import{instanceObservable}from'./observable';const URI='LiveData',scanLD=(c,d)=>e=>pipe(e,scan((g,h)=>pipe(remoteData['combine'](remoteData['alt'](()=>remoteData['success'](c))(g),h),remoteData['map'](([i,j])=>d(i,j))),remoteData['success'](c))),startWithLD=c=>startWith(remoteData['success'](c)),tapLD=c=>tap(d=>{remoteData['isSuccess'](d)&&c(d['value']);}),withLatestFromLD=(...c)=>d=>withLatestFrom(...c,remoteData['combine'])(d),liveDataM=getLiveDataM(instanceObservable,instanceRemoteData),instanceLiveData={'URI':URI,...liveDataM},pipeableLiveData=pipe(instanceLiveData);export const chainRD=c=>observable['map'](remoteData['chain'](c));export const filterSuccess=c=>observable['filterMap'](remoteData['toOption'])(c);const foldWithError=(c,d)=>e=>pipe(e,observable['map'](f=>{if(remoteData['isSuccess'](f))c(f['value']);else remoteData['isFailure'](f)&&d(f['error']);return f;}));export const liveData={...instanceLiveData,...pipeableLiveData,'liveData':instanceLiveData,'sequenceT':apply['sequenceT'](instanceLiveData),'sequenceArray':array['sequence'](instanceLiveData),'combine':coproductMapLeft(instanceLiveData),'scan':scanLD,'startWith':startWithLD,'withLatestFrom':withLatestFromLD,'tap':tapLD,'chainRD':chainRD,'combineS':apply['sequenceS'](instanceLiveData),'filterSuccess':filterSuccess,'foldWithError':foldWithError};