import React from "react";
import { get } from "lodash-es";
import {
    Link
} from "react-router-dom";
import Foundation, {
    FoundationProps,
    HandledProps,
} from "@microsoft/fast-components-foundation-react";
import {
    LandingHandledProps,
    LandingUnhandledProps,
    LandingProps,
    LandingState
} from "./landing.props";
import {
    MenuBar
} from "../";
import { LargeLogo } from "../large-logo";
import {
    paths,
    Path
} from "../../path.constants";
import { connect, MapStateToProps } from "react-redux";

class Landing extends Foundation<
    LandingHandledProps,
    LandingUnhandledProps,
    LandingState
> {
    public static displayName: string = "Landing";

    protected handledProps: HandledProps<LandingHandledProps> = {
        language: void 0,
        managedClasses: void 0,
    };

    public render(): React.ReactNode {
        return (
            <div className={this.generateClassNames()}>
                <MenuBar />
                <div className={get(this.props, "managedClasses.landing_contentRegion")}>
                    <div className={get(this.props, "managedClasses.landing_contentRegionLogo")}>
                        <LargeLogo language={this.props.language} />
                    </div>
                    <ul className={get(this.props, "managedClasses.landing_contentRegionList")}>
                        {this.renderLinks()}
                    </ul>
                </div>
            </div>
        );
    }

    private renderLinks(): React.ReactNode {
        return paths.map((path: Path, index: number): React.ReactNode => {
            if (path.landingLogoBackplate) {
                return (
                    <li key={index} style={{ backgroundColor: path.landingLogoBackplate }}>
                        <Link to={path.path}>
                            {path.landingLogo}
                            <h1 className={get(this.props, "managedClasses.landing_contentRegionTitle")}>
                                {path.displayName[this.props.language]}
                            </h1>
                        </Link>
                    </li>
                );
            }
        });
    }

    public generateClassNames(): string {
        return super.generateClassNames(get(this.props, "managedClasses.landing"));
    }
}

const mapStateToProps: MapStateToProps<any, any, any> = (state: { language: string }): Partial<LandingProps> => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps)(Landing);
