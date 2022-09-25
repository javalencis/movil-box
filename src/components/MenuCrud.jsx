
import iconVisibility from '../assets/icons/Visibility.svg'
import iconEdit from '../assets/icons/Edit.svg'
import iconDelete from '../assets/icons/Delete.svg'

import '../styles/MenuCrud.scss'

export const MenuCrud = () => {
  return (
    <ul className='MenuCrud'>
        <li><img src={iconVisibility} alt="" /><p>Ver</p></li>
        <li><img src={iconEdit} alt="" /><p>Editar</p></li>
        <li><img src={iconDelete} alt="" /><p>Eliminar</p></li>
    </ul>
  )
}
