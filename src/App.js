import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
    return (
        <div className="App">
            <GlobalStyles />

            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/progress">
                    <Work />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
