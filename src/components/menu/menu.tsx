import React from "react";
import { get } from "lodash-es";
import Foundation, {
    FoundationProps,
    HandledProps,
} from "@microsoft/fast-components-foundation-react";
import {
    Link
} from "react-router-dom";
import {
    MenuHandledProps,
    MenuUnhandledProps,
    MenuProps,
    MenuState
} from "./menu.props";
import {
    paths, Path
} from "../../path.constants";
import { connect, MapStateToProps } from "react-redux";

class Menu extends Foundation<
    MenuHandledProps,
    MenuUnhandledProps,
    MenuState
> {
    public static displayName: string = "Menu";

    protected handledProps: HandledProps<MenuHandledProps> = {
        language: void 0,
        managedClasses: void 0,
    };

    constructor(props: MenuProps) {
        super(props);

        this.state = {
            open: false
        };
    }

    public render(): React.ReactNode {
        return (
            <div className={this.generateClassNames()}>
                <button
                    className={get(this.props, "managedClasses.menu_trigger")}
                    onClick={this.handleTriggerClick}
                >
                    <span />
                </button>
                <div className={get(this.props, "managedClasses.menu_list")}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </div>
            </div>
        );
    }

    private renderLinks(): React.ReactNode {
        return paths.map((path: Path, index: number): React.ReactNode => {
            return (
                <li key={index}>
                    <Link to={path.path}>
                        {path.displayName[this.props.language]}
                    </Link>
                </li>
            );
        });
    }

    private handleTriggerClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        this.setState({
            open: !this.state.open
        });
    }

    public generateClassNames(): string {
        let classes: string = get(this.props, "managedClasses.menu");

        if (this.state.open) {
            classes = `${classes} ${get(this.props, "managedClasses.menu__open")}`;
        }

        return super.generateClassNames(classes);
    }
}

const mapStateToProps: MapStateToProps<any, any, any> = (state: { language: string }): Partial<MenuHandledProps> => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps)(Menu);
