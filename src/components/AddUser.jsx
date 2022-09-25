
import { useEffect } from 'react'
import iconClose from '../assets/icons/X.svg'
import { useFecthUsers } from '../hooks/useFecthUsers'
import '../styles/AddUser.scss'
const urlGet = 'http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api'


export const AddUser = ({ setOpenAddUser }) => {
    const { postUser } = useFecthUsers('POST')

    const { data: profiles, loading: loadingProfiles } = useFecthUsers('GET_profiles')

    const handleSubmit = (e) => {
        e.preventDefault()

        const profile = profiles.find(p =>(p.name.toLowerCase()===e.target[2].value.toLowerCase()))
        
        const user = {
            name:e.target[0].value,
            email:e.target[1].value,
            profile: profile.id
        }

        postUser(urlGet,user)

    }

    const handleSetOpenAddUser = () => {
        setOpenAddUser(e => !e)
    }
    return (
        <div className='bg'>
            <div className="AddUser">
                <div className="header">
                    <h4>Agregar Nuevo Usuario</h4>
                    <div onClick={handleSetOpenAddUser}>
                        <img src={iconClose} alt="" />
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="setNameUser">Nombre <span>*</span></label>
                    <input id="setNameUser" type="text" placeholder="Nombre de Usuario" required />

                    <label htmlFor="setEmail">Correo Electrónico <span>*</span></label>
                    <input id="setEmail" type="email" placeholder="Correo Electrónico" required />

                    <label htmlFor="setProfile">Perfil <span>*</span></label>
                    <input id="setProfile" list="list-profiles" placeholder="Seleccionar" required />
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

                    <div className="buttons">
                        <button type="submit">Aceptar</button>
                        <button type="button" onClick={handleSetOpenAddUser}>Cancelar</button>
                    </div>
                </form>
            </div></div>

    )
}
