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
        textAlign: "center",
        "& button[class*=\"flipper\"]": {
            width: "200px",
            height: "100%",
            top: "0",
            opacity: "1",
            "&::before": {
                background: "transparent !important",
                borderRadius: "0",
                border: "none"
            },
        },
        "& svg[class*=\"flipper_glyph\"]": {
            height: "32px",
            width: "32px"
        },
        "& button[class*=\"carousel_flipperNext\"] > svg": {
            position: "absolute",
            right: "20px"
        },
        "& button[class*=\"carousel_flipperPrevious\"] > svg": {
            position: "absolute",
            left: "20px"
        },
        "& div[class*=\"carousel_sequenceIndicators\"]": {
            bottom: "-60px",
        },
        "& div[class*=\"carousel_sequenceIndicator\"]": {
            "&::before": {
                height: "24px",
                width: "24px"
            },
        }
    },
    yourRights_title: {
        ...pageTitle
    }
}

export default yourRightsStyles;
