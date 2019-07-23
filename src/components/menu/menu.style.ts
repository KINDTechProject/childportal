import { ComponentStyles } from "@microsoft/fast-jss-manager-react";
import {
    accentColor
} from "../../style.constants";

export interface MenuClassNameContract {
    menu?: string;
    menu__open?: string;
    manu_trigger?: string;
    menu_list?: string;
}

/* changable vars */
const height: number = 4;
const rectSideX: number = 30;
const rectSizeY: number = 20;
const transitionDuration: string = "0.3s";
const borderRadius: string = "3px";

/* calculated vars */
const boxHeight: number = rectSizeY;
const boxWidth: number = rectSideX;
const horizontalCenter: number = (boxHeight/2) - (height/2);
const verticalCenter: number = height * 2;

const menuStyles: ComponentStyles<MenuClassNameContract, {}> = {
    menu: {
        display: "inline-block",
        "& $menu_trigger": {
            "& span": {
                top: `${verticalCenter}px`,
                left: "0"
            },
            "&::before": {
                top: "0",
                left: "0"
            },
            "&::after": {
                bottom: "0",
                left: "0"
            }
        },
        "& $menu_list": {
            display: "none"
        }
    },
    menu_list: {
        "& ul": {
            listStyle: "none",
            margin: "0",
            padding: "0",
        },
        "& li": {
            padding: "20px",
            "& a": {
                color: "white",
                textDecoration: "none",
                fontFamily: "Fredoka One, Arial, sans-serif"
            }
        }
    },
    menu__open: {
        display: "block",
        zIndex: "1",
        position: "absolute",
        background: accentColor,
        height: "100vh",
        width: "100%",
        "& $menu_trigger": {
            "& span": {
                display: "none",
            },
            "&::before": {
                top: `${horizontalCenter}px`,
                left: "0",
                transform: "rotate(45deg)",
                backgroundColor: "white",
            },
            "&::after": {
                bottom: `${horizontalCenter}px`,
                left: "0",
                transform: "rotate(-45deg)",
                backgroundColor: "white",
            }
        },
        "& $menu_list": {
            display: "block"
        }, 
        
    },
    menu_trigger: {
        position: "relative",
        display: "block",
        width: `${boxWidth}px`,
        height: `${boxHeight}px`,
        margin: "22px",
        border: "none",
        background: "transparent",
        "& span": {
            position: "absolute",
            height: `${height}px`,
            width: `${boxWidth}px`,
            backgroundColor: accentColor,
            transitionProperty: "transform",
            transitionDuration: transitionDuration,
            top: `${verticalCenter}px`,
            borderRadius: borderRadius
        },
        "&::before": {
            content: "''",
            width: `${boxWidth}px`,
            position: "absolute",
            height: `${height}px`,
            backgroundColor: accentColor,
            transitionProperty: "top, transform",
            transitionDuration: `${transitionDuration}, ${transitionDuration}`,
            top: `${verticalCenter}px`,
            borderRadius: borderRadius
        },
        "&::after": {
            content: "''",
            width: `${boxWidth}px`,
            position: "absolute",
            height: `${height}px`,
            backgroundColor: accentColor,
            transitionProperty: "bottom, transform",
            transitionDuration: `${transitionDuration}, ${transitionDuration}`,
            bottom: `${verticalCenter}px`,
            borderRadius: borderRadius
        }
    }
}

export default menuStyles;
