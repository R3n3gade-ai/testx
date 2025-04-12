/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Sink } from '../../context/sink2';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { Property } from '../../utils/property.utils';
import { PriceAxisType } from '@devexperts/dxcharts-lite/dist/chart/components/labels_generator/numeric-axis-labels.generator';
export interface YAxisTypeControlsViewModel {
    readonly yAxisPriceType: Property<PriceAxisType>;
    readonly togglePercentAxis: () => void;
    readonly toggleLogAxis: () => void;
}
export declare const createYAxisTypeControlsViewModel: import("../../context/context2").Context<Record<"chart", ChartWithModules>, Sink<YAxisTypeControlsViewModel>>;
