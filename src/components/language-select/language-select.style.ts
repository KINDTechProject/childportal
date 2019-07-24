import { ComponentStyles } from "@microsoft/fast-jss-manager-react";
import {
    accentColor
} from "../../style.constants";

export interface LanguageSelectClassNameContract {
    languageSelect?: string;
}

const languageSelectStyles: ComponentStyles<LanguageSelectClassNameContract, {}> = {
    languageSelect: {
        padding: "20px 5px 20px 20px",
        
        "& select": {
            position: "relative",
            width: "185px",
            background: "url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #FFF",
            border: "none",
            color: accentColor,
            appearance: "none",
            fontSize: "3em",
            fontFamily: "Roboto, Arial, sans-serif",
            marginRight: "15px"
        }
    }
}

export default languageSelectStyles;
