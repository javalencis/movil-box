
import { RowUser } from "./RowUser"
import '../styles/UsersList.scss'
import { useFecthUsers } from "../hooks/useFecthUsers"

export const UsersList = ({ users }) => {

    const { data: profiles, loading: loadingProfiles } = useFecthUsers('GET_profiles')
    
    console.log(loadingProfiles)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
    }

    return (
        <div className="UsersList">
            <div>
                <h3>Usuarios</h3>
                <div>
                    <button>Agregar Usuario</button>
                    <button>Exportar</button>
                </div>
            </div>
            <div className="UsersList-form">
                <form onSubmit={handleSubmit}>
                    <select name="selects" id="select-cant">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    <button type="submit">
                        C
                    </button>
                </form>
                <div>
                    <label >
                        Buscar:
                        <input type="text" placeholder="Buscar" />
                    </label>
                </div>
            </div>

            <table>
                {
                    !loadingProfiles && (
                        <tbody className="UsersList-table">
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Correo <br /> Electrónico</th>
                                <th>Perfil</th>
                                <th>Estado</th>
                                <th>Fecha <br />Modificacion</th>
                                <th>Acciones</th>
                            </tr>
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
                        </tbody>

                    )
                }

            </table>
        </div>
    )
}
