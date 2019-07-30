import { get } from "lodash-es";
import { Language } from "./action-types";
import { LanguageAction } from "./actions";

export interface LanguageState {
  language: Language;
}

const initialState: LanguageState = {
  language: Language.es
};

export type LanguageReducer = (
  state: LanguageState,
  action: LanguageAction
) => Language;

export const languageReducer: LanguageReducer = (
  state: LanguageState = initialState,
  action: LanguageAction
): Language => {
  if (typeof get(action, "data") === "string") {
    return action.data;
  }

  return state.language;
};
