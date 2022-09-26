
import { useFecthUsers } from '../hooks/useFecthUsers'
import { CreateUser } from '../modals/CreateUser'
import { LayoutModal } from '../modals/LayoutModal'
import iconClose from '../assets/icons/X.svg'
import '../styles/AddUser.scss'
import { useContext, useState } from 'react'
import { CreateUserError } from '../modals/CreateUserError'
import { CreateUserCancel } from '../modals/CreateUserCancel'
import { AppContext } from '../context/AppContext'
const urlGet = 'http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api'

export const AddUser = () => {
    const {setOpenAddUser,profiles,loadingProfiles} = useContext(AppContext)

    const [openModal, setOpenModal] = useState(false)
    const [openModalCancel, setOpenModalCancel] = useState(false)

    const { data: dataPost, postUser } = useFecthUsers('POST')


    const handleSubmit = (e) => {
        e.preventDefault()

        const profile = profiles.find(p => (p.name.toLowerCase() === e.target[2].value.toLowerCase()))

        const user = {
            name: e.target[0].value,
            email: e.target[1].value,
            profile: profile.id
        }

        postUser(urlGet, user)
        setOpenModal(true)
    }

    const handleSetOpenAddUser = () => {
        setOpenAddUser(e => !e)
    }

    const handleOpenModelCancel = () => {

        setOpenModalCancel(true)

    }
    return (
        <div className='bg'>
            <div className="Container">
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
                        <button type="button" onClick={handleOpenModelCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
            {
                openModal && (
                    <LayoutModal>
                        {dataPost.status && (
                            <CreateUser 
                                email={dataPost.user.email}
                                setOpenAddUser={setOpenAddUser} />)}
                        {!dataPost.status && (
                            <CreateUserError 
                                setOpenModal={setOpenModal} />)}
                    </LayoutModal>
                )

            }

            {
                !openModal && (openModalCancel && (
                    <LayoutModal>
                        <CreateUserCancel
                            setOpenAddUser={setOpenAddUser}
                            setOpenModalCancel={setOpenModalCancel}
                        />
                    </LayoutModal>
                )
                )
            }

        </div>

    )
}
