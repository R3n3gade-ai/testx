/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { replaceInArray } from '@devexperts/dxcharts-lite/dist/chart/utils/array.utils';
import { DEFAULT_THEME } from '@dx-private/dxchart5-react/dist/chart/defaults';
const LAYOUTS_LS_KEY = 'layouts';
const LAYOUTS_EXPIRATION_DATE_LS_KEY = 'layoutsExpirationDate';
const DEFAULT_EXPIRATION_PERIOD = Number.MAX_SAFE_INTEGER;
/**
 * Creates a {@link LayoutProvider} that stores {@link ChartLayoutData} in {@link localStorage}.
 */
export const createLocalStorageLayoutProvider = (storageKey = LAYOUTS_LS_KEY, options) => {
    const getLayoutExpirationDateFromLS = () => {
        const expirationDate = localStorage.getItem(LAYOUTS_EXPIRATION_DATE_LS_KEY);
        if (!expirationDate) {
            return undefined;
        }
        return JSON.parse(expirationDate);
    };
    const setLayoutExpirationDateToLS = () => {
        var _a;
        return localStorage.setItem(LAYOUTS_EXPIRATION_DATE_LS_KEY, JSON.stringify((_a = options === null || options === void 0 ? void 0 : options.expirationPeriod) !== null && _a !== void 0 ? _a : DEFAULT_EXPIRATION_PERIOD));
    };
    const getLayoutFromLS = () => {
        const layoutData = localStorage.getItem(storageKey);
        if (!layoutData) {
            return undefined;
        }
        return JSON.parse(layoutData);
    };
    const setLayoutToLS = (layoutData) => {
        localStorage.setItem(storageKey, JSON.stringify(layoutData));
    };
    const generateRandomUUID = () => Math.random().toString(36).substring(2, 11);
    /**
     * Check if the layouts are expired
     */
    const expirationDate = getLayoutExpirationDateFromLS();
    if (expirationDate) {
        if (Date.now() > expirationDate) {
            localStorage.removeItem(storageKey);
            setLayoutExpirationDateToLS();
        }
    }
    else {
        setLayoutExpirationDateToLS();
    }
    /**
     * user can create new layouts for convenience
     * and this way `dxcharts-react` notifies about new layouts created
     * NOTE: if user runs an app for the first time dxchart will create a default layout
     * and call this method with a default layout provided
     */
    const createLayout = (layout) => {
        const id = generateRandomUUID();
        console.log(`Creating new layout: ${id}`);
        const layoutWithId = Object.assign({ id }, layout);
        const layoutData = getLayoutFromLS();
        if (!layoutData) {
            const lastUpdateTimeStamp = Date.now();
            const newLayoutData = {
                selectedLayoutId: id,
                layouts: [Object.assign(Object.assign({}, layoutWithId), { lastUpdateTimeStamp })],
                theme: DEFAULT_THEME,
            };
            localStorage.setItem(storageKey, JSON.stringify(newLayoutData));
        }
        else {
            const lastUpdateTimeStamp = Date.now();
            layoutData.layouts.push(Object.assign(Object.assign({}, layoutWithId), { lastUpdateTimeStamp }));
            localStorage.setItem(storageKey, JSON.stringify(layoutData));
        }
        return Promise.resolve(id);
    };
    /**
     * With this method `dxcharts-react` recieves array of layouts from your storage
     */
    const getLayouts = () => {
        const layoutData = getLayoutFromLS();
        if (!layoutData) {
            console.warn('No layouts created yet');
            return Promise.reject();
        }
        return Promise.resolve(layoutData);
    };
    /**
     * this way `dxcharts-react` notifies that user made some changes to layout
     * and you should sync its state with your storage
     */
    const updateLayout = (layout) => {
        const layoutData = getLayoutFromLS();
        if (!layoutData) {
            return Promise.reject(new Error(`There is no localstorage item ${storageKey}`));
        }
        layoutData.layouts = replaceInArray(layoutData.layouts, (item) => item.id === layout.id, layout);
        setLayoutToLS(layoutData);
        return Promise.resolve();
    };
    /**
     * when the user deletes already created layout
     * `dxcharts-react` will call this method
     */
    const deleteLayout = (id) => {
        const layoutsData = getLayoutFromLS();
        if (!layoutsData) {
            return Promise.resolve(void 0);
        }
        layoutsData.layouts = layoutsData.layouts.filter(layout => layout.id !== id);
        setLayoutToLS(layoutsData);
        return Promise.resolve(void 0);
    };
    /**
     * when the user switches layout we should update the data about
     * the layout that is currently selected
     * so when the user reloads the page we can show him
     * the layout he've seen before
     */
    const updateSelectedLayout = (id) => {
        const layoutsData = getLayoutFromLS();
        if (!layoutsData) {
            return Promise.resolve(void 0);
        }
        layoutsData.selectedLayoutId = id;
        setLayoutToLS(layoutsData);
        return Promise.resolve(void 0);
    };
    const updateLayoutData = (newLayoutData) => {
        setLayoutToLS(newLayoutData);
        return Promise.resolve();
    };
    return {
        createLayout,
        getLayouts,
        updateLayout,
        deleteLayout,
        updateSelectedLayout,
        updateLayoutData,
    };
};
