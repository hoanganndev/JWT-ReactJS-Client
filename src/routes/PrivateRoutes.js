import React from "react";
import { Route } from "react-router-dom";

const PrivateRoutes = props => {
    return (
        <>
            <Route path={props.path} component={props.component} />
        </>
    );
    // const { user } = useContext(UserContext);
    // if (user && user.isAuthenticated === true) {
    //     //! Logged in user
    //     return (
    //         <>
    //             <Route path={props.path} component={props.component} />
    //         </>
    //     );
    // } else {
    //     return (
    //         <>
    //             <Redirect to="/login" />
    //         </>
    //     ); //! if user not login redireact to page login
    // }
};

export default PrivateRoutes;
