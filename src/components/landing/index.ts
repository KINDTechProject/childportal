import React from "react";
import { FoundationProps } from "@microsoft/fast-components-foundation-react";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import BaseLanding from "./landing";
import landingStyles, { LandingClassNameContract } from "./landing.style";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
/* tslint:disable-next-line:typedef */
const Landing = manageJss(landingStyles)(BaseLanding);
type Landing = InstanceType<typeof Landing>;

export { Landing };
