import React from "react";
import { get } from "lodash-es";
import Foundation, {
    HandledProps,
} from "@microsoft/fast-components-foundation-react";
import {
    YourResponsibilitiesHandledProps,
    YourResponsibilitiesUnhandledProps,
    YourResponsibilitiesProps,
    YourResponsibilitiesState
} from "./your-responsibilities.props";
import {
    MenuBar
} from "../";
import {
    pages
} from "../../strings";
import { Carousel, CarouselSlide } from '@microsoft/fast-components-react-msft';
import { connect, MapStateToProps } from "react-redux";
import { Card } from "../card";
import { CardHandledProps } from "../card/card.props";


class YourResponsibilities extends Foundation<
    YourResponsibilitiesHandledProps,
    YourResponsibilitiesUnhandledProps,
    YourResponsibilitiesState
    > {
    public static displayName: string = "YourResponsibilities";


    protected handledProps: HandledProps<YourResponsibilitiesHandledProps> = {
        language: void 0,
        managedClasses: void 0,
    };


    public render(): React.ReactNode {
        return (
            <div className={this.generateClassNames()}>
        <MenuBar logo={true} />
        <h1 className={get(this.props, "managedClasses.yourResponsibilities_title")}>
            {pages.pageTitles[this.props.language].yourResponsibilities}
        </h1>
                { this.renderCards() }
            </div >
        );
    }


    private getCarouselSlides(): CarouselSlide[] {
    let object: CarouselSlide[] = [];
    var cards = pages.yourResponsibilities[this.props.language].cards;
    var i;
    for (i = 0; i < cards.length; i++) {
        object[i] = {
            content: this.getContents(cards[i]),
            id: i+1
        };
    }
        return object;
    } 
    private getContents(cards: CardHandledProps): (className?: string) => React.ReactNode {
        return (className?: string): React.ReactNode => (
            <Card {...cards}
            />
        )
    }

    public generateClassNames(): string {
        return super.generateClassNames(get(this.props, "managedClasses.yourResponsibilities"))
    }

    private renderCards(): React.ReactNode {
        return (

            <Carousel
                label="Carousel"
                items={this.getCarouselSlides()}
            />

        );
    }
}

const mapStateToProps: MapStateToProps<any, any, any> = (state: { language: string }): Partial<YourResponsibilitiesProps> => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps)(YourResponsibilities);
