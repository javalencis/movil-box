
import React, { createContext, useEffect, useState } from 'react'
import { useFecthUsers } from '../hooks/useFecthUsers';

export const AppContext = createContext();

export function AppProvider({ children }) {

    const [openAddUser, setOpenAddUser] = useState(false)
    const [openEditUser, setOpenEditUser] = useState(false)
    const [openDeleteUser, setOpenDeleteUser] = useState(false)
    const [openSeeUser, setOpenSeeUser] = useState(false)
    const [pagination, setPagination] = useState(10)

    const [refresh, setRefresh] = useState(false)

    const [userID, setUserID] = useState({})

    const { data: users, loading: loadingUsers,getFecthUsers } = useFecthUsers('GET_users')

    const { data: profiles, loading: loadingProfiles } = useFecthUsers('GET_profiles')

    useEffect(()=>{
        getFecthUsers()

    },[refresh])

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
                setPagination,
                setRefresh
            }}

        >
            {children}
        </AppContext.Provider>
    )


}