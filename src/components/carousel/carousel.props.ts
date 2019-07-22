import {
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-base";
import {
    CarouselClassNameContract
} from "./carousel.style";
import {
    CardHandledProps
} from "../card/card.props";

export interface CarouselHandledProps extends ManagedClasses<CarouselClassNameContract> {
    cards: CardHandledProps[];
}

export interface CarouselUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface CarouselState {}

export type CarouselProps = CarouselHandledProps & CarouselUnhandledProps;
