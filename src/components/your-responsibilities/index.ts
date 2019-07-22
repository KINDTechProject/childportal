import React from "react";
import { FoundationProps } from "@microsoft/fast-components-foundation-react";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import BaseYourResponsibilities from "./your-responsibilities";
import yourResponsibilitiesStyles, { YourResponsibilitiesClassNameContract } from "./your-responsibilities.style";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
/* tslint:disable-next-line:typedef */
const YourResponsibilities = manageJss(yourResponsibilitiesStyles)(BaseYourResponsibilities);
type YourResponsibilities = InstanceType<typeof YourResponsibilities>;

export { YourResponsibilities };
export * from "./your-responsibilities.logo";
