import iconUsers from '../assets/icons/UsersN.svg'
import '../styles/CreateUserError.scss'

export const EditUserError = ({ setOpenModal }) => {
  const handleSetOpenModal = () => {
    setOpenModal(e => !e)
  }
  return (
    <div className='CreateUserError'>
      <div className='icon'>
        <img src={iconUsers} alt="" />
      </div>
      <p className='msg1'>UPS!</p>
      <p className='msg2'>El usuario no se puede editar</p>
      <p className='msg3'>El correo ya se encuentra registrado</p>
      <p className='msg4'></p>
      <button onClick={handleSetOpenModal}>Continuar</button>
    </div>
  )
}
