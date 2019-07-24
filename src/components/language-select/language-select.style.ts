import { ComponentStyles } from "@microsoft/fast-jss-manager-react";
import {
    accentColor
} from "../../style.constants";

export interface LanguageSelectClassNameContract {
    languageSelect?: string;
}

const languageSelectStyles: ComponentStyles<LanguageSelectClassNameContract, {}> = {
    languageSelect: {
        padding: "20px 40px 20px 20px",
        marginTop: "13px",
        "&::before, &::after": {
            content: "''",
            position: "absolute",
            top: "58px",
            background: accentColor,
            width: "20px",
            height: "3px",
            borderRadius: "2px"
        },
        "&::before": {
            transform: "rotate(45deg)",
            right: "34px"
        },
        "&::after": {
            transform: "rotate(-45deg)",
            right: "20px"
        },
        "& select": {
            position: "relative",
            background: "none",
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
