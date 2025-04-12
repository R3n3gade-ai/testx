/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import{autoDetectPeriod}from'@devexperts/dxcharts-lite/dist/chart/utils/auto-period-detector.utils';export const SESSIONS_TAKE_THRESHOLD_DAYS=0xe;export const alignSessionsToCandles=(a,b,c=0x0)=>{const d=autoDetectPeriod(b)??c,e=(f,g,h)=>{let j=0x0,k=f['length']-0x1;while(j<=k){const l=Math['floor']((j+k)/0x2),m=f[l]['timestamp']+h;if(m>g['from']&&m<g['to']){let n=l;while(f[n-0x1]&&f[n-0x1]['timestamp']+h>g['from']){n--;}if(f[n]['timestamp']<g['from'])return f[n]['timestamp'];}m<g['from']?j=l+0x1:k=l-0x1;}return null;};return a['map'](f=>{const g=e(b,f,d);if(g)return{...f,'from':g};return f;});};export const isTimestampInSession=(a,b)=>b['from']<=a&&a<b['to'];