import { useContext } from 'react'
import iconChangeOk from '../assets/icons/ChangeOk.svg'
import { AppContext } from '../context/AppContext'
import '../styles/EditUserGood.scss'

export const EditUserGood = ({setOpenEditUser}) => {
    const {setRefresh} = useContext(AppContext)
    const handleClickContinue = () => {
        setOpenEditUser(e=>!e)
        setRefresh(r=>!r)
    }

    return (
        <div className='EditUserGood'>
            <div className='icon'>
                <img src={iconChangeOk} alt="" />
            </div>
            <p className='msg1'>MUY BIEN!</p>
            <p className='msg2'>Los cambios han sido guardados<br /> satisfactoriamente</p>
  
            <button onClick={handleClickContinue}>Continuar</button>
      
    

        </div>
    )
}
