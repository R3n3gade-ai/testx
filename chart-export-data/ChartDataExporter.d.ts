/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { StudiesModel } from '@dx-private/dxchart5-modules/dist/studies/model/studies.model';
/**
 * Chart Data Export Class.
 * Exports a CSV file with all important candles and studies information
 * such as candles timestamps, candles or studies values.
 *
 * @doc-tags chart-core,candles-export
 */
export declare class ChartDataExporter {
    private chartModel;
    private studiesModel;
    private period;
    private calculateSelectedTimezoneOffset;
    constructor(chartModel: ChartModel, studiesModel: StudiesModel, period: string, calculateSelectedTimezoneOffset: (time: number) => number);
    /**
     * Exports the data and downloads the file
     */
    exportChartData(): void;
    private getFileName;
    private buildStudiesHeader;
    private buildCandlesHeader;
    private mapStudyDataToRecord;
    private getCSVData;
    private getChartCandles;
    private getStudiesData;
    private getChartStudies;
}
