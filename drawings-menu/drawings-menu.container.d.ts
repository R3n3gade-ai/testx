/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export declare const DrawingsMenuContainer: import("../../../context/context2").Context<Record<"chart", import("../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"drawingViewModel", import("../../view-models/drawings/drawing.view-model").ChartDrawingViewModel> & Record<"dynamicObjectsVM", import("../../view-models/dynamic-objects.view-model").DynamicObjectsViewModel>, () => import("react").FunctionComponentElement<{
    children?: import("react").ReactNode;
}> | import("react").FunctionComponentElement<import("../../components/drawings/drawings-menu/drawings-menu.component").DrawingsMenuProps>>;
