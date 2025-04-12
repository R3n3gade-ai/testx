/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const GroupOrderFakeOrder: import("styled-components").StyledComponent<"div", any, import("./components/order.styled").OrderContainerInnerStyledProps, never>;
export declare const GroupOrderFakeOrder2nd: import("styled-components").StyledComponent<"div", any, import("./components/order.styled").OrderContainerInnerStyledProps, never>;
export interface GroupOrderContainerProps {
    readonly y: number;
    readonly opened: boolean;
    readonly disabled: boolean | undefined;
}
export declare const GroupOrderContainer: import("styled-components").StyledComponent<"div", any, GroupOrderContainerProps, never>;
export declare const GroupOrderGroupContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DraggableInner: import("styled-components").StyledComponent<"div", any, {
    disabled: boolean | undefined;
}, never>;
