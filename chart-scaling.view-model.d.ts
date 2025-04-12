/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Sink } from '../../context/sink2';
import { ChartConfiguratorViewModel } from './chart-configurator.view-model';
import { ChartDrawingViewModel } from './drawings/drawing.view-model';
import { Property } from '../../utils/property.utils';
import { ChartWithModules } from '../components/canvas-chart-renderer/chart-with-modules';
import { AggregationPeriodViewModel } from './aggregation-period.view-model';
export interface ChartScalingViewModel {
    readonly isZoomOutBtnEnabled: Property<boolean>;
    readonly zoomIn: () => void;
    readonly zoomOut: () => void;
}
export declare const createChartScalingViewModel: import("../../context/context2").Context<Record<"drawingViewModel", ChartDrawingViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel> & Record<"chart", ChartWithModules>, Sink<ChartScalingViewModel>>;
