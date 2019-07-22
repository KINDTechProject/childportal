import React from "react";
import { get } from "lodash-es";
import Foundation, {
    FoundationProps,
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
import { Carousel } from "../carousel";
import { connect, MapStateToProps } from "react-redux";

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
                {this.renderCards()}
            </div>
        );
    }

    public generateClassNames(): string {
        return super.generateClassNames(get(this.props, "managedClasses.yourResponsibilities"))
    }

    private renderCards(): React.ReactNode {
        return (
            <Carousel cards={pages.yourResponsibilities[this.props.language].cards} />
        );
    }
}

const mapStateToProps: MapStateToProps<any, any, any> = (state: { language: string }): Partial<YourResponsibilitiesProps> => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps)(YourResponsibilities);
