import { useContext } from 'react'
import iconClose from '../assets/icons/X.svg'
import { AppContext } from '../context/AppContext'
import { profile,formatDate } from '../helpers'

export const SeeUser = () => {

    const {setOpenSeeUser,userID,profiles} = useContext(AppContext)
    const handleSetOpenSeeUser = () => {
        setOpenSeeUser(e => !e)
    }


    return (
        <div className='bg'>
            <div className="Container">
                <div className="header">
                    <h4>Ver Usuario</h4>
                    <div onClick={handleSetOpenSeeUser}>
                        <img src={iconClose} alt="" />
                    </div>
                </div>

                <form>
                    <label htmlFor="setNameUser">Nombre</label>
                    <input id="setNameUser" type="text" placeholder="Nombre de Usuario" defaultValue={userID.name} disabled/>

                    <label htmlFor="setEmail">Correo Electrónico</label>

                    <input id="setEmail" type="email" placeholder="Correo Electrónico"  defaultValue={userID.email} disabled/>

                    <label htmlFor="setProfile">Perfil </label>
                    <input id="setProfile" type="text" placeholder="Seleccionar"  defaultValue={profile(userID, profiles)} disabled />
            

                    <label htmlFor="setState">Estado</label>
                    <input id="setState" type="text" placeholder="Seleccionar"  defaultValue={userID.state ? 'Activo' : 'Inactivo'} disabled/>

                    <label htmlFor="date">Fecha Modificación </label>
                    <input id="date" type="text" placeholder="Fecha modificación"  defaultValue={formatDate(userID.updated_at)} disabled />
            


                    <div className="buttons">
                        <button type="submit" style={{display:'none'}}>Guardar Cambios</button>
                        <button type="button" onClick={handleSetOpenSeeUser}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
