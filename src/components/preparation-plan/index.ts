import React from "react";
import { FoundationProps } from "@microsoft/fast-components-foundation-react";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import BasePreparationPlan from "./preparation-plan";
import preperationPlanStyles, { PreparationPlanClassNameContract } from "./preparation-plan.style";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
/* tslint:disable-next-line:typedef */
const PreparationPlan = manageJss(preperationPlanStyles)(BasePreparationPlan);
type PreparationPlan = InstanceType<typeof PreparationPlan>;

export { PreparationPlan };
export * from "./preparation-plan.logo";
