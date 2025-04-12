/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import{constVoid}from'fp-ts/function';export const createMutex=()=>{const a={'locked':![],'unlock':constVoid,'current':Promise['resolve'](),'lock':()=>{if(a['locked'])return;a['current']=new Promise(b=>{a['unlock']=()=>{a['locked']=![],b();};}),a['locked']=!![];},'calculateSafe':async b=>{while(a['locked']){await a['current'];}a['lock']();const c=await b();return a['unlock'](),c;}};return a;};