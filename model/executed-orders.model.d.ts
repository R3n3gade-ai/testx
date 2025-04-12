/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export interface ExecutedOrder {
    id: string;
    timestamp: number;
    price: number;
    side: 'buy' | 'sell';
    quantity: number;
}
export type ExecutedOrdersDisplayMode = 'bubbles' | 'labels';
