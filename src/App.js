import { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../src/context/userContext";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";
import { Scrollbars } from "react-custom-scrollbars";

function App() {
    const { user } = useContext(UserContext);
    const [scrollHeight, setScrollHeight] = useState(0);
    const style = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    useEffect(() => {
        let windowHeight = window.innerHeight;
        setScrollHeight(windowHeight);
    }, [user]);

    return (
        <Scrollbars autoHide style={{ height: scrollHeight }}>
            <Router>
                {user && user.isLoading ? (
                    <div style={style}>
                        <HashLoader
                            color={"#36d7b7"}
                            loading={true}
                            size={100}
                        />
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
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </Router>
        </Scrollbars>
    );
}

export default App;
