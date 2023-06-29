import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
	const [isAuth, setIsAuth] = useState(false);

	function login () {
        setUser({
            username: "Ayuuub",
            email: "ayoub_m@outlook.fr"
        })
        setIsAuth(!isAuth)
    }

	return (
		<AuthContext.Provider value={{ isAuth, login }}>
			{children}
		</AuthContext.Provider>
	);
};