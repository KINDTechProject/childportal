import React from "react";
import { get } from "lodash-es";
import { connect, MapStateToProps } from "react-redux";
import Foundation, {
    FoundationProps,
    HandledProps,
} from "@microsoft/fast-components-foundation-react";
import {
    YourRightsHandledProps,
    YourRightsUnhandledProps,
    YourRightsProps,
    YourRightsState
} from "./your-rights.props";
import {
    MenuBar
} from "../";
import {
    pages
} from "../../strings";
import { Carousel } from '@microsoft/fast-components-react-msft';
import { createCarouselSlidesFromCards } from "../../utilities";

class YourRights extends Foundation<
    YourRightsHandledProps,
    YourRightsUnhandledProps,
    YourRightsState
> {
    public static displayName: string = "YourRights";

    protected handledProps: HandledProps<YourRightsHandledProps> = {
        language: void 0,
        managedClasses: void 0,
    };

    public render(): React.ReactNode {
        return (
            <div className={this.generateClassNames()}>
                <MenuBar logo={true} />
                <h1 className={get(this.props, "managedClasses.yourRights_title")}>
                    {pages.pageTitles[this.props.language].yourRights}
                </h1>
                {this.renderCarousel()}
            </div>
        );
    }

    public generateClassNames(): string {
        return super.generateClassNames(get(this.props, "managedClasses.yourRights"))
    }

    private renderCarousel(): React.ReactNode {
        return (
            <Carousel
                label="Carousel"
                items={createCarouselSlidesFromCards(pages.yourRights[this.props.language].cards)}
            />
        );
    }
}

const mapStateToProps: MapStateToProps<any, any, any> = (state: { language: string }): Partial<YourRightsProps> => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps)(YourRights);
