/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ScalesData } from '../chart/model/studies-scales.model';
import { TStudyLine, TStudyParameter } from '../chart/model/studies.model';
export type IndicatorTemplates = IndicatorTemplate[];
export interface IndicatorTemplate extends IndicatorTemplateNamed {
    id: string;
}
export interface IndicatorTemplateStudySettings {
    id: string;
    uuid: string;
    parameters: Array<TStudyParameter>;
    lines: Array<TStudyLine>;
    overlaying: boolean;
}
export interface IndicatorTemplateNamed {
    studies: IndicatorTemplateStudySettings[];
    name: string;
    scales: ScalesData;
}
/**
 * Connects client storage with Indicator Templates functionality in `dxcharts-react`.
 * @note will be used by `dxcharts-react` to manage {@link IndicatorTemplates} and to notify client abount changes made by user.
 */
export interface IndicatorsTemplateProvider {
    /**
     * Creates new indicator template. Returns either an `id` of newly created template or error.
     * @note will be called by `dxcharts-react` when user creates new indicator template.
     */
    createTemplate(template: IndicatorTemplateNamed): Promise<string>;
    /**
     * Deletes an indicator template by `id`.
     * @note will be called by `dxcharts-react` when user deletes an indicator template.
     */
    deleteTemplate(id: string): Promise<void>;
    /**
     * Updates an indicator template.
     * @param template - full {@link IndicatorTemplate} model with updates.
     * @note will be called by `dxcharts-react` when user updates an indicator template.
     */
    updateTemplate(template: IndicatorTemplate): Promise<void>;
    /**
     * Returns all available indicator templates for a user.
     * @note will be called by `dxcharts-react` on init to retrieve available indicator templates.
     */
    getTemplates(): Promise<IndicatorTemplates>;
}
