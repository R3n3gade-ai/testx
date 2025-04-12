/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartType } from '../../../model/chart.model';
export interface DataMenuChartTypePopoverProps {
    readonly isOpened: boolean;
    readonly onClose: () => void;
    readonly value: ChartType;
    readonly seriesChartTypes: Readonly<Array<ChartType>>;
    readonly onChangeSeriesChartType: (value: ChartType) => void;
    readonly anchorRef: ReactRef;
}
export declare const DataMenuChartTypePopover: React.NamedExoticComponent<DataMenuChartTypePopoverProps>;
