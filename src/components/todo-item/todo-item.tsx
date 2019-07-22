import React from "react";
import { get } from "lodash-es";
import Foundation, {
    FoundationProps,
    HandledProps,
} from "@microsoft/fast-components-foundation-react";
import {
    TodoItemHandledProps,
    TodoItemUnhandledProps,
    TodoItemProps,
    TodoItemState
} from "./todo-item.props";
import { connect, MapStateToProps } from "react-redux";

class TodoItem extends Foundation<
    TodoItemHandledProps,
    TodoItemUnhandledProps,
    TodoItemState
> {
    public static displayName: string = "TodoItem";

    protected handledProps: HandledProps<TodoItemHandledProps> = {
        title: void 0,
        content: void 0,
        language: void 0,
        managedClasses: void 0,
    };

    public render(): React.ReactNode {
        return (
            <div className={this.generateClassNames()}>
                <div className={this.props.managedClasses.todoItem_inputRegion}>
                    <div>
                        <input type={"checkbox"} />
                        <span />
                    </div>
                </div>
                <div className={this.props.managedClasses.todoItem_contentRegion}>
                    <h2>
                        {this.props.title}
                    </h2>
                    <p>
                        {this.props.content}
                    </p>
                </div>
            </div>
        );
    }

    public generateClassNames(): string {
        return super.generateClassNames(get(this.props, "managedClasses.todoItem"))
    }
}

const mapStateToProps: MapStateToProps<any, any, any> = (state: { language: string }): Partial<TodoItemHandledProps> => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps)(TodoItem);
