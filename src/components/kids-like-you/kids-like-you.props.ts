import {
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-base";
import {
    KidsLikeYouClassNameContract
} from "./kids-like-you.style";

export interface KidsLikeYouHandledProps extends ManagedClasses<KidsLikeYouClassNameContract> {
    language: string;
}

export interface KidsLikeYouUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface KidsLikeYouState {}

export type KidsLikeYouProps = KidsLikeYouHandledProps & KidsLikeYouUnhandledProps;
