import { ComponentStyles } from "@microsoft/fast-jss-manager-react";
import {
    kidsLikeYouBackplate,
    accentColor
} from "../../style.constants";
import {
    pageTitle
} from "../../style.utilities";

export interface KidsLikeYouClassNameContract {
    kidsLikeYou?: string;
    kidsLikeYou_title?: string;
    kidsLikeYou_card?: string;
    kidsLikeYou_cardTitle?: string;
    kidsLikeYou_cardContent?: string;
    kidsLikeYou_cardContentRegion?: string;
}

const kidsLikeYouStyles: ComponentStyles<KidsLikeYouClassNameContract, {}> = {
    kidsLikeYou: {
        backgroundColor: kidsLikeYouBackplate,
        minHeight: "100vh",
        height: "100%"
    },
    kidsLikeYou_title: {
        ...pageTitle
    },
    kidsLikeYou_card: {
        borderRadius: "5px",
        backgroundColor: "white",
        overflow: "hidden",
        width: "calc(100vw - 40px)",
        margin: "0 auto 20px",
        color: accentColor
    },
    kidsLikeYou_cardTitle: {
        margin: "0",
        fontFamily: "Roboto, Arial, sans-serif",
        fontSize: "24px",
        fontWeight: "700",
        color: accentColor
    },
    kidsLikeYou_cardContent: {
        margin: "0",
        fontFamily: "Roboto, Arial, sans-serif",
        fontSize: "20px",
        color: accentColor
    },
    kidsLikeYou_cardContentRegion: {
        padding: "20px"
    }
}

export default kidsLikeYouStyles;
