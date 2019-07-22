import React from "react";
import { get } from "lodash-es";
import Foundation, {
    FoundationProps,
    HandledProps,
} from "@microsoft/fast-components-foundation-react";
import {
    CarouselHandledProps,
    CarouselUnhandledProps,
    CarouselProps,
    CarouselState
} from "./carousel.props";
import { CardHandledProps } from "../card/card.props";
import { Card } from "../card";

export default class Carousel extends Foundation<
    CarouselHandledProps,
    CarouselUnhandledProps,
    CarouselState
> {
    public static displayName: string = "Carousel";

    protected handledProps: HandledProps<CarouselHandledProps> = {
        cards: void 0,
        managedClasses: void 0,
    };

    public render(): React.ReactNode {
        return (
            <div className={this.generateClassNames()}>
                {this.renderCards()}
            </div>
        );
    }

    public generateClassNames(): string {
        return super.generateClassNames(get(this.props, "managedClasses.carousel"))
    }

    private renderCards(): React.ReactNode {
        return this.props.cards.map((cardProps: CardHandledProps, index: number): React.ReactNode => {
            return (
                <Card
                    key={index}
                    {...cardProps}
                />
            );
        });
    }
}
