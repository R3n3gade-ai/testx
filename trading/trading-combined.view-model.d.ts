/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { OrderEntryViewModel } from './order-entry.view-model';
import { TradingCoreViewModel } from './trading-core.view-model';
import { TradingViewModel } from './trading.view-model';
import { Sink } from '../../../context/sink2';
import { ExecutedOrdersViewModel } from './executed-orders.view-model';
export interface TradingCombinedViewModel {
    tradingCoreVMSink: Sink<TradingCoreViewModel>;
    orderEntryVMSink: Sink<OrderEntryViewModel>;
    tradingVMSink: Sink<TradingViewModel>;
    executedOrdersVMSink: Sink<ExecutedOrdersViewModel>;
}
export declare const createTradingCombinedViewModel: import("../../../context/context2").Context<Record<"chartConfiguratorViewModel", import("../chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chartDataViewModel", import("../data/chart-data.view-model").ChartDataViewModel> & Record<"chart", import("../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Omit<Record<"chartConfiguratorViewModel", import("../chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chart", import("../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"chartReactConfig", import("../../../config/chart-react-config").ChartReactConfig> & Record<"tradingCoreViewModel", TradingCoreViewModel> & Record<"chartDataViewModel", import("../data/chart-data.view-model").ChartDataViewModel> & Record<"dataLoaderVM", import("../loading/data-loader.vm").DataLoaderVM> & Record<"themeViewModel", import("../theme.view-model").ThemeViewModel>, "tradingCoreViewModel"> & Omit<Record<"chart", import("../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"orderProvider", import("../../../providers/trading/order.provider").OrderProvider> & Record<"positionProvider", import("../../../providers/trading/position.provider").PositionProvider> & Record<"chartDataViewModel", import("../data/chart-data.view-model").ChartDataViewModel> & Record<"chartReactConfig", import("../../../config/chart-react-config").ChartReactConfig> & Record<"multiChartViewModel", import("../multi-chart.view-model").MultiChartViewModel> & Record<"orderEntryViewModel", OrderEntryViewModel> & Record<"tradingCoreViewModel", TradingCoreViewModel> & Record<"yAxisConfiguratorViewModel", import("../y-axis/y-axis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"chartConfiguratorViewModel", import("../chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chartId", string>, "tradingCoreViewModel" | "orderEntryViewModel"> & Record<"orderProvider", import("../../../providers/trading/order.provider").OrderProvider>, TradingCombinedViewModel>;
