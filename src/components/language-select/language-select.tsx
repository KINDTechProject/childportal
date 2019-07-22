import React from "react";
import { get } from "lodash-es";
import Foundation, {
    FoundationProps,
    HandledProps,
} from "@microsoft/fast-components-foundation-react";
import {
    LanguageSelectHandledProps,
    LanguageSelectUnhandledProps,
    LanguageSelectProps,
    LanguageSelectState
} from "./language-select.props";
import {
    store
} from "../../app";
import { connect, MapStateToProps } from "react-redux";
import { Language } from "../../store/action-types";
import { languageAction } from "../../store/actions";

class LanguageSelect extends Foundation<
    LanguageSelectHandledProps,
    LanguageSelectUnhandledProps,
    LanguageSelectState
> {
    public static displayName: string = "LanguageSelect";

    protected handledProps: HandledProps<LanguageSelectHandledProps> = {
        language: void 0,
        managedClasses: void 0,
    };

    public render(): React.ReactNode {
        return (
            <div className={get(this.props, "managedClasses.languageSelect")}>
                <select value={this.props.language} onChange={this.handleUpdateLanguage}>
                    <option value={Language.en}>English</option>
                    <option value={Language.es}>Español</option>
                </select>
            </div>
        );
    }

    private handleUpdateLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        store.dispatch(
            languageAction(e.target.value as Language)
        );
    }
}

const mapStateToProps: MapStateToProps<any, any, any> = (state: { language: string }): Partial<LanguageSelectProps> => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps)(LanguageSelect);
