import { Language } from "./action-types";

export interface LanguageAction {
    type: Language,
    data: any
}

export function languageAction(
    action: Language
): LanguageAction {
    return {
        type: action,
        data: action
    }
}