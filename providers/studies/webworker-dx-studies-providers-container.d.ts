/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export class dxStudiesProvidersContainer {
    initProvider(chartModel: any, tradingSessionsProvider: any, tradingHoursProvider: any, historyDataCallback: any, updateDataCallback: any): DxStudiesDataProvider & import("comlink").ProxyMarked;
}
import { DxStudiesDataProvider } from "./webworker-studies-data-provider";
