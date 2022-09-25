import iconUsers from '../assets/icons/Users.svg'
import '../styles/CreateUser.scss'
export const CreateUser = ({ email, setOpenAddUser }) => {

    const handleSetOpenAddUser = () => {
        setOpenAddUser(e=>!e)
    }
    return (
        <div className='CreateUser'>
            <div className='icon'>
                <img src={iconUsers} alt="" />
            </div>
            <p className='msg1'>MUY BIEN!</p>
            <p className='msg2'>¡El usuario ha sido creado satisfatoriamente!</p>
            <p className='msg3'>Hemos enviado un correo de activación a:</p>
            <p className='msg4'>{email}</p>
            <button onClick={handleSetOpenAddUser}>Continuar</button>
        </div>
    )
}
