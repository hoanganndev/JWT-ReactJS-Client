import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <Router>
            <div className="app-container">
                <>
                    <div className="app-header">
                        <Navigation />
                    </div>
                    <div className="app-container">
                        <AppRoutes />
                    </div>
                </>
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
