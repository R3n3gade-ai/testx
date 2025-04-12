/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartType } from '../chart/model/chart.model';
import { MultiChartLayoutType } from '../chart/model/multichart.model';
import { IndicatorType } from '../chart/model/studies.model';
import { ValuesOfObject } from '../utils/object.utils';
export declare const ANALYTICS_EVENTS: {
    readonly first_time_visit: "first_time_visit";
    readonly add_favorite_drawing: "add_favorite_drawing";
    readonly change_multichart_layout: "change_multichart_layout";
    readonly add_drawing: "add_drawing";
    readonly add_indicator: "add_indicator";
    readonly change_indicator_overlay: "change_indicator_overlay";
    readonly create_custom_indicator: "create_custom_indicator";
    readonly change_aggregation_period: "change_aggregation_period";
    readonly change_chart_type: "change_chart_type";
    readonly change_instrument: "change_instrument";
    readonly add_order: "add_order";
    readonly add_compare_instrument: "add_compare_instrument";
    readonly change_timeframe_preset: "change_timeframe_preset";
    readonly select_snapshot_menu_item: "select_snapshot_menu_item";
};
interface AnalyticsEventToPayload {
    first_time_visit: undefined;
    add_favorite_drawing: {
        add_favorite_drawing__drawing_name: string;
    };
    change_multichart_layout: {
        change_multichart_layout__chart_layout: MultiChartLayoutType;
        change_multichart_layout__sync_state: string;
    };
    add_drawing: {
        add_drawing__drawing_id: string;
        add_drawing__drawing_name: string;
        add_drawing__drawing_is_synced: boolean;
    };
    add_indicator: {
        add_indicator__drawing_id: string;
        add_indicator__drawing_name: string;
        add_indicator__drawing_type: IndicatorType;
        add_indicator__drawing_is_synced: boolean;
    };
    change_indicator_overlay: {
        change_indicator_overlay__indicator_id: string;
        change_indicator_overlay__indicator_name: string;
        change_indicator_overlay__indicator_is_overlay: boolean;
    };
    create_custom_indicator: {
        create_custom_indicator__indicator_id: string;
        create_custom_indicator__indicator_name: string;
        create_custom_indicator__indicator_script: string;
    };
    change_aggregation_period: {
        change_aggregation_period__aggregation: string;
    };
    change_chart_type: {
        change_chart_type__chart_type: ChartType;
    };
    change_instrument: {
        change_instrument__instrument: string;
    };
    add_order: {
        add_order__order_id: string;
        add_order__order_order_type: string;
        add_order__order_type: string;
        add_order__order_quantity: number;
        add_order__order_side: string;
    };
    add_compare_instrument: {
        add_compare_instrument__main_instrument: string;
        add_compare_instrument__compare_instrument: string;
    };
    change_timeframe_preset: {
        change_timeframe_preset__timeframe_type: string;
        change_timeframe_preset__timeframe_is_custom: boolean;
        change_timeframe_preset__timeframe_aggregation: string;
        change_timeframe_preset__timeframe_date_range: string;
    };
    select_snapshot_menu_item: {
        select_snapshot_menu_item__item_type: string;
    };
}
export interface AnalyticsEventCommonPayload {
    userId?: string;
}
export type AnalyticsEvent<Events extends ValuesOfObject<typeof ANALYTICS_EVENTS> = ValuesOfObject<typeof ANALYTICS_EVENTS>> = {
    [K in Events]: {
        name: K;
        payload?: AnalyticsEventToPayload[K] extends undefined ? AnalyticsEventCommonPayload : AnalyticsEventToPayload[K] & AnalyticsEventCommonPayload;
    };
}[Events];
export type AnalyticsEventName = AnalyticsEvent['name'];
export {};
