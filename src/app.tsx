import React from "react";
import { Provider } from "react-redux";
import {
    HashRouter,
    Link,
    Switch,
    Route
} from "react-router-dom";
import Foundation, {
    FoundationProps,
    HandledProps,
} from "@microsoft/fast-components-foundation-react";
import { combineReducers, createStore, Store } from "redux";
import * as Reducers from "./store/reducers";
import {
    paths,
    Path
} from "./path.constants";

export const store: Store<any> = createStore(
    combineReducers({
        language: Reducers.languageReducer
    })
);

export default class App extends Foundation<
    {},
    {},
    {}
> {
    public static displayName: string = "App";

    public render(): React.ReactNode {
        return (
            <Provider store={store}>
                <HashRouter>
                    <div>
                        <Switch>
                            {this.renderRoutes()}
                        </Switch>
                    </div>
                </HashRouter>
            </Provider>
        );
    }

    private renderRoutes(): React.ReactNode {
        return paths.map((path: Path, index: number): React.ReactNode => {
            return <Route key={index} path={path.path} component={path.component} exact={true} />;
        });
    }
}
