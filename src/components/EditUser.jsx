import { useContext, useState } from 'react'
import iconClose from '../assets/icons/X.svg'
import { AppContext } from '../context/AppContext'
import { profile } from '../helpers'
import { useFecthUsers } from '../hooks/useFecthUsers'
import { EditUserError } from '../modals/EditUserError'
import { EditUserGood } from '../modals/EditUserGood'
import { EditUserSave } from '../modals/EditUserSave'
import { LayoutModal } from '../modals/LayoutModal'

const urlGet = 'http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/1152215097/users/'
export const EditUser = () => {


    const { profiles, loadingProfiles, setOpenEditUser, userID } = useContext(AppContext)
    const { data: dataPutUser, putUser, loading } = useFecthUsers('PUT')
    const [openModal, setOpenModal] = useState(false)
    const [checkPut, setCheckPut] = useState(false)
    const [userPut, setUserPut] = useState({})
    

    const handleSubmit = (e) => {
        e.preventDefault()

        const prof = profiles.find(p => (p.name.toLowerCase() === e.target[2].value.toLowerCase()))

        const state = e.target[3].value === 'Activo' ? 1 : 0

        const user = {
            name: e.target[0].value,
            email: e.target[1].value,
            profile: prof.id,
            state
        }
        setUserPut(user)
        setOpenModal(true)
    }




    const handleSetOpenEditUser = () => {
        setOpenEditUser(e => !e)
    }


    const submitUpdate = () => {
        const urlID = urlGet + userID.id
        putUser(urlID, userPut)

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
                        <button type="submit" >Guardar Cambios</button>
                        <button type="button" onClick={handleSetOpenEditUser}>Cancelar</button>
                    </div>
                </form>
            </div>

            {
                
                openModal && (
                    <LayoutModal>
                        {!checkPut && <EditUserSave
                            submitUpdate={submitUpdate}
                            setCheckPut={setCheckPut}
                            setOpenModal={setOpenModal} />
                        }
                        {checkPut && (
                            !loading && (
                                dataPutUser?.status ? (

                                <EditUserGood setOpenEditUser={setOpenEditUser} />
                                    
                                ):(
                                 <EditUserError setOpenModal={setOpenModal}/>
                                )

                            )
                            
                        )
                        }

                    </LayoutModal>
                )

            }

        </div>
    )
}
