/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartReactConfig } from '../../../config/chart-react-config';
import { Property } from '../../../utils/property.utils';
import { Sink } from '../../../utils/sink';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { OrderEntryType } from '../../model/trading/order.model';
import { ChartConfiguratorViewModel } from '../chart-configurator.view-model';
import { ChartDataViewModel } from '../data/chart-data.view-model';
import { TradingCoreViewModel } from './trading-core.view-model';
import { DataLoaderVM } from '../loading/data-loader.vm';
import { ThemeViewModel } from '../theme.view-model';
import { YAxisAlign } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
export type OrderQuantity = number | undefined;
export interface OrderEntryState {
    visible: boolean;
    opened: boolean;
    disabled: boolean;
    quantity: OrderQuantity;
    quantityPrecision: number;
    quantityStep: number;
    maxQuantity: number;
    type: OrderEntryType;
}
export interface OrderEntryViewModel {
    readonly orderEntryEnabled: Property<boolean>;
    readonly orderEntry: Property<OrderEntryState>;
    readonly orderEntryPrice: Property<number>;
    readonly orderEntryYPosition: Property<number>;
    readonly orderEntryRightOffset: Property<number>;
    readonly yAxisAlign: Property<YAxisAlign>;
    readonly setOrderEntryOpened: (opened: boolean) => void;
    readonly setOrderQuantity: (quantity: OrderQuantity) => void;
    readonly setOrderType: (type: OrderEntryType) => void;
    readonly setTradingQuantityPrecision: (precision: number) => void;
    readonly setTradingQuantityStep: (step: number) => void;
    readonly resetOrderEntryToDefault: () => void;
}
export declare const ORDER_ENTRY_HEIGHT = 24;
export declare const createOrderEntryViewModel: import("../../../context/context2").Context<Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"chart", ChartWithModules> & Record<"chartReactConfig", ChartReactConfig> & Record<"tradingCoreViewModel", TradingCoreViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"dataLoaderVM", DataLoaderVM> & Record<"themeViewModel", ThemeViewModel>, Sink<OrderEntryViewModel>>;
