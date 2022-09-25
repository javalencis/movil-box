
import iconVisibility from '../assets/icons/Visibility.svg'
import iconEdit from '../assets/icons/Edit.svg'
import iconDelete from '../assets/icons/Delete.svg'

import '../styles/MenuCrud.scss'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const MenuCrud = ({user}) => {

  const {setOpenEditUser,setUserID} = useContext(AppContext)
  
  const handleOpenEditUser = () => {
    setUserID(user)
    setOpenEditUser(e=>!e)
  }
  return (
    <ul className='MenuCrud'>
      <li><img src={iconVisibility} alt="" /><p>Ver</p></li>
      <li onClick={handleOpenEditUser}><img src={iconEdit} alt="" /><p>Editar</p></li>
      <li><img src={iconDelete} alt="" /><p>Eliminar</p></li>
    </ul>
  )
}
