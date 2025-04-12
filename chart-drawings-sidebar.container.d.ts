/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
import { ChartReactConfig } from '../../config/chart-react-config';
import { ChartDrawingViewModel } from '../view-models/drawings/drawing.view-model';
import { MultiChartViewModel } from '../view-models/multi-chart.view-model';
import { UserDataViewModel } from '../view-models/user-data.view-model';
import { MultichartDrawingSyncVM } from '../view-models/drawings/drawing-sync.vm';
export declare const DrawingsSidebarContainer: import("../../context/context2").Context<Record<"drawingViewModel", ChartDrawingViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"userDataViewModel", UserDataViewModel> & Record<"drawingSyncVM", MultichartDrawingSyncVM> & Record<"chartReactConfig", ChartReactConfig>, import("react").MemoExoticComponent<() => import("react").FunctionComponentElement<{
    children?: import("react").ReactNode;
}>> | import("react").FunctionComponent<Record<string, any>>>;
