import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../src/context/userContext";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";

function App() {
    const { user } = useContext(UserContext);
    const style = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };
    return (
        <Router>
            {user && user.isLoading ? (
                <div style={style}>
                    <HashLoader color={"#36d7b7"} loading={true} size={100} />
                </div>
            ) : (
                <>
                    <div className="app-header">
                        <Navigation />
                    </div>
                    <div className="app-container">
                        <AppRoutes />
                    </div>
                </>
            )}

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
