import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Login from "./components/Login/Login";
import Registter from "./components/Register/Register";
import { ToastContainer } from "react-toastify"; //🔥 Config Toastify
import "react-toastify/dist/ReactToastify.css";
import Users from "./components/ManageUsers/Users";
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
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/" exact>
                        home
                    </Route>
                    <Route path="*" exact>
                        <ErrorPage />
                    </Route>
                </Switch>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Router>
    );
}

export default App;
