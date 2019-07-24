import { ComponentStyles } from "@microsoft/fast-jss-manager-react";
import {
    yourResponsibilitiesBackplate
} from "../../style.constants";
import {
    pageTitle
} from "../../style.utilities";

export interface YourResponsibilitiesClassNameContract {
    yourResponsibilities?: string;
    yourResponsibilities_title?: string;
}

const yourResponsibilitiesStyles: ComponentStyles<YourResponsibilitiesClassNameContract, {}> = {
    yourResponsibilities: {
        backgroundColor: yourResponsibilitiesBackplate,
        minHeight: "100vh",
        height: "100%",
        textAlign: "center"
    },
    yourResponsibilities_title: {
        ...pageTitle
    }
}

export default yourResponsibilitiesStyles;
