import {
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-base";
import {
    PreparationPlanClassNameContract
} from "./preparation-plan.style";

export interface PreparationPlanHandledProps extends ManagedClasses<PreparationPlanClassNameContract> {
    language: string;
}

export interface PreparationPlanUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface PreparationPlanState {}

export type PreparationPlanProps = PreparationPlanHandledProps & PreparationPlanUnhandledProps;
