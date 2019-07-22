import { ComponentStyles } from "@microsoft/fast-jss-manager-react";
import { accentColor } from "../../style.constants";

export interface CardClassNameContract {
    card?: string;
    card_imageRegion?: string;
    card_contentRegion?: string;
    card_title?: string;
    card_content?: string;
}

const cardStyles: ComponentStyles<CardClassNameContract, {}> = {
    card: {
        height: "400px",
        width: "calc(100vw - 120px)",
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: "5px",
        backgroundColor: "white"
    },
    card_imageRegion: {
        backgroundColor: "#F2F2D9",
        padding: "20px",
        textAlign: "center",
    },
    card_contentRegion: {
        padding: "20px"
    },
    card_title: {
        fontFamily: "Roboto, Arial, sans-serif",
        fontSize: "24px",
        fontWeight: "700",
        color: accentColor,
        marginTop: "0"
    },
    card_content: {
        fontFamily: "Roboto, Arial, sans-serif",
        fontSize: "20px",
        color: accentColor
    }
}

export default cardStyles;
