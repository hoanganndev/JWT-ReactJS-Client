import React, { useEffect, useState } from "react";
import { getUserAccount_Client } from "../services/userService_Client";

const UserContext = React.createContext(null);

function UserProvider({ children }) {
    const dataUserDefault = {
        isLoading: true,
        isAuthenticated: false,
        token: "",
        account: {},
    };
    const [user, setUser] = useState(dataUserDefault);

    // This function is called in Login component
    const loginContext = userData => {
        setUser({ ...userData, isLoading: false });
    };

    const logoutContext = () => {
        setUser({ ...dataUserDefault, isLoading: false });
    };

    const fetchUser = async () => {
        try {
            let res = await getUserAccount_Client();
            if (res && res.errorCode === 0) {
                let { access_token, groupWithRoles, email, username } =
                    res.data;
                let data = {
                    isLoading: false,
                    isAuthenticated: true,
                    token: access_token,
                    account: { groupWithRoles, email, username },
                };
                setUser(data);
            } else {
                setUser({ ...dataUserDefault, isLoading: false });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loginContext, logoutContext }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };
/**
 * UserProvider is wrapped outside component app
 * UserContext is used to get value global in context
 * EX: const { user } = React.useContext(UserContext);
 */
