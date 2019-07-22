import {
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-base";
import {
    LanguageSelectClassNameContract
} from "./language-select.style";

export interface LanguageSelectHandledProps extends ManagedClasses<LanguageSelectClassNameContract> {
    language: string;
}

export interface LanguageSelectUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface LanguageSelectState {}

export type LanguageSelectProps = LanguageSelectHandledProps & LanguageSelectUnhandledProps;
