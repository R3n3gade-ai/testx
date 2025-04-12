/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
interface IndicatorItemDraggableContentStyledProps {
    readonly isDragging?: boolean;
    readonly allowTransform?: boolean;
    readonly tabIndex?: number;
    readonly testId?: string;
}
export declare const IndicatorItemDraggableContentStyled: import("styled-components").StyledComponent<"li", any, IndicatorItemDraggableContentStyledProps, never>;
export {};
