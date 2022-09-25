import { FilterSearch } from "../components/FilterSearch"
import { Header } from "../components/Header"
import { LateralLeft } from "../components/LateralLeft"
import { UsersList } from "../components/UsersList"
import { useFecthUsers } from "../hooks/useFecthUsers"

export const App = () => {


  const { data: users, loading: loadingUsers } = useFecthUsers('GET_users')

  return (
    <div className="AppContainer">
      <LateralLeft />
      <Header />  
      <FilterSearch />

      {
        !(loadingUsers) && (
          <UsersList users={users} />
        )
      }

    </div>
  )
}
