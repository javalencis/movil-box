
import iconVisibility from '../assets/icons/Visibility.svg'
import iconEdit from '../assets/icons/Edit.svg'
import iconDelete from '../assets/icons/Delete.svg'

import '../styles/MenuCrud.scss'
import { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

export const MenuCrud = ({ user }) => {

  const { setOpenEditUser, setUserID, setOpenDeleteUser,setOpenSeeUser } = useContext(AppContext)

  useEffect(() => {
    setUserID(user)

  }, [])

  const handleOpenEditUser = () => {
    setOpenEditUser(e => !e)
  }

  const handleOpenDeleteUser = () => {
    setOpenDeleteUser(e => !e)
  }

  const handleOpenSeeUser = () => {
    setOpenSeeUser(e => !e)
  }
  return (
    <ul className='MenuCrud'>
      <li onClick={handleOpenSeeUser}><img src={iconVisibility} alt="" /><p>Ver</p></li>
      <li onClick={handleOpenEditUser}><img src={iconEdit} alt="" /><p>Editar</p></li>
      <li onClick={handleOpenDeleteUser}><img src={iconDelete} alt="" /><p>Eliminar</p></li>
    </ul>
  )
}
