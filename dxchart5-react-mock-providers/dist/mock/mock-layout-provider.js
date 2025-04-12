/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { replaceInArray } from '@devexperts/dxcharts-lite/dist/chart/utils/array.utils';
import { DEFAULT_THEME } from '@dx-private/dxchart5-react/dist/chart/defaults';
/**
 * Creates mock implementation of {@link LayoutProvider}.
 */
export const createMockLayoutProvider = () => {
    let layoutData = {
        selectedLayoutId: '0',
        layouts: [],
        theme: DEFAULT_THEME,
    };
    const setLayoutData = (data) => {
        layoutData = data;
    };
    const generateRandomUUID = () => Math.random().toString(36).substring(2, 9);
    return {
        createLayout(layout) {
            const id = generateRandomUUID();
            const layoutWithId = Object.assign({ id }, layout);
            const lastUpdateTimeStamp = Date.now();
            const newLayoutData = {
                selectedLayoutId: id,
                layouts: [...layoutData.layouts, Object.assign(Object.assign({}, layoutWithId), { lastUpdateTimeStamp })],
                theme: DEFAULT_THEME,
            };
            setLayoutData(newLayoutData);
            return Promise.resolve(id);
        },
        getLayouts() {
            return Promise.resolve(layoutData);
        },
        updateLayout(layout) {
            const _layoutData = layoutData;
            _layoutData.layouts = replaceInArray(_layoutData.layouts, (item) => item.id === layout.id, layout);
            setLayoutData(_layoutData);
            return Promise.resolve();
        },
        updateSelectedLayout(id) {
            const _layoutData = layoutData;
            _layoutData.selectedLayoutId = id;
            setLayoutData(_layoutData);
            return Promise.resolve();
        },
        deleteLayout(id) {
            const _layoutData = layoutData;
            _layoutData.layouts = _layoutData.layouts.filter(layout => layout.id !== id);
            setLayoutData(_layoutData);
            return Promise.resolve();
        },
        updateLayoutData(newLayoutData) {
            setLayoutData(newLayoutData);
            return Promise.resolve();
        },
    };
};
