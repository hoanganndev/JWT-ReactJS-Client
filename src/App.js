import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Login from "./components/Login/Login";
import Registter from "./components/Register/Register";

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* <Navigation /> */}
                <Switch>
                    <Route path="/check1">check 1</Route>
                    <Route path="/check2">check 2</Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Registter />
                    </Route>
                    <Route path="/" exact>
                        home
                    </Route>
                    <Route path="*" exact>
                        <ErrorPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
