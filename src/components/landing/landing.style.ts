import { ComponentStyles } from "@microsoft/fast-jss-manager-react";
import {
    accentColor
} from "../../style.constants";

export interface LandingClassNameContract {
    landing?: string;
    landing_contentRegion?: string;
    landing_contentRegionList?: string;
    landing_contentRegionLogo?: string;
}

const landingStyles: ComponentStyles<LandingClassNameContract, {}> = {
    landing: {
        backgroundColor: "#F2F2D9",
        minHeight: "100vh",
        height: "100%"
    },
    landing_contentRegion: {
    },
    landing_contentRegionList: {
        borderRadius: "5px",
        padding: "0",
        overflow: "hidden",
        margin: "20px",
        listStyle: "none",
        textAlign: "center",
        "& li": {
            padding: "10px",
            "& a": {
                color: "white",
                textDecoration: "none",
                fontFamily: "Fredoka One, Arial, sans-serif"
            }
        }
    },
    landing_contentRegionLogo: {
        textAlign: "center"
    }
}

export default landingStyles;
