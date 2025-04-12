/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartReactSettings } from '../../../model/chart.model';
import { VisualTradingItem } from '../../../model/trading/trading-group.model';
export interface GroupOrderProps {
    readonly tradingItems: VisualTradingItem[];
    readonly onSelect?: (id: string) => void;
    readonly onDblClick?: (id: string) => void;
    readonly onClick?: (id: string) => void;
    readonly onGroupOpen?: () => void;
    readonly removeOrder: (id: string) => void;
    readonly removePosition: (id: string) => void;
    readonly onDragStart: (id: string) => void;
    readonly y: number;
    readonly showPriceAsLabels?: boolean;
    readonly horizontalLineWidth: number;
    readonly halfOrderHeight: number;
    readonly isDragging: boolean;
    readonly tradingSettings: ChartReactSettings['trading'];
    readonly editableItemsPresented: boolean;
    readonly currency: string;
}
export declare const GroupOrder: React.NamedExoticComponent<GroupOrderProps>;
