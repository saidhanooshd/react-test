import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import ListItems from "./ListItems/ListItems";


class Routes extends React.Component {
render(){
    return (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ListItems} />
                <Redirect from="*" to="/app/page-not-found" />
            </Switch>
        </BrowserRouter>
    </div>
    );
  }
}

export default Routes;