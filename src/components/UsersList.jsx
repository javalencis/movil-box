
import { useEffect, useState } from "react"
import { RowUser } from "./RowUser"



export const UsersList = ({users}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.select.value)
    }
    return (
        <div>
            <div>
                <h3>Usuarios</h3>   
                <div>
                    <button>Agregar Usuario</button>
                    <button>Exportar</button>
                </div>
            </div>
            <div>
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
                <tbody>
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
                        users?.map((user, index) => (
                            <RowUser key={user.id} index={index} user={user} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
