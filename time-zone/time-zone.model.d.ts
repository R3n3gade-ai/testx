/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { TimeZone } from '@devexperts/dxcharts-lite/dist/chart/model/time-zone.model';
export declare const reformatUTC: (utc: string) => string;
export declare const reformatTimeZoneName: (name: string) => string;
export declare const sortTimezones: (timezones: TimeZone[]) => TimeZone[];
