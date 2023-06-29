import { createContext, useState } from 'react';
import { UserLogin } from '../services/UserService';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
	const [isAuth, setIsAuth] = useState(false);

	function login (credentials) {
        UserLogin(credentials).then((response) => {
			console.log(response)
            setUser(response.data)
            setIsAuth(response.succes)
        })
    }

	return (
		<AuthContext.Provider value={{ user, isAuth, login }}>
			{children}
		</AuthContext.Provider>
	);
};