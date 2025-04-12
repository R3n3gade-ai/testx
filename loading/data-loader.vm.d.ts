/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Property } from '../../../utils/property.utils';
import { Sink } from '../../../utils/sink';
export type DataLoaderStateStatus = 'resolved' | 'loading' | 'rejected';
export interface DataLoaderState {
    status: DataLoaderStateStatus;
    message: string;
}
export interface DataLoaderVM {
    /**
     * Loader state
     */
    state: Property<DataLoaderState>;
    /**
     * Set the loader state.
     */
    setState: (state: DataLoaderState) => void;
}
/**
 * DataLoaderVM is responsible for enabling/disabling loading state (spinner or fading)
 * @doc-tags chart-react,loading,
 */
export declare const createDataLoaderVM: () => Sink<DataLoaderVM>;
