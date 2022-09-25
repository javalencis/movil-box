import '../styles/CreateUserCancel.scss'
import iconWarning from '../assets/icons/Warning.svg'
export const CreateUserCancel = ({ setOpenAddUser,setOpenModalCancel }) => {
    const handleSetOpenAddUser = () => {
        setOpenAddUser(e=>!e)
    }

    const handleSetOpenModalCancel = () => {
        setOpenModalCancel(e=>!e)
    }

    return (
        <div className='CreateUserCancel'>
            <div className='icon'>
                <img src={iconWarning} alt="" />
            </div>
            <p className='msg1'>¿Estas seguro de cancelar la creación de usuario?</p>
            <p className='msg2'>La informacion diligenciada se perderá <br /> Esta acción es irreversible</p>
            <div>
                <button onClick={handleSetOpenAddUser}>Continuar</button>
                <button onClick={handleSetOpenModalCancel}>Cancelar</button>
            </div>

        </div>
    )
}
