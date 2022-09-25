import { useContext} from "react"
import { AddUser } from "../components/AddUser"
import { EditUser } from "../components/EditUser"
import { FilterSearch } from "../components/FilterSearch"
import { Header } from "../components/Header"
import { LateralLeft } from "../components/LateralLeft"
import { UsersList } from "../components/UsersList"
import { AppContext } from "../context/AppContext"

export const App = () => {

  const {openAddUser,openEditUser,loadingUsers} = useContext(AppContext)

  return (
    <>
      <LateralLeft />
      <Header />  
      <FilterSearch />
      {
        !(loadingUsers) && (
          <UsersList  />
        )
      }
      {
        openAddUser &&  <AddUser/>
      }
      {
        openEditUser &&  <EditUser/>
      }


      
    </>
  )
}
