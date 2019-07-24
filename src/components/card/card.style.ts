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
        width: "calc(100vw - 180px)",
        minHeight: "calc(100vh - 450px)",
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: "5px",
        backgroundColor: "white"
    },
    card_imageRegion: {
        backgroundColor: "#F2F2D9",
        padding: "80px 20px 80px 20px",
        textAlign: "center",
    },
    card_contentRegion: {
        padding: "20px"
    },
    card_title: {
        fontFamily: "Roboto, Arial, sans-serif",
        fontSize: "3.5em",
        fontWeight: "700",
        color: accentColor,
        marginTop: "0.67em"
    },
    card_content: {
        fontFamily: "Roboto, Arial, sans-serif",
        fontSize: "3em",
        padding: "0 0.67em 0 0.67em",
        color: accentColor
    }
}

export default cardStyles;
