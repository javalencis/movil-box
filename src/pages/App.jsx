import { useState } from "react"
import { AddUser } from "../components/AddUser"
import { FilterSearch } from "../components/FilterSearch"
import { Header } from "../components/Header"
import { LateralLeft } from "../components/LateralLeft"
import { UsersList } from "../components/UsersList"
import { useFecthUsers } from "../hooks/useFecthUsers"

export const App = () => {

  const [openAddUser, setOpenAddUser] = useState(false)

  const { data: users, loading: loadingUsers } = useFecthUsers('GET_users')

  return (
    <>
      <LateralLeft />
      <Header />  
      <FilterSearch />
      {
        !(loadingUsers) && (
          <UsersList 
            users={users} 
            setOpenAddUser={setOpenAddUser}
            />
        )
      }
      {
        openAddUser &&  <AddUser setOpenAddUser={setOpenAddUser}/>
      }
      
    </>
  )
}
