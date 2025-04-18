/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { MultiChartViewModel } from '../view-models/multi-chart.view-model';
import { ChartDataViewModel } from '../view-models/data/chart-data.view-model';
import { ChartTypeViewModel } from '../view-models/chart-type.view-model';
import { ChartConfiguratorViewModel } from '../view-models/chart-configurator.view-model';
import { Localization } from '../../config/localization/localization';
import { AggregationPeriodViewModel } from '../view-models/aggregation-period.view-model';
import { MultiChartLayoutType } from '../model/multichart.model';
import { ChartReactConfig } from '../../config/chart-react-config';
export interface MultichartSettingsContainerProps {
    readonly onLayoutChange?: (layout: MultiChartLayoutType) => void;
    readonly closePopover: () => void;
}
export declare const MultichartSettingsContainer: import("../../context/context2").Context<Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"chartTypeViewModel", ChartTypeViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"localization", Localization> & Record<"chartReactConfig", ChartReactConfig>, import("react").FC<MultichartSettingsContainerProps>>;
