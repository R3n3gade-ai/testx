/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { replaceInArray } from '@devexperts/dxcharts-lite/dist/chart/utils/array.utils';
const INDICATOR_TEMPLATE_LS_KEY = 'indicators';
/**
 * Creates {@link IndicatorsTemplateProvider} that stores {@link IndicatorTemplates} in {@link localStorage}.
 */
export const createLocalStorageIndicatorsTemplateProvider = () => {
    const getIndicatorTemplatesFromLS = () => {
        const indicatorTemplates = localStorage.getItem(INDICATOR_TEMPLATE_LS_KEY);
        if (!indicatorTemplates) {
            return undefined;
        }
        return JSON.parse(indicatorTemplates);
    };
    const setIndicatorTemplatesToLS = (data) => {
        localStorage.setItem(INDICATOR_TEMPLATE_LS_KEY, JSON.stringify(data));
    };
    const generateRandomUUID = () => Math.random().toString(36).substring(2, 11);
    const createTemplate = (template) => {
        const id = generateRandomUUID();
        console.log(`Creating new template: ${id}`);
        const templateWithId = Object.assign({ id }, template);
        const templatesData = getIndicatorTemplatesFromLS();
        if (!templatesData) {
            setIndicatorTemplatesToLS([templateWithId]);
        }
        else {
            setIndicatorTemplatesToLS([...templatesData, templateWithId]);
        }
        return Promise.resolve(id);
    };
    const getTemplates = () => {
        const templatesData = getIndicatorTemplatesFromLS();
        return Promise.resolve(templatesData !== null && templatesData !== void 0 ? templatesData : []);
    };
    const updateTemplate = (template) => {
        const templatesData = getIndicatorTemplatesFromLS();
        if (!templatesData) {
            return Promise.resolve(void 0);
        }
        const updatedTemplates = replaceInArray(templatesData, item => item.id === template.id, template);
        setIndicatorTemplatesToLS(updatedTemplates);
        return Promise.resolve(void 0);
    };
    const deleteTemplate = (id) => {
        const templatesData = getIndicatorTemplatesFromLS();
        if (!templatesData) {
            return Promise.resolve(void 0);
        }
        setIndicatorTemplatesToLS(templatesData.filter(template => template.id !== id));
        return Promise.resolve(void 0);
    };
    return {
        createTemplate,
        getTemplates,
        updateTemplate,
        deleteTemplate,
    };
};
