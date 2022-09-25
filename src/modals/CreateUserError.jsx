import iconUsers from '../assets/icons/UsersN.svg'
import '../styles/CreateUserError.scss'

export const CreateUserError = ({ setOpenModal }) => {
  const handleSetOpenModal = () => {
    setOpenModal(e => !e)
  }
  return (
    <div className='CreateUserError'>
      <div className='icon'>
        <img src={iconUsers} alt="" />
      </div>
      <p className='msg1'>UPS!</p>
      <p className='msg2'>El usuario no puede ser creado</p>
      <p className='msg3'>¡Inténtalo nuevamente!</p>
      <p className='msg4'></p>
      <button onClick={handleSetOpenModal}>Continuar</button>
    </div>
  )
}
