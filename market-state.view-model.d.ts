/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Property } from '../../utils/property.utils';
import { Sink } from '../../context/sink2';
import { ChartDataViewModel } from './data/chart-data.view-model';
import { MarketState } from '../model/market-state.model';
import { ChartSessionsViewModel } from './chart-sessions.view-model';
import { Localization } from '../../config/localization/localization';
export interface MarketStateViewModel {
    readonly marketState: Property<MarketState>;
}
export declare const createMarketStateViewModel: import("../../context/context2").Context<Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartSessionsViewModel", ChartSessionsViewModel> & Record<"localization", Localization>, Sink<MarketStateViewModel>>;
