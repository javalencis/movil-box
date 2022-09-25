import { useContext, useState } from 'react'
import iconClose from '../assets/icons/X.svg'
import { AppContext } from '../context/AppContext'
import { profile } from '../helpers'
import { useFecthUsers } from '../hooks/useFecthUsers'

const urlGet = 'http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/1152215097/users/'
export const EditUser = () => {


    const { profiles, loadingProfiles, setOpenEditUser, userID } = useContext(AppContext)

    const {data: dataPut , putUser} = useFecthUsers('PUT')

    const handleSubmit = (e) => {
        e.preventDefault()

        const prof = profiles.find(p => (p.name.toLowerCase() === e.target[2].value.toLowerCase()))

        const state = e.target[2].value === 'Activo' ? 1: 0

        const user = {
            name: e.target[0].value,
            email:e.target[1].value,
            profile: prof.id,
            state
        }
        const urlID = urlGet + userID.id
        putUser(urlID,user)
    }

    const handleSetOpenEditUser = () => {
        setOpenEditUser(e => !e)
    }

    return (
        <div className='bg'>
            <div className="Container">
                <div className="header">
                    <h4>Agregar Nuevo Usuario</h4>
                    <div onClick={handleSetOpenEditUser}>
                        <img src={iconClose} alt="" />
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="setNameUser">Nombre <span>*</span></label>
                    <input id="setNameUser" type="text" placeholder="Nombre de Usuario" required defaultValue={userID.name} />

                    <label htmlFor="setEmail">Correo Electrónico <span>*</span></label>
                    <input id="setEmail" type="email" placeholder="Correo Electrónico" required defaultValue={userID.email} />

                    <label htmlFor="setProfile">Perfil <span>*</span></label>
                    <input id="setProfile" list="list-profiles" placeholder="Seleccionar" required defaultValue={profile(userID, profiles)} />
                    {

                        !loadingProfiles && (
                            <datalist id="list-profiles">
                                {profiles.map(p => (
                                    <option key={p.id} value={p.name} />
                                ))

                                }
                            </datalist>
                        )
                    }

                    <label htmlFor="setState">Estado <span>*</span></label>
                    <input id="setState" list="list-states" placeholder="Seleccionar" required defaultValue={userID.state ? 'Activo' : 'Inactivo'} />
                    <datalist id='list-states'>
                        <option value="Activo" />
                        <option value="Inactivo" />
                    </datalist>

                    <div className="buttons">
                        <button type="submit">Guardar Cambios</button>
                        <button type="button" onClick={handleSetOpenEditUser}>Cancelar</button>
                    </div>
                </form>
            </div></div>
    )
}
