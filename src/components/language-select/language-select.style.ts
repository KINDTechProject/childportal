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
        "&::before, &::after": {
            content: "''",
            position: "absolute",
            top: "30px",
            background: accentColor,
            width: "10px",
            height: "2px",
            borderRadius: "2px"
        },
        "&::before": {
            transform: "rotate(45deg)",
            right: "26px"
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
            fontSize: "18px",
            fontFamily: "Roboto, Arial, sans-serif",
        }
    }
}

export default languageSelectStyles;
