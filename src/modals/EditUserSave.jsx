
import iconAlert from '../assets/icons/Alert.svg'


import '../styles/EditUserSave.scss'

export const EditUserSave = ({submitUpdate,setOpenModal,setCheckPut}) => {

    const handleClickPut = () => {
        submitUpdate()
        setCheckPut(e=>!e)
    }

    const handleOpenModal = () => {
        setOpenModal(e=>!e)
    }
    return (
        <div className='EditUserSave'>
            <div className='icon'>
                <img src={iconAlert} alt="" />
            </div>
            <p className='msg1'>¿Desea guardar los cambios?</p>
            <p className='msg2'>Después de aprobar la acción;<br /> No se puede deshacer</p>
            <div>
                <button onClick={handleClickPut}>Aceptar</button>
                <button onClick={handleOpenModal}>Cancelar</button>
            </div>

        </div>
    )
}
