/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/// <reference types="react" />
export interface TimeZoneMenuItemUTCDiffStyledProps {
    isActive: boolean;
}
export declare const TimeZoneContainerStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const AdaptivePopoverStyled: import("styled-components").StyledComponent<import("react").FC<import("react").PropsWithChildren<import("../../../chart-kit/Popover/Popover.component").CKPopoverProps>>, any, {}, never>;
export declare const TimeZoneMenuItemStyled: import("styled-components").StyledComponent<import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("../../../chart-kit/Menu/MenuItem.component").CKMenuItemProps & import("react").RefAttributes<HTMLLIElement>>>, any, {}, never>;
export declare const TimeZoneMenuItemUTCDiffStyled: import("styled-components").StyledComponent<"span", any, TimeZoneMenuItemUTCDiffStyledProps, never>;
export interface TimezonesVirtualItemsContainerProps {
    readonly height: number;
}
export declare const TimezonesVirtualItemsContainer: import("styled-components").StyledComponent<"div", any, TimezonesVirtualItemsContainerProps, never>;
export interface TimezonesVirtualItemsWrapperProps {
    readonly offset: number;
}
export declare const TimezonesVirtualItemsWrapper: import("styled-components").StyledComponent<"div", any, TimezonesVirtualItemsWrapperProps, never>;
