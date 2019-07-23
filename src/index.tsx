import ReactDOM from "react-dom";
import React from "react";
import App from "./app";

/**
 * Create the root node
 */
const root: HTMLElement = document.createElement("div");
root.setAttribute("id", "root");
const font: HTMLElement = document.createElement("link");
font.setAttribute("href", "https://fonts.googleapis.com/css?family=Fredoka+One|Roboto");
font.setAttribute("rel", "stylesheet");
document.body.appendChild(root);
document.body.setAttribute("style", "margin: 0");
document.head.appendChild(font);
const meta: HTMLElement = document.createElement("META");
meta.setAttribute("robots", "noindex,nofollow");
document.head.appendChild(meta);

const render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
};

render();
