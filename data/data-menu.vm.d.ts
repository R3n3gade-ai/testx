/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Property } from '../../../utils/property.utils';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { Option } from 'fp-ts/Option';
import { ChartType } from '../../model/chart.model';
import { ChartTypeViewModel } from '../chart-type.view-model';
import { CompareChartViewModel } from './compare-chart.view-model';
import { TradingViewModel } from '../trading/trading.view-model';
import { TradingCoreViewModel } from '../trading/trading-core.view-model';
import { ChartConfiguratorViewModel } from '../chart-configurator.view-model';
import { DynamicObjectsViewModel } from '../dynamic-objects.view-model';
import { OrderEntryViewModel, OrderQuantity } from '../trading/order-entry.view-model';
import { OrderData } from '../../model/trading/order.model';
import { PriceType } from '../../../providers/chart-data-provider';
import { ReorderType } from '../../components/right-click-menu/right-click-menu-reorder-btns.component';
import { ThemeViewModel } from '../theme.view-model';
import { RCMenuState } from '../../../chart-kit/Popover/popover-menu-generic';
export declare const COMPARE_SERIES_CHART_TYPES: ChartType[];
export declare const MAIN_SERIES_COLOR_SETTINGS_CHART_TYPES: ChartType[];
export interface DataMenuViewModel {
    readonly menuState: Property<RCMenuState>;
    readonly closeMenu: () => void;
    readonly selectedSeries: Property<Option<DataMenuSelectedSeriesType>>;
    readonly changeSelectedSeries: (id: string, seriesType: SelectedSeriesType) => void;
    readonly changeSelectedSeriesChartType: (type: ChartType) => void;
    readonly changeSelectedSeriesPriceType: (type: PriceType) => void;
    readonly changeSelectedSeriesColor: (color: string) => void;
    readonly reorderSeries: (reorderType: ReorderType) => void;
    readonly createOrder: (data: OrderData) => void;
}
type SelectedSeriesType = 'main' | 'compare';
export type DataMenuSelectedSeriesType = MainDataMenuSelectedSeries | CompareDataMenuSelectedSeries;
export interface DataMenuSelectedSeries {
    readonly id: string;
    readonly type: SelectedSeriesType;
    readonly symbol: string;
    readonly chartType: ChartType;
}
export interface MainSeriesTradingData {
    readonly candlePrice: string;
    readonly marketPrice: string;
    readonly bidPrice: string;
    readonly askPrice: string;
    readonly quantity: OrderQuantity;
}
export interface MainDataMenuSelectedSeries extends DataMenuSelectedSeries {
    readonly type: 'main';
    readonly trading: MainSeriesTradingData;
    readonly priceType: PriceType;
    readonly color?: string;
}
export interface CompareDataMenuSelectedSeries extends DataMenuSelectedSeries {
    readonly type: 'compare';
    readonly color: string;
}
export declare const createDataMenuViewModel: import("../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"chartTypeViewModel", ChartTypeViewModel> & Record<"compareChartViewModel", CompareChartViewModel> & Record<"tradingVM", TradingViewModel> & Record<"tradingCoreVM", TradingCoreViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"dynamicObjectsVM", DynamicObjectsViewModel> & Record<"orderEntryVM", OrderEntryViewModel> & Record<"themeViewModel", ThemeViewModel>, import("../../../utils/adt/sink.utils").Sink1<"Observable", DataMenuViewModel>>;
export {};
