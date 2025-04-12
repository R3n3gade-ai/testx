/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartDataProvider, ServiceData } from '../../providers/chart-data-provider';
import { Observable } from 'rxjs';
export interface UtilityDataService {
    readonly subscribeServiceData: (chartId: string, symbol: string) => Observable<ServiceData>;
    readonly unsubscribeServiceData: (chartId: string, symbol: string) => void;
}
export declare const createUtilityDataService: import("../../context/context2").Context<Record<"chartDataProvider", ChartDataProvider>, UtilityDataService>;
