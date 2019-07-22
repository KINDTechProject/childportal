import React from "react";
import { FoundationProps } from "@microsoft/fast-components-foundation-react";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import BaseYourRights from "./your-rights";
import yourRightsStyles, { YourRightsClassNameContract } from "./your-rights.style";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
/* tslint:disable-next-line:typedef */
const YourRights = manageJss(yourRightsStyles)(BaseYourRights);
type YourRights = InstanceType<typeof YourRights>;

export { YourRights };
export * from "./your-rights.logo";
