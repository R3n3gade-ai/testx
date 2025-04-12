/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ToolbarDictionary } from '../../../config/localization/toolbar';
import { MultiChartLayoutType } from '../../model/multichart.model';
export interface MultichartSettingsProps {
    readonly selectedLayout: MultiChartLayoutType;
    readonly layouts: MultiChartLayoutType[];
    readonly setLayout: (layout: MultiChartLayoutType) => void;
    readonly isInstrumentSyncEnabled: boolean;
    readonly isChartTypeSyncEnabled: boolean;
    readonly isAggregationPeriodTypeSyncEnabled: boolean;
    readonly isAppearanceSyncEnabled: boolean;
    readonly isStudiesSyncEnabled: boolean;
    readonly isCrosshairSyncEnabled: boolean;
    readonly setInstrumentSync: (value: boolean) => void;
    readonly setChartTypeSync: (value: boolean) => void;
    readonly setAggregationPeriodTypeSync: (value: boolean) => void;
    readonly setAppearanceSync: (value: boolean) => void;
    readonly setStudiesSync: (value: boolean) => void;
    readonly setCrosshairSync: (value: boolean) => void;
    readonly className?: string;
    readonly closePopover: () => void;
    readonly localization: ToolbarDictionary;
}
export declare const MultichartSettings: React.FC<MultichartSettingsProps>;
export default MultichartSettings;
