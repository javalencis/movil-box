import { useContext } from 'react'
import iconClose from '../assets/icons/X.svg'
import { AppContext } from '../context/AppContext'
import {profile} from '../helpers'


export const EditUser = () => {

    const {profiles,loadingProfiles,setOpenEditUser,userID} = useContext(AppContext)

    

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

                <form >
                    <label htmlFor="setNameUser">Nombre <span>*</span></label>
                    <input id="setNameUser" type="text" placeholder="Nombre de Usuario" required DefaulValue={userID.name}/>

                    <label htmlFor="setEmail">Correo Electrónico <span>*</span></label>
                    <input id="setEmail" type="email" placeholder="Correo Electrónico" required DefaulValue={userID.email}/>

                    <label htmlFor="setProfile">Perfil <span>*</span></label>
                    <input id="setProfile" list="list-profiles" placeholder="Seleccionar" required DefaulValue={profile(userID,profiles)}/>
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
                    <input id="setState" list="list-states" placeholder="Seleccionar" required DefaulValue={userID.state ? 'Activo' : 'Inactivo'}/>
                    <datalist id='list-states'>
                        <option value="Activo"/>
                        <option value="Inactivo"/>
                    </datalist>

                    <div className="buttons">
                        <button type="submit">Guardar Cambios</button>
                        <button type="button" >Cancelar</button>
                    </div>
                </form>
            </div></div>
    )
}
