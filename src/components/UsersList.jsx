
import { RowUser } from "./RowUser"

import iconUp from '../assets/icons/ChevronUP.svg'
import iconRefresh from '../assets/icons/Refresh.svg'
import '../styles/UsersList.scss'
import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"
import { Pagination } from "./Pagination"

export const UsersList = ({ searchValue }) => {

    const { users, setOpenAddUser, loadingProfiles, pagination, setPagination } = useContext(AppContext)

    const [offset, setOffset] = useState(0)

    let usersList = []

    let usersAux = []

    
    if (searchValue.value.toString().length >= 1) {
       
        if (searchValue.field === 'name') {
            usersAux = users.filter(u => u.name.toLowerCase().includes(searchValue.value.toLowerCase()))
        } else if (searchValue.field === 'email') {
            usersAux = users.filter(u => u.email.toLowerCase().includes(searchValue.value.toLowerCase()))
        } else if (searchValue.field === 'states') {
            usersAux = users.filter(u => u.state === searchValue.value)
        } else if (searchValue.field === 'profiles') {

            usersAux = users.filter(u => u.profile === searchValue.value)
        }

    } else {
        usersAux = users
    }

    if (usersAux.length >= pagination) {

        usersList = usersAux.slice(pagination * offset, (pagination) * (offset + 1))
    } else {
        usersList = usersAux
    }





    const handleSubmit = (e) => {
        e.preventDefault()
        const number = parseInt(e.target[0].value)
        setPagination(number)

    }

    const handleOpenAddUSer = () => {
        setOpenAddUser(e => !e)
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
                            <input type="text" placeholder="Buscar" />
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
                                <th>Correo <br /> Electrónico</th>
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

            <Pagination usersAux={usersAux} offset={offset} setOffset={setOffset} />

        </div>
    )
}
