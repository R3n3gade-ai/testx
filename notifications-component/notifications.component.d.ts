/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartNotification } from '../../view-models/notification.view-model';
import { Option } from 'fp-ts/Option';
import { Point } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
export interface NotificationProps {
    readonly notification: ChartNotification;
    readonly position: Point;
    readonly hideNotification: () => void;
    readonly isSidebarExpanded: boolean;
}
export type NotificationsComponentProps = Omit<NotificationProps, 'notification' | 'position'> & {
    readonly notification: Option<ChartNotification>;
};
export declare const NotificationsComponent: React.NamedExoticComponent<NotificationsComponentProps>;
export default NotificationsComponent;
