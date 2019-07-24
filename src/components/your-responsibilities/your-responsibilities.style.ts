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
    yourResponsibilities_title: {
        ...pageTitle
    }
}

export default yourResponsibilitiesStyles;
