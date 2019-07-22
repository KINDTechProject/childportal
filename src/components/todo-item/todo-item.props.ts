import {
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-base";
import {
    TodoItemClassNameContract
} from "./todo-item.style";

export interface TodoItemHandledProps extends ManagedClasses<TodoItemClassNameContract> {
    title: string;
    content?: string;
    language: string;
}

export interface TodoItemUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface TodoItemState {}

export type TodoItemProps = TodoItemHandledProps & TodoItemUnhandledProps;
