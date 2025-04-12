/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartReactConfig } from '../../../config/chart-react-config';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { AggregationPeriodViewModel } from '../../view-models/aggregation-period.view-model';
import { ChartConfiguratorViewModel } from '../../view-models/chart-configurator.view-model';
import { ChartDataViewModel } from '../../view-models/data/chart-data.view-model';
import { ChartLegendViewModel } from '../../view-models/chart-legend/chart-legend.view-model';
import { DxScriptEditViewModel } from '../../view-models/dx-script-edit.view-model';
import { InitialLoaderVM } from '../../view-models/loading/initial-loader.vm';
import { StudiesSettingsViewModel } from '../../view-models/studies/studies-settings.view-model';
import { OrderEntryViewModel, OrderQuantity } from '../../view-models/trading/order-entry.view-model';
import { TradingViewModel } from '../../view-models/trading/trading.view-model';
import { Localization } from '../../../config/localization/localization';
import { DataLoaderVM } from '../../view-models/loading/data-loader.vm';
import { ChartDrawingViewModel } from '../../view-models/drawings/drawing.view-model';
import { StudiesScalesViewModel } from '../../view-models/studies/studies-scales.view-model';
import { OrderEntryType } from '../../model/trading/order.model';
export interface ChartLegendContainerProps {
    readonly id: string;
}
export interface ChartLegendHeaderProps {
    readonly disabled: boolean;
    readonly quantity: OrderQuantity;
    readonly quantityPrecision: number;
    readonly quantityStep: number;
    readonly maxQuantity: number;
    readonly type: OrderEntryType;
    readonly onQuantityChange: (quantity: OrderQuantity) => void;
    readonly createOrder: TradingViewModel['createOrderFromOrderEntry'];
    readonly tradingDict: Localization['trading'];
}
export declare const ChartLegendContainer: import("../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"chartLegendVM", ChartLegendViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"themeViewModel", import("../../view-models/theme.view-model").ThemeViewModel> & Record<"chartTypeViewModel", import("../../view-models/chart-type.view-model").ChartTypeViewModel> & Record<"chartPaneViewModel", import("../../view-models/chart-pane.view-model").ChartPaneViewModel> & Record<"dataLoaderVM", DataLoaderVM> & Record<"compareChartViewModel", import("../../view-models/data/compare-chart.view-model").CompareChartViewModel> & Record<"tradingVM", TradingViewModel> & Record<"tradingCoreVM", import("../../view-models/trading/trading-core.view-model").TradingCoreViewModel> & Record<"dynamicObjectsVM", import("../../view-models/dynamic-objects.view-model").DynamicObjectsViewModel> & Record<"orderEntryVM", OrderEntryViewModel> & Record<"dxScriptEditViewModel", DxScriptEditViewModel> & Record<"localization", Localization> & Record<"studiesSettingsViewModel", StudiesSettingsViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"studiesScalesViewModel", StudiesScalesViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"colorPalette", string[]> & Record<"initialLoaderVM", InitialLoaderVM> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"drawingViewModel", ChartDrawingViewModel>, React.FC<ChartLegendContainerProps>>;
