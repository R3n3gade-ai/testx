/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { TimeZone } from '@devexperts/dxcharts-lite/dist/chart/model/time-zone.model';
export interface TimeZoneDropdownProps {
    readonly value: string;
    readonly currentExchange: string;
    readonly timeZones: Array<TimeZone>;
    readonly filteredTimeZones: Array<TimeZone>;
    readonly onSelect: (timeZone: string) => void;
    readonly onSearchTimezone: (value: string) => void;
}
export declare const TimeZoneDropdown: React.FC<TimeZoneDropdownProps>;
export default TimeZoneDropdown;
