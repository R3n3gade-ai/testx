/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const OrderContainerStyled: import("styled-components").StyledComponent<"div", any, {
    disabled: boolean;
}, never>;
export interface OrderContainerInnerStyledProps {
    readonly selected: boolean;
    readonly disabled: boolean;
}
export declare const OrderContainerInnerStyled: import("styled-components").StyledComponent<"div", any, OrderContainerInnerStyledProps, never>;
export interface OrderDelimiterStyledProps {
    readonly margin: 'left' | 'right' | 'both';
}
export declare const OrderDelimiterStyled: import("styled-components").StyledComponent<"div", any, OrderDelimiterStyledProps, never>;
export declare const OrderSectionStyled: import("styled-components").StyledComponent<"div", any, {}, never>;
