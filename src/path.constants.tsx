import React from "react";
import {
    YourRights,
    YourRightsLogo,
    YourResponsibilities,
    YourResponsibilitiesLogo,
    PreparationPlan,
    PreparationPlanLogo,
    KidsLikeYou,
    KidsLikeYouLogo,
    Landing,
    SmallLogo,
    LargeLogo
} from "./components";
import {
    yourRightsBackplate,
    yourResponsibilitiesBackplate,
    kidsLikeYouBackplate,
    preparationPlanBackplate
} from "./style.constants";
import { Language } from "./store/action-types";

export interface DisplayName {
    [key: string]: React.ReactNode;
}

export interface Path {
    path: string;
    component: any;
    displayName: DisplayName;
    landingLogo?: React.ReactNode;
    landingLogoBackplate?: string;
}

export const paths: Path[] = [
    {
        path: "/",
        component: Landing,
        displayName: {
            en: <SmallLogo kindTextColor={"white"} />,
            es: <SmallLogo kindTextColor={"white"} language={Language.es} />
        }
    },
    {
        path: "/your-rights",
        component: YourRights,
        displayName: {
            en: "Your Rights",
            es: "Tus Derechos"
        },
        landingLogo: <YourRightsLogo />,
        landingLogoBackplate: yourRightsBackplate
    },
    {
        path: "/your-responsibilities",
        component: YourResponsibilities,
        displayName: {
            en: "Your Responsibilities",
            es: "Tus Responsabilidades"
        },
        landingLogo: <YourResponsibilitiesLogo />,
        landingLogoBackplate: yourResponsibilitiesBackplate
    },
    {
        path: "/preparation-plan",
        component: PreparationPlan,
        displayName: {
            en: "Preparation Plan",
            es: "Plan de Preparación",
        },
        landingLogo: <PreparationPlanLogo />,
        landingLogoBackplate: preparationPlanBackplate
    },
    {
        path: "/kids-like-you",
        component: KidsLikeYou,
        displayName: {
            en: "Kids Like You",
            es: "Jovenes como Tú"
        },
        landingLogo: <KidsLikeYouLogo />,
        landingLogoBackplate: kidsLikeYouBackplate
    }
];
