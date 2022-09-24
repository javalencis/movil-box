import { FilterSearch } from "../components/FilterSearch"
import { Header } from "../components/Header"
import { LateralLeft } from "../components/LateralLeft"
import { UsersList } from "../components/UsersList"
import { useFecthUsers } from "../hooks/useFecthUsers"

export const App = () => {
  const users = useFecthUsers('GET')
  
  return (
    <div className="AppContainer">
        <LateralLeft/>
        <Header/>
        <FilterSearch/>
        <UsersList users={users}/>
    </div>
  )
}
