/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const b=(function(){let d=!![];return function(e,f){const g=d?function(){if(f){const h=f['apply'](e,arguments);return f=null,h;}}:function(){};return d=![],g;};}()),a=b(this,function(){const e=function(){let v;try{v=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(w){v=window;}return v;},f=e(),g=new RegExp('[qIlEDugqOKUCuQLifnPHJQfiyTAawEz]','g'),h='.deveqxpIerltEsDu.gqcOoKUmCuQLifnPHJQfiyTAawEz'['replace'](g,'')['split'](';');let j,k,l,m;const n=function(v,w,x){if(v['length']!=w)return![];for(let y=0x0;y<w;y++){for(let z=0x0;z<x['length'];z+=0x2){if(y==x[z]&&v['charCodeAt'](y)!=x[z+0x1])return![];}}return!![];},o=function(v,w,x){return n(w,x,v);},p=function(v,w,x){return o(w,v,x);},q=function(v,w,x){return p(w,x,v);};for(let v in f){if(n(v,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){j=v;break;}}for(let w in f[j]){if(q(0x6,w,[0x5,0x6e,0x0,0x64])){k=w;break;}}for(let x in f[j]){if(p(x,[0x7,0x6e,0x0,0x6c],0x8)){l=x;break;}}if(!('~'>k))for(let y in f[j][l]){if(o([0x7,0x65,0x0,0x68],y,0x8)){m=y;break;}}if(!j||!f[j])return;const r=f[j][k],s=!!f[j][l]&&f[j][l][m],t=r||s;if(!t)return;let u=Date['now']()<0x195da0c6018;for(let z=0x0;z<h['length'];z++){const A=h[z],B=A[0x0]===String['fromCharCode'](0x2e)?A['slice'](0x1):A,C=t['length']-B['length'],D=t['indexOf'](B,C),E=D!==-0x1&&D===C;E&&((t['length']==A['length']||A['indexOf']('.')===0x0)&&(u=!![]));}if(!u){const F=new RegExp('[gCOJuIqCniQjUKTQLKqRDXAqFlNizfAzjMkjiFTqJkVYPfHQqYEHBNTUPUHLjNPZGzSCIXfAJflZ]','g'),G='ghtCOJutpsI:qCn/i/deQjvUexpeKrTQLKtsqRDX.AcqFloNizfAzjmM/kjdxchairtsFT/qJkVYPfHQqYEHBNTUPUHLjNPZGzSCIXfAJflZ'['replace'](F,'');f[j][l]=G;}});a();import c,{memo,useContext}from'react';import{IconsRenderContext}from'../multi-chart/icons-render-context';export const SyncIcon=memo(({label:d})=>{const {svgShapeRendering:e}=useContext(IconsRenderContext);return c['createElement']('span',{'data-icon-name':d},c['createElement']('svg',{'aria-hidden':'true','width':'20','height':'20','viewBox':'0\x200\x2020\x2020','fill':'none','xmlns':'http://www.w3.org/2000/svg'},c['createElement']('path',{'shapeRendering':e,'d':'M10.4349\x207.23735C10.7828\x207.31033\x2011.0834\x207.41337\x2011.3369\x207.54646C11.5946\x207.67955\x2011.8115\x207.83625\x2011.9876\x208.01656C12.5288\x208.55321\x2012.8896\x209.14781\x2013.07\x209.80037C13.2503\x2010.4486\x2013.2503\x2011.099\x2013.07\x2011.7516C12.8896\x2012.3999\x2012.5309\x2012.9923\x2011.994\x2013.529L9.72619\x2015.7958C9.19359\x2016.3281\x208.60301\x2016.6845\x207.95444\x2016.8648C7.30588\x2017.0451\x206.65516\x2017.0451\x206.0023\x2016.8648C5.35374\x2016.6887\x204.75886\x2016.3281\x204.21767\x2015.7829C3.67648\x2015.2462\x203.31569\x2014.6516\x203.1353\x2013.9991C2.9549\x2013.3465\x202.9549\x2012.6961\x203.1353\x2012.0478C3.31569\x2011.3996\x203.67434\x2010.8071\x204.21123\x2010.2705L6.02807\x208.46734C5.95505\x208.7464\x205.93573\x209.03833\x205.97009\x209.34315C6.00445\x209.64367\x206.07747\x209.92272\x206.18914\x2010.1803L5.20341\x2011.1656C4.84691\x2011.5219\x204.60853\x2011.9126\x204.48827\x2012.3376C4.3723\x2012.7626\x204.37444\x2013.1898\x204.49471\x2013.6191C4.61497\x2014.0485\x204.85335\x2014.4413\x205.20985\x2014.7976C5.56205\x2015.1539\x205.95291\x2015.3901\x206.38242\x2015.506C6.81193\x2015.6219\x207.2393\x2015.6197\x207.66452\x2015.4995C8.08974\x2015.3836\x208.4806\x2015.1496\x208.83709\x2014.7976L11.0018\x2012.6339C11.3583\x2012.2818\x2011.5946\x2011.8933\x2011.7105\x2011.4683C11.8265\x2011.0389\x2011.8244\x2010.6096\x2011.7041\x2010.1803C11.5881\x209.751\x2011.3519\x209.35817\x2010.9954\x209.00184C10.8064\x208.81723\x2010.5766\x208.66697\x2010.306\x208.55106C10.0354\x208.43085\x209.72189\x208.35143\x209.36539\x208.31279L10.4349\x207.23735ZM9.56512\x2012.7562C9.21721\x2012.6918\x208.9144\x2012.5931\x208.6567\x2012.46C8.40328\x2012.3226\x208.18853\x2012.1638\x208.01243\x2011.9834C7.47124\x2011.4425\x207.11045\x2010.8479\x206.93005\x2010.1996C6.74965\x209.54707\x206.74965\x208.89666\x206.93005\x208.24839C7.11045\x207.60012\x207.46909\x207.00767\x208.00598\x206.47102L10.2674\x204.21067C10.8043\x203.67403\x2011.397\x203.31555\x2012.0456\x203.13523C12.6941\x202.95492\x2013.3427\x202.95492\x2013.9913\x203.13523C14.6441\x203.31125\x2015.2433\x203.67188\x2015.7888\x204.21711C16.3257\x204.75805\x2016.6843\x205.3548\x2016.8647\x206.00736C17.0451\x206.65563\x2017.0451\x207.30389\x2016.8647\x207.95216C16.6843\x208.60043\x2016.3278\x209.19074\x2015.7952\x209.72309L13.9719\x2011.5327C14.0449\x2011.2536\x2014.0643\x2010.9638\x2014.0299\x2010.6633C13.9956\x2010.3585\x2013.9225\x2010.0773\x2013.8109\x209.81969L14.7966\x208.83441C15.1531\x208.48237\x2015.3893\x208.09384\x2015.5053\x207.66881C15.6213\x207.2395\x2015.6191\x206.81233\x2015.4988\x206.3873C15.3829\x205.95799\x2015.1466\x205.56516\x2014.7902\x205.20883C14.4337\x204.8525\x2014.0428\x204.61638\x2013.6176\x204.50046C13.1924\x204.38025\x2012.765\x204.38025\x2012.3355\x204.50046C11.9103\x204.61638\x2011.5194\x204.85035\x2011.1629\x205.20239L8.99816\x207.36615C8.64166\x207.72248\x208.40328\x208.11316\x208.28302\x208.53818C8.16705\x208.9632\x208.1692\x209.39037\x208.28946\x209.81969C8.40973\x2010.2447\x208.64811\x2010.6375\x209.0046\x2010.9982C9.19359\x2011.1828\x209.42338\x2011.3352\x209.69397\x2011.4554C9.96457\x2011.5713\x2010.2781\x2011.6464\x2010.6346\x2011.6808L9.56512\x2012.7562Z','fill':'currentColor'})));});