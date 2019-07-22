import React from "react";
import { FoundationProps } from "@microsoft/fast-components-foundation-react";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import BaseLanguageSelect from "./language-select";
import languageSelectStyles, { LanguageSelectClassNameContract } from "./language-select.style";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
/* tslint:disable-next-line:typedef */
const LanguageSelect = manageJss(languageSelectStyles)(BaseLanguageSelect);
type LanguageSelect = InstanceType<typeof LanguageSelect>;

export { LanguageSelect };
