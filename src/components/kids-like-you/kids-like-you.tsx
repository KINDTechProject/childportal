import React from "react";
import { get } from "lodash-es";
import Foundation, {
    FoundationProps,
    HandledProps,
} from "@microsoft/fast-components-foundation-react";
import {
    KidsLikeYouHandledProps,
    KidsLikeYouUnhandledProps,
    KidsLikeYouProps,
    KidsLikeYouState
} from "./kids-like-you.props";
import {
    MenuBar
} from "../";
import {
    pages,
    Video
} from "../../strings";
import { connect, MapStateToProps } from "react-redux";

class KidsLikeYou extends Foundation<
    KidsLikeYouHandledProps,
    KidsLikeYouUnhandledProps,
    KidsLikeYouState
> {
    public static displayName: string = "KidsLikeYou";

    protected handledProps: HandledProps<KidsLikeYouHandledProps> = {
        language: void 0,
        managedClasses: void 0,
    };

    public render(): React.ReactNode {
        return (
            <div className={this.generateClassNames()}>
                <MenuBar logo={true} />
                <h1 className={get(this.props, "managedClasses.kidsLikeYou_title")}>
                    {pages.pageTitles[this.props.language].kidsLikeYou}
                </h1>
                {this.renderVideoCards()}
            </div>
        );
    }

    public generateClassNames(): string {
        return super.generateClassNames(get(this.props, "managedClasses.kidsLikeYou"))
    }

    private renderVideoCards(): React.ReactNode {
        return pages.kidsLikeYou[this.props.language].video.map((video: Video, index: number): React.ReactNode => {
            return (
                <div key={index} className={get(this.props, "managedClasses.kidsLikeYou_card")}>
                    {video.embeddedVideo}
                    <div className={get(this.props, "managedClasses.kidsLikeYou_cardContentRegion")}>
                        <h2 className={get(this.props, "managedClasses.kidsLikeYou_cardTitle")}>
                            {video.title}
                        </h2>
                        <p className={get(this.props, "managedClasses.kidsLikeYou_cardContent")}>
                            {video.content}
                        </p>
                    </div>
                </div>
            );
        });
    }
}

const mapStateToProps: MapStateToProps<any, any, any> = (state: { language: string }): Partial<KidsLikeYouProps> => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps)(KidsLikeYou);
