/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { TimeZone } from '../../../utils/timezones/timezone.model';
export interface TimeZoneDropdownListItemProps {
    readonly isActiveTimeZone: boolean;
    readonly timezone: TimeZone;
    readonly onSelect: (value: string | number) => void;
}
export declare const TimeZoneDropdownListItem: React.NamedExoticComponent<TimeZoneDropdownListItemProps>;
