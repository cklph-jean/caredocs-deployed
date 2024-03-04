

import { createContext, useState } from "react"
import { axiosInstance } from "../store/apis/axios";
import { API_ENDPOINTS } from "../config";

const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null)

    const login = async ({ ...data }) => {
        try {
            // perform login here
            const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            // check if successfully logged in 
            let token = response.headers?.authorization;

            if (token) {
                // TODO: set to async storage
                
                
                // set to state
                setToken(token)
            }

        } catch (error) {
            console.error(error)
        }

    }

    const logout = () => {
        return 'Logged Out!';
    }


    return <AuthContext.Provider
        value={{ login, logout, token }}
    >
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext);