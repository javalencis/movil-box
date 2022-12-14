
import { RowUser } from "./RowUser"
import iconUp from '../assets/icons/ChevronUP.svg'
import '../styles/UsersList.scss'
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import { Pagination } from "./Pagination"
import { filterSearchAll, filterSearchInputAll } from "../helpers"
import imgEmpty from '../assets/imgs/EmptyState.png'
import iconRefresh from '../assets/icons/Refresh.svg'



export const UsersList = ({ searchValue }) => {

    const { users, setOpenAddUser, loadingProfiles, pagination, setPagination } = useContext(AppContext)

    const [offset, setOffset] = useState(0)
    const [searchInput, setSearchInput] = useState('')
    const [usersAux, setUsersAux] = useState(users)

    let usersList = []

    const handleFilter = () => {
        setUsersAux(filterSearchAll(users, searchValue))
    }

    useEffect(() => {
        handleFilter()
    }, [searchValue])



    const handleSubmit = (e) => {
        e.preventDefault()
        const number = parseInt(e.target[0].value)
        setPagination(number)

    }

    const handleOpenAddUSer = () => {
        setOpenAddUser(e => !e)
    }
    const handleSearch = (e) => {

        let uAux = filterSearchAll(users, searchValue)
        setUsersAux(filterSearchInputAll(uAux, e.target.value))

        setSearchInput(e.target.value)

    }


    if (usersAux.length >= pagination) {

        usersList = usersAux.slice(pagination * offset, (pagination) * (offset + 1))
    } else {
        usersList = usersAux
    }

    return (
        <div className="UsersList">
            <div>
                <div className="UsersList-up">
                    <h3>USUARIOS</h3>
                    <div>
                        <button className="btAddUser" onClick={handleOpenAddUSer}>Agregar Usuario</button>
                        <button className="btExport">Exportar</button>
                    </div>
                </div>
                <div className="UsersList-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="select-cant">Ver</label>
                        <select name="selects" id="select-cant" defaultValue={10}>
                            <option value="5">5</option>
                            <option value="10" >10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>
                        <button type="submit">
                            <img src={iconRefresh} alt="" />
                        </button>
                    </form>
                    <div className="form--search">
                        <label >
                            Buscar
                            <input type="text" placeholder="Buscar" value={searchInput} onChange={handleSearch} />
                        </label>
                    </div>
                </div>
            </div>


            <table>
                {
                    !loadingProfiles && (
                        <tbody className="UsersList-table">
                            <tr className="table-headers">
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Correo <br /> Electr??nico</th>
                                <th>Perfil</th>
                                <th>Estado</th>
                                <th>Fecha <br />Modificacion</th>
                                <th>Acciones</th>
                            </tr>
                            {
                                usersList.map((user, index) => (
                                    <RowUser
                                        key={user.id}
                                        index={index + offset * pagination}
                                        user={user}
                                    />
                                ))
                            }

                        </tbody>

                    )
                }

            </table>
            {
                (usersList.length === 0) && (
                    <div className="ImgEmpty">

                        <img src={imgEmpty} />
                    </div>
                )
            }
            <Pagination usersAux={usersAux} offset={offset} setOffset={setOffset} />

        </div>
    )
}
