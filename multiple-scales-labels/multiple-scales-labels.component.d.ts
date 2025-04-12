/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { LabelData } from '../../view-models/studies/studies-scales.view-model';
export interface MultipleScalesLabelsComponentProps {
    readonly labels: LabelData[];
}
export declare const MultipleScalesLabelsComponent: React.MemoExoticComponent<(props: MultipleScalesLabelsComponentProps) => React.JSX.Element>;
