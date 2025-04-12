/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import{expose,proxy}from'comlink';import{DxStudiesDataProvider}from'./webworker-studies-data-provider';export class dxStudiesProvidersContainer{['initProvider'](a,b,c,d,e){const f=new DxStudiesDataProvider(a,b,c,d,e);return proxy(f);}}expose(dxStudiesProvidersContainer);