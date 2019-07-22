import { ComponentStyles } from "@microsoft/fast-jss-manager-react";
import {
    preparationPlanBackplate
} from "../../style.constants";
import {
    pageTitle
} from "../../style.utilities";

export interface PreparationPlanClassNameContract {
    preparationPlan?: string;
    preparationPlan_checklistTitle?: string;
    preparationPlan_title?: string;
    preparationPlan_subtitle?: string;
}

const preparationPlanStyles: ComponentStyles<PreparationPlanClassNameContract, {}> = {
    preparationPlan: {
        backgroundColor: preparationPlanBackplate,
        minHeight: "100vh",
        height: "100%",
        fontFamily: "Roboto, Arial, sans-serif",
    },
    preparationPlan_checklistTitle: {
        padding: "20px",
        color: "white",
        fontSize: "18px",
        textAlign: "center"
    },
    preparationPlan_title: {
        ...pageTitle
    },
    preparationPlan_subtitle: {
        textAlign: "center",
        color: "white",
        fontSize: "18px",
        fontWeight: "400"
    }
}

export default preparationPlanStyles;
