import React from "react";
import {
    MenuBarProps
} from "./menu-bar.props";
import {
    Menu,
    SmallLogo,
    LanguageSelect
} from "../";
import { accentColor } from "../../style.constants";
import { connect, MapStateToProps } from "react-redux";
import { Language } from "../../store/action-types";

class MenuBar extends React.Component<MenuBarProps, {}> {
    public static displayName: string = "MenuBar";

    public render(): React.ReactNode {
        return (
            <div style={{display: "flex", backgroundColor: "white", marginBottom: "20px", height: "120px"}}>
                <Menu />
                {this.renderLogo()}
                <LanguageSelect />
            </div>
        );
    }

    private renderLogo(): React.ReactNode {
        if (this.props.logo) {
            return (
                <div style={{ textAlign: "left", flexGrow: 1, marginTop: "13px" }}>
                    <SmallLogo kindTextColor={accentColor} padding={"25px 0"} language={this.props.language} />
                </div>
            );
        }

        return <div style={{ flexGrow: 1 }} />;
    }
}

const mapStateToProps: MapStateToProps<any, any, any> = (state: { language: Language }): Partial<MenuBarProps> => {
    return {
        language: state.language
    };
};

const menuBar: any = connect(mapStateToProps)(MenuBar);

export { menuBar as MenuBar };
