/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Bounds } from '@devexperts/dxcharts-lite/dist/chart/model/bounds.model';
import { Drawing } from '@dx-private/dxchart5-modules/dist/drawings/drawings.config';
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/drawing.model';
import { Option } from 'fp-ts/Option';
import { Lazy } from 'fp-ts/function';
import { Observable } from 'rxjs';
import { ChartReactConfig } from '../../../config/chart-react-config';
import { IconsPool, IconsPoolNames } from '../../../config/icons-pool';
import { Localization } from '../../../config/localization/localization';
import { Property } from '../../../utils/property.utils';
import { Sink } from '../../../utils/sink';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { DrawingGroup, DrawingType, DrawingsConfig } from '../../model/drawing.model';
import { InstrumentSymbol } from '../../model/layout.model';
import { ActionsHistoryVM } from '../actions/actions-history.vm';
import { MultiChartViewModel } from '../multi-chart.view-model';
import { NotificationViewModel } from '../notification.view-model';
import { Position, UserDataViewModel } from '../user-data.view-model';
import { MultichartDrawingSyncVM } from './drawing-sync.vm';
import { DataLoaderVM } from '../loading/data-loader.vm';
import { ChartDataViewModel } from '../data/chart-data.view-model';
export interface ChartDrawingViewModel {
    readonly isVisible: Observable<boolean>;
    readonly isDisabled: Property<boolean>;
    readonly changeVisibility: (isShown: boolean) => void;
    readonly isSettingsPopupOpened: Observable<boolean>;
    readonly toggleSettingsPopup: (isSettingsPopupOpened: boolean) => void;
    readonly isPopoverOpened: Observable<boolean>;
    readonly togglePopover: (opened: boolean) => void;
    readonly handleDrag: (props: ToolbarPosition) => void;
    readonly updateToolbarWidth: (width: number) => void;
    readonly toolbarPositionPixels: Property<ToolbarPosition>;
    readonly chartBounds: Property<Bounds>;
    readonly toolbarWidth: Property<number>;
    readonly favoriteDrawings: Property<Array<DrawingType>>;
    readonly onFavorite: (name: DrawingType) => void;
    readonly onUnFavorite: (name: DrawingType) => void;
    readonly currentEditableDrawing: Property<Option<DrawingModel<DrawingType>>>;
    readonly drawingGroups: Property<DrawingGroup[]>;
    readonly isDrawingsLimitReached: Observable<boolean>;
    readonly recentDrawings: Property<RecentDrawing[]>;
    readonly doesChartHaveDrawings: Observable<boolean>;
    readonly iconDrawingIcons: IconsPool;
    readonly availableDrawings: ReadonlyArray<DrawingType>;
    readonly drawingMode: Property<DrawingMode<DrawingType>>;
    readonly drawings: Property<Record<string, Drawing<DrawingType>[]>>;
    readonly changeMode: (mode: DrawingMode<DrawingType>) => void;
    readonly toggleDrawingVisibility: (drawing: DrawingModel<DrawingType>, visible: boolean) => void;
    readonly toggleDrawingLocked: (drawing: DrawingModel<DrawingType>, locked: boolean) => void;
    readonly setDrawings: (drawings: Record<string, Drawing<DrawingType>[]>) => void;
    readonly startNewDrawing: (type: DrawingType) => void;
    readonly startNewIconDrawing: (iconType: IconsPoolNames) => void;
    readonly cancelDrawing: () => void;
    readonly updateDrawing: (drawing: DrawingModel<DrawingType>) => void;
    readonly removeDrawing: (drawing: DrawingModel<DrawingType>) => void;
    readonly clearDrawings: () => void;
    readonly resetChanges: () => void;
    readonly sendMagnetModeNotification: (enabled: boolean) => void;
    readonly sendDrawingModeNotification: (enabled: boolean) => void;
    readonly sendDeleteDrawingsNotification: Lazy<void>;
}
export interface CreateChartDrawingViewModel {
    (initialDrawings: Record<InstrumentSymbol, Drawing<DrawingType>[]>, availableDrawings: ReadonlyArray<DrawingType>, config: DrawingsConfig<DrawingType>, chartId: string): Sink<ChartDrawingViewModel>;
}
export interface ToolbarPosition extends Position {
}
export type RecentDrawing = IconsPoolNames | DrawingType;
export declare const createDrawingViewModel: import("../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"iconsPool", Readonly<Record<string, import("../../../config/icons-pool").IconDefinition>>> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"notificationVM", NotificationViewModel> & Record<"localization", Localization> & Record<"userDataViewModel", UserDataViewModel> & Record<"actionsHistoryVM", ActionsHistoryVM> & Record<"initialDrawings", Record<string, Drawing<"ellipse" | "line" | "path" | "text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter" | "range_volume_by_price" | "anchored_volume_by_price">[]>> & Record<"availableDrawings", readonly ("ellipse" | "line" | "path" | "text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter" | "range_volume_by_price" | "anchored_volume_by_price")[]> & Record<"initialConfig", DrawingsConfig<"ellipse" | "line" | "path" | "text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter" | "range_volume_by_price" | "anchored_volume_by_price">> & Record<"chartId", string> & Record<"chartReactConfig", ChartReactConfig> & Record<"drawingSyncVM", MultichartDrawingSyncVM> & Record<"chartDataViewModel", ChartDataViewModel> & Record<"dataLoaderVM", DataLoaderVM>, Sink<ChartDrawingViewModel>>;
export interface EditDrawingMode<T extends DrawingType> {
    mode: 'EditDrawing';
    drawing: DrawingModel<T>;
}
export declare const editDrawingMode: <T extends "ellipse" | "line" | "path" | "text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter" | "range_volume_by_price" | "anchored_volume_by_price">(drawing: DrawingModel<T>) => EditDrawingMode<T>;
export declare const isEditDrawingMode: <T extends "ellipse" | "line" | "path" | "text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter" | "range_volume_by_price" | "anchored_volume_by_price">(mode: DrawingMode<T>) => mode is EditDrawingMode<T>;
export interface DefaultMode {
    mode: 'Default';
}
export declare const defaultMode: DefaultMode;
export declare const isDefaultMode: <T extends "ellipse" | "line" | "path" | "text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter" | "range_volume_by_price" | "anchored_volume_by_price">(mode: DrawingMode<T>) => mode is DefaultMode;
export type DrawingMode<T extends DrawingType> = EditDrawingMode<T> | DefaultMode;
export declare function copyDrawing<T extends DrawingType>(model: DrawingModel<T>): DrawingModel<T>;
