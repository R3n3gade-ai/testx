/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingsConfig, DrawingType } from '../chart/model/drawing.model';
import { ChartPalette } from './chart-palette';
export declare const getDefaultDrawingsConfig: (chartPalette: ChartPalette) => DrawingsConfig<DrawingType>;
export declare const DEFAULT_DRAWINGS_CONFIG: DrawingsConfig<"ellipse" | "line" | "path" | "text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter" | "range_volume_by_price" | "anchored_volume_by_price">;
