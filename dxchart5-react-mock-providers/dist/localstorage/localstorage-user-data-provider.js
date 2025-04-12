/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const USER_DATA_LS_KEY = 'userData';
const USERDATA_EXPIRATION_DATE_LS_KEY = 'userDataExpirationDate';
const DEFAULT_EXPIRATION_PERIOD = Number.MAX_SAFE_INTEGER;
/**
 * Creates a {@link UserDataProvider} that stores {@link UserData} in {@link localStorage}.
 */
export const createLocalStorageUserDataProvider = (udLSKey = USER_DATA_LS_KEY, options) => {
    const getExpirationDateFromLS = () => {
        const expirationDateFromLS = localStorage.getItem(USERDATA_EXPIRATION_DATE_LS_KEY);
        if (!expirationDateFromLS) {
            return undefined;
        }
        return JSON.parse(expirationDateFromLS);
    };
    const setExpirationDateToLS = () => {
        var _a;
        localStorage.setItem(USERDATA_EXPIRATION_DATE_LS_KEY, JSON.stringify((_a = options === null || options === void 0 ? void 0 : options.expirationPeriod) !== null && _a !== void 0 ? _a : DEFAULT_EXPIRATION_PERIOD));
    };
    const getUserDataFromLS = () => {
        const userDataFromLS = localStorage.getItem(udLSKey);
        if (!userDataFromLS) {
            return undefined;
        }
        return JSON.parse(userDataFromLS);
    };
    const setUserDataToLS = (userData) => {
        localStorage.setItem(udLSKey, JSON.stringify(userData));
    };
    const clearUserDataFromLS = () => {
        localStorage.removeItem(udLSKey);
        localStorage.removeItem(USERDATA_EXPIRATION_DATE_LS_KEY);
    };
    /**
     * Check if the expiration date is set and if it's expired
     */
    const expirationDate = getExpirationDateFromLS();
    if (!expirationDate) {
        clearUserDataFromLS();
        setExpirationDateToLS();
    }
    else {
        if (Date.now() > expirationDate) {
            clearUserDataFromLS();
            setExpirationDateToLS();
        }
    }
    /**
     * This method `dxcharts-react` will call on init and some other lifecycle events
     * to get the stored {@link UserData}
     */
    const getUserData = () => {
        const userData = getUserDataFromLS();
        if (!userData) {
            console.warn('No user data created yet');
            return Promise.resolve(null);
        }
        return Promise.resolve(userData);
    };
    /**
     * When a user changes something in {@link UserData} this method is called by `dxcharts-react`
     * to notify that you should sync {@link UserData} state with external store
     */
    const setUserData = (newUserData) => {
        setUserDataToLS(newUserData);
        return Promise.resolve(void 0);
    };
    return {
        getUserData,
        setUserData,
    };
};
