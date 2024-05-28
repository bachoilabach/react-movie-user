import React, { useState } from 'react';

const UserContext = React.createContext({ name: '', auth: false });

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({isAuthenticated: false, token: '', account: {}});

	const loginContext = (userData) => {
		setUser(userData)
	};

	const logout = () => {
		setUser({isAuthenticated: false, token: '', account: {}})
		localStorage.removeItem('jwt')
	};

	return <>
        <UserContext.Provider value={{user, loginContext, logout}}>
            {children}
        </UserContext.Provider>
    </>;
};

export {UserContext, UserProvider}