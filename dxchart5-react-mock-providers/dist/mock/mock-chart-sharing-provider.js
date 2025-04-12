/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/**
 * Creates mock implementation of {@link ChartSharingProvider}.
 */
export function createMockChartSharingProvider() {
    /**
     * For mock purposes there's no image service to upload a snapshot to generate a URL.
     * Therefore we just encode image blob via URL.createObjectURL(blob) and return the result.
     * It is not a real URL, but it can be used for demo purposes.
     *
     * NOTE: You can use any image hosting service you want here or implement your own.
     */
    const uploadChartSnapshot = (blob) => {
        return new Promise(resolve => resolve({
            url: URL.createObjectURL(blob),
        }));
    };
    return {
        uploadChartSnapshot,
    };
}
