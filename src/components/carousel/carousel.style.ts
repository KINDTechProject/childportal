import { ComponentStyles } from "@microsoft/fast-jss-manager-react";

export interface CarouselClassNameContract {
    carousel?: string;
}

const carouselStyles: ComponentStyles<CarouselClassNameContract, {}> = {
    carousel: {
        minHeight: "100vh",
        height: "100%"
    }
}

export default carouselStyles;
