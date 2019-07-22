import React from "react";
import { get } from "lodash-es";
import Foundation, {
    FoundationProps,
    HandledProps,
} from "@microsoft/fast-components-foundation-react";
import {
    PreparationPlanHandledProps,
    PreparationPlanUnhandledProps,
    PreparationPlanProps,
    PreparationPlanState
} from "./preparation-plan.props";
import {
    MenuBar
} from "../";
import {
    pages, Checklist
} from "../../strings";
import { connect, MapStateToProps } from "react-redux";
import { TodoItem } from "../todo-item";

class PreparationPlan extends Foundation<
    PreparationPlanHandledProps,
    PreparationPlanUnhandledProps,
    PreparationPlanState
> {
    public static displayName: string = "PreparationPlan";

    protected handledProps: HandledProps<PreparationPlanHandledProps> = {
        language: void 0,
        managedClasses: void 0,
    };

    public render(): React.ReactNode {
        return (
            <div className={this.generateClassNames()}>
                <MenuBar logo={true} />
                <h1 className={get(this.props, "managedClasses.preparationPlan_title")}>
                    {pages.pageTitles[this.props.language].yourResponsibilities}
                </h1>
                <h2 className={get(this.props, "managedClasses.preparationPlan_subtitle")}>
                    Make sure you have all the documents you need to be prepared.
                </h2>
                {this.renderChecklist()}
                {this.renderSupplementaryChecklistTitle()}
                {this.renderSupplementaryChecklist()}
            </div>
        );
    }

    public generateClassNames(): string {
        return super.generateClassNames(get(this.props, "managedClasses.preparationPlan"))
    }

    private renderChecklist(): React.ReactNode {
        return pages.preparationPlan[this.props.language].checklist.map((todoProps: Checklist): React.ReactNode => {
            return (
                <TodoItem {...todoProps} />
            );
        });
    }

    private renderSupplementaryChecklistTitle(): React.ReactNode {
        return (
            <div className={this.props.managedClasses.preparationPlan_checklistTitle}>
                {pages.preparationPlan[this.props.language].supplementaryChecklistTitle}
            </div>
        );
    }

    private renderSupplementaryChecklist(): React.ReactNode {
        return pages.preparationPlan[this.props.language].supplementaryChecklist.map((todoProps: Checklist): React.ReactNode => {
            return (
                <TodoItem {...todoProps} />
            )
        });
    }
}

const mapStateToProps: MapStateToProps<any, any, any> = (state: { language: string }): Partial<PreparationPlanHandledProps> => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps)(PreparationPlan);
