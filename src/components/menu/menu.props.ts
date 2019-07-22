import { ManagedClasses } from "@microsoft/fast-jss-manager";
import { MenuClassNameContract } from "./menu.style";

export interface MenuHandledProps extends ManagedClasses<MenuClassNameContract> {
    language: string;
}

export interface MenuUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface MenuState {
    /**
     * The open state
     */
    open: boolean;
}

export type MenuProps = MenuHandledProps & MenuUnhandledProps;
