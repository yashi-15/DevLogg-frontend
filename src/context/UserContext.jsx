import { createContext, useEffect, useState } from "react";
import { lookInSession } from "../common/sessions";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [userAuth, setUserAuth] = useState({});

    useEffect(()=> {
        let userInSession = lookInSession('user')
        userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth({access_token: null})
    }, [])

    return (
        <UserContext.Provider value={{userAuth, setUserAuth}}>
            {children}
        </UserContext.Provider>
    )
}

