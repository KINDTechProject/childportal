import {
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-base";
import {
    YourRightsClassNameContract
} from "./your-rights.style";

export interface YourRightsHandledProps extends ManagedClasses<YourRightsClassNameContract> {
    language: string;
}

export interface YourRightsUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface YourRightsState {}

export type YourRightsProps = YourRightsHandledProps & YourRightsUnhandledProps;
