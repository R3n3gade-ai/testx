/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { replaceInArray } from '@devexperts/dxcharts-lite/dist/chart/utils/array.utils';
/**
 * Creates mock implementation of {@link IndicatorsTemplateProvider}.
 */
export const createMockIndicatorsTemplateProvider = () => {
    let templateData = [];
    const setTemplateData = (data) => {
        templateData = data;
    };
    const generateRandomUUID = () => Math.random().toString(36).substring(2, 9);
    const createTemplate = (template) => {
        const id = generateRandomUUID();
        const templateWithId = Object.assign({ id }, template);
        setTemplateData([...templateData, templateWithId]);
        return Promise.resolve(templateWithId.id);
    };
    const getTemplates = () => {
        return Promise.resolve(templateData);
    };
    const updateTemplate = (template) => {
        const updatedTemplates = replaceInArray(templateData, item => item.id === template.id, template);
        setTemplateData(updatedTemplates);
        return Promise.resolve(void 0);
    };
    const deleteTemplate = (id) => {
        setTemplateData(templateData.filter(template => template.id !== id));
        return Promise.resolve(void 0);
    };
    return {
        createTemplate,
        getTemplates,
        updateTemplate,
        deleteTemplate,
    };
};
