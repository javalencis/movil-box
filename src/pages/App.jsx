import { FilterSearch } from "../components/FilterSearch"
import { Header } from "../components/Header"
import { LateralLeft } from "../components/LateralLeft"

export const App = () => {
  return (
    <div className="AppContainer">
        <LateralLeft/>
        <Header/>
        <FilterSearch/>
    </div>
  )
}
