
import React, { createContext, useState } from 'react'
import { useFecthUsers } from '../hooks/useFecthUsers';

export const AppContext = createContext();

export function AppProvider({ children }) {

    const [openAddUser, setOpenAddUser] = useState(false)
    const [openEditUser, setOpenEditUser] = useState(false)
    const [openDeleteUser, setOpenDeleteUser] = useState(false)
    const [openSeeUser, setOpenSeeUser] = useState(false)
    const [pagination, setPagination] = useState(10)

    const [userID, setUserID] = useState({})

    const { data: users, loading: loadingUsers } = useFecthUsers('GET_users')

    const { data: profiles, loading: loadingProfiles } = useFecthUsers('GET_profiles')


    users.sort((user1, user2) => {
        return (new Date(user2.updated_at) - new Date(user1.updated_at))
    })

    return (
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
                setUserID,
                openDeleteUser,
                setOpenDeleteUser,
                openSeeUser,
                setOpenSeeUser,
                pagination, 
                setPagination
            }}

        >
            {children}
        </AppContext.Provider>
    )


}