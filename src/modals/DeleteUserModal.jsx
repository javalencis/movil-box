import { useContext } from 'react'
import iconTrash from '../assets/icons/Trash.svg'
import { AppContext } from '../context/AppContext'
import { useFecthUsers } from '../hooks/useFecthUsers'
import '../styles/DeleteUserModal.scss'



export const DeleteUserModal = () => {
    const { userID, setOpenDeleteUser, setRefresh } = useContext(AppContext)

    const { delFecthUser } = useFecthUsers('DEL', userID.id)

    const handleClickDelete = () => {
        delFecthUser().then(() => {
            setOpenDeleteUser(e => !e)
            setRefresh(r => !r)
        });

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
                <button onClick={handleClickDelete}>Eliminar</button>
                <button onClick={handleCloseDelete}>Cancelar</button>
            </div>

        </div>
    )
}
