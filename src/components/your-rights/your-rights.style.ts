import { ComponentStyles } from "@microsoft/fast-jss-manager-react";
import {
    yourRightsBackplate
} from "../../style.constants";
import {
    pageTitle
} from "../../style.utilities";

export interface YourRightsClassNameContract {
    yourRights?: string;
    yourRights_title?: string;
}

const yourRightsStyles: ComponentStyles<YourRightsClassNameContract, {}> = {
    yourRights: {
        backgroundColor: yourRightsBackplate,
        minHeight: "100vh",
        height: "100%",
        textAlign: "center"
    },
    yourRights_title: {
        ...pageTitle
    }
}

export default yourRightsStyles;
