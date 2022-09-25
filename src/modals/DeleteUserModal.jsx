import { useContext } from 'react'
import iconTrash from '../assets/icons/Trash.svg'
import { AppContext } from '../context/AppContext'
import { useFecthUsers } from '../hooks/useFecthUsers'
import '../styles/DeleteUserModal.scss'



export const DeleteUserModal = () => {
    const { userID, setOpenDeleteUser } = useContext(AppContext)

    const { delFecthUser } = useFecthUsers('DEL', userID.id)

    const handleClickDelete = () => {
        delFecthUser();
        setOpenDeleteUser(e => !e)
    }

    const handleCloseDelete = () => {
        setOpenDeleteUser(e => !e)
    }

    return (
        <div className="DeleteUserModal">
            <div className='icon'>
                <img src={iconTrash} alt="" />
            </div>
            <p className='msg1'>¿Estas seguro de eliminar <br /> el usuario seleccionado?</p>

            <div>
                <button onClick={handleClickDelete}>Aceptar</button>
                <button onClick={handleCloseDelete}>Cancelar</button>
            </div>

        </div>
    )
}
