
import React, { createContext, useState } from 'react'
import { useFecthUsers } from '../hooks/useFecthUsers';

export const AppContext = createContext();

export function AppProvider({ children }) {

    const [openAddUser, setOpenAddUser] = useState(false)
    const [openEditUser, setOpenEditUser] = useState(false)
    const [userID, setUserID] = useState({})

    const { data: users, loading: loadingUsers } = useFecthUsers('GET_users')

    const { data: profiles, loading: loadingProfiles } = useFecthUsers('GET_profiles')

    return(
        <AppContext.Provider
            value={{
                openAddUser,
                setOpenAddUser,
                openEditUser,
                setOpenEditUser,
                users,
                loadingUsers,
                profiles,
                loadingProfiles,
                userID,
                setUserID

            }}
        
        >
            {children}
        </AppContext.Provider>
    )


}