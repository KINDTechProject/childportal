import {
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-base";
import {
    CardClassNameContract
} from "./card.style";

export interface CardHandledProps extends ManagedClasses<CardClassNameContract> {
    image: React.ReactNode;
    title: string;
    content: string;
}

export interface CardUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardState {}

export type CardProps = CardHandledProps & CardUnhandledProps;
