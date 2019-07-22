import React from "react";
import { get } from "lodash-es";
import Foundation, {
    FoundationProps,
    HandledProps,
} from "@microsoft/fast-components-foundation-react";
import {
    CardHandledProps,
    CardUnhandledProps,
    CardProps,
    CardState
} from "./card.props";

export default class Card extends Foundation<
    CardHandledProps,
    CardUnhandledProps,
    CardState
> {
    public static displayName: string = "Card";

    protected handledProps: HandledProps<CardHandledProps> = {
        image: void 0,
        title: void 0,
        content: void 0,
        managedClasses: void 0,
    };

    public render(): React.ReactNode {
        return (
            <div className={this.generateClassNames()}>
                <div className={get(this.props, "managedClasses.card_imageRegion")}>
                    {this.props.image}
                </div>
                <div className={get(this.props, "managedClasses.card_contentRegion")}>
                    <h2 className={get(this.props, "managedClasses.card_title")}>
                        {this.props.title}
                    </h2>
                    <p className={get(this.props, "managedClasses.card_content")}>
                        {this.props.content}
                    </p>
                </div>
            </div>
        );
    }

    public generateClassNames(): string {
        return super.generateClassNames(get(this.props, "managedClasses.card"))
    }
}
