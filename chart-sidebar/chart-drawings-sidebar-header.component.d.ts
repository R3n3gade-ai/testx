/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
export interface DrawingsSidebarHeaderProps {
    readonly expanded: boolean;
    readonly onToggleExpanded: (expanded: boolean) => void;
    readonly disabled: boolean;
}
export declare const DrawingsSidebarHeader: React.NamedExoticComponent<DrawingsSidebarHeaderProps>;
