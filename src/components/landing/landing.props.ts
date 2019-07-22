import { ManagedClasses } from "@microsoft/fast-jss-manager";
import { LandingClassNameContract } from "./landing.style";

export interface LandingHandledProps extends ManagedClasses<LandingClassNameContract> {
    language: string;
}

export interface LandingUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface LandingState {}

export type LandingProps = LandingHandledProps & LandingUnhandledProps;
