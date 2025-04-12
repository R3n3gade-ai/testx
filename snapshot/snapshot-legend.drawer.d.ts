/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartLegendViewModel } from '../chart-legend/chart-legend.view-model';
import { Localization } from '../../../config/localization/localization';
import { ThemeViewModel } from '../theme.view-model';
import { ChartAppPalette } from '../../../config/theme/chart-palette';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { AggregationPeriodViewModel } from '../aggregation-period.view-model';
/**
 * @doc-tags snapshot
 * @arch-tangle-ignore
 */
export declare const drawLegendOnCanvas: import("../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"chartLegendVM", ChartLegendViewModel> & Record<"localization", Localization> & Record<"palette", ChartAppPalette> & Record<"themeViewModel", ThemeViewModel> & Record<"aggregationPeriodViewModel", AggregationPeriodViewModel>, (ctx: CanvasRenderingContext2D) => void>;
