/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export declare const tradingDictionary: {
    orderEntry: {
        buyMarketBtn: string;
        sellMarketBtn: string;
        buyStopBtn: string;
        sellStopBtn: string;
        buyLimitBtn: string;
        sellLimitBtn: string;
        buyBtn: string;
        sellBtn: string;
    };
    executedOrders: {
        bubbles: string;
        labels: string;
        buttons: {
            a11y_orderMode: string;
        };
    };
};
export type TradingDictionary = typeof tradingDictionary;
