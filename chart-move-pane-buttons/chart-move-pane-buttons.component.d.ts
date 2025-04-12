/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Option } from 'fp-ts/Option';
import React from 'react';
import { PanesData } from '../../view-models/chart-pane.view-model';
export interface ChartMovePaneButtonsProps {
    readonly panesData: PanesData;
    readonly hoveredPane: Option<string>;
    readonly tradingOEEnabled: boolean;
    readonly movePaneUp: (uuid: string) => void;
    readonly movePaneDown: (uuid: string) => void;
}
export declare const ChartMovePaneButtons: React.NamedExoticComponent<ChartMovePaneButtonsProps>;
