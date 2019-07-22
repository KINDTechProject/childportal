import {
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-base";
import {
    YourResponsibilitiesClassNameContract
} from "./your-responsibilities.style";

export interface YourResponsibilitiesHandledProps extends ManagedClasses<YourResponsibilitiesClassNameContract> {
    language: string;
}

export interface YourResponsibilitiesUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface YourResponsibilitiesState {}

export type YourResponsibilitiesProps = YourResponsibilitiesHandledProps & YourResponsibilitiesUnhandledProps;
