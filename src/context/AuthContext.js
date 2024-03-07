// Will delete this. -> We are using Zustand; go to -> store/apis/caredocs/auth.js

import { createContext, useState } from "react"
import { axiosInstance } from "../store/apis/axios";
import { API_ENDPOINTS } from "../config";

const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [error, setError] = useState();

    const login = async ({ ...data }) => {
        try {
            // perform login here
            const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, {
                user: data
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response.result);

            return response

        } catch (error) {

            setError(error)
            console.error(error)
            throw (error)
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