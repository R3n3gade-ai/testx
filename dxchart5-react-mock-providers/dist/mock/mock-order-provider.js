/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export const createMockOrderProvider = () => {
    return {
        createOrder() {
            return Promise.resolve('');
        },
        createOcoOrders() {
            return Promise.resolve(['', '']);
        },
        deleteOrder() {
            return Promise.resolve();
        },
        observeExecutedOrders() { },
        observeOrders() { },
        updateOrder() {
            return Promise.resolve();
        },
    };
};
