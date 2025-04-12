/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { PriceType } from '../../../../providers/chart-data-provider';
export interface DataMenuPriceTypePopoverProps {
    readonly isOpened: boolean;
    readonly onClose: () => void;
    readonly value: PriceType;
    readonly priceTypes: PriceType[];
    readonly onChangePriceType: (value: PriceType) => void;
    readonly anchorRef: ReactRef;
}
export declare const DataMenuPriceTypePopover: React.NamedExoticComponent<DataMenuPriceTypePopoverProps>;
