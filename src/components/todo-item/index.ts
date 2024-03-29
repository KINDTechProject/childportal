import React from "react";
import { FoundationProps } from "@microsoft/fast-components-foundation-react";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import BaseTodoItem from "./todo-item";
import preperationPlanStyles, { TodoItemClassNameContract } from "./todo-item.style";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
/* tslint:disable-next-line:typedef */
const TodoItem = manageJss(preperationPlanStyles)(BaseTodoItem);
type TodoItem = InstanceType<typeof TodoItem>;

export { TodoItem };
