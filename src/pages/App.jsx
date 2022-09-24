import { FilterSearch } from "../components/FilterSearch"
import { Header } from "../components/Header"
import { LateralLeft } from "../components/LateralLeft"
import { RowUser } from "../components/RowUser"
import { UsersList } from "../components/UsersList"
import { useFecthUsers } from "../hooks/useFecthUsers"

export const App = () => {
  const { data: profiles, loading: loadingProfiles } = useFecthUsers('GET_profiles')

  const { data: users, loading:loadingUsers } = useFecthUsers('GET_users')
  console.log(loadingProfiles)
  return (
    <div className="AppContainer">
      <LateralLeft />
      <Header />
      <FilterSearch />
 
      {

        !(loadingProfiles && loadingUsers) && (
          <UsersList>
            {
              users.map((user, index) => (
                <RowUser
                  key={user.id}
                  index={index}
                  user={user}
                  profiles={profiles}

                />
              ))
            }
          </UsersList>
        )
      }

    </div>
  )
}
