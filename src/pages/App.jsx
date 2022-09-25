import { useContext } from "react"
import { AddUser } from "../components/AddUser"
import { EditUser } from "../components/EditUser"
import { FilterSearch } from "../components/FilterSearch"
import { Header } from "../components/Header"
import { LateralLeft } from "../components/LateralLeft"
import { SeeUser } from "../components/SeeUser"
import { UsersList } from "../components/UsersList"
import { AppContext } from "../context/AppContext"
import { DeleteUserModal } from "../modals/DeleteUserModal"
import { LayoutModal } from "../modals/LayoutModal"

export const App = () => {

  const { openAddUser, openEditUser,openSeeUser, loadingUsers, openDeleteUser } = useContext(AppContext)

  return (
    <>
      <LateralLeft />
      <Header />
      <FilterSearch />
      {
        !(loadingUsers) && (
          <UsersList />
        )
      }
      {openAddUser && <AddUser />}
      {openEditUser && <EditUser />}  
      {openSeeUser && <SeeUser/>}

      {openDeleteUser &&
        <LayoutModal>
          <DeleteUserModal />
        </LayoutModal>
      }

    </>
  )
}
