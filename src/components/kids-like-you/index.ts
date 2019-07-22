import React from "react";
import { FoundationProps } from "@microsoft/fast-components-foundation-react";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import BaseKidsLikeYou from "./kids-like-you";
import kidsLikeYouStyles, { KidsLikeYouClassNameContract } from "./kids-like-you.style";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
/* tslint:disable-next-line:typedef */
const KidsLikeYou = manageJss(kidsLikeYouStyles)(BaseKidsLikeYou);
type KidsLikeYou = InstanceType<typeof KidsLikeYou>;

export { KidsLikeYou };
export * from "./kids-like-you.logo";
