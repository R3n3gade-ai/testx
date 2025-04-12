/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartType } from '../../model/chart.model';
export interface DataMenuChartTypeItemProps {
    readonly value: ChartType;
    readonly chartTypes: Readonly<Array<ChartType>>;
    readonly onChangeType: (type: ChartType) => void;
    readonly onPopoverClose: () => void;
}
export declare const DataMenuChartTypeItem: React.NamedExoticComponent<DataMenuChartTypeItemProps>;
