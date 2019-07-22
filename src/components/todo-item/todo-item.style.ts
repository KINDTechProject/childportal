import { ComponentStyles } from "@microsoft/fast-jss-manager-react";

export interface TodoItemClassNameContract {
    todoItem?: string;
    todoItem_inputRegion?: string;
    todoItem_contentRegion?: string;
}

const todoItemStyles: ComponentStyles<TodoItemClassNameContract, {}> = {
    todoItem: {
        display: "flex",
        height: "100%",
        background: "white",
        margin: "20px",
        borderRadius: "5px",
        fontFamily: "Roboto, Arial, sans-serif",
        color: "#3371A0"
    },
    todoItem_contentRegion: {
        flexGrow: "1",
        padding: "20px",
        "& h2": {
            fontSize: "28px",
            margin: "0"
        },
        "& p": {
            fontSize: "22px"
        }
    },
    todoItem_inputRegion: {
        padding: "20px",
        "& div": {
            position: "relative"
        },
        "& input": {
            width: "36px",
            height: "36px",
            opacity: 0
        },
        "& span": {
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            pointerEvents: "none",
            border: "4px solid #3371A0",
            borderRadius: "8px",
        },
        "& input:checked + span": {
            borderColor: "transparent"
        },
        "& input:checked + span::after, & input:checked + span::before": {
            content: "''",
            position: "absolute",
            background: "#F38665",
            borderRadius: "10px",
            height: "8px"
        },
        "& input:checked + span::after": {
            width: "20px",
            transform: "rotate(45deg)",
            left: "-4px",
            top: "24px",
        },
        "& input:checked + span::before": {
            width: "41px",
            transform: "rotate(-45deg)",
            left: "2px",
            top: "17px",
        }
    }
}

export default todoItemStyles;
