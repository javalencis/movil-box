
import iconClose from '../assets/icons/X.svg'
import '../styles/AddUser.scss'

export const AddUser = () => {

    return (
        <div className='bg'>
            <div className="AddUser">
                <div className="header">
                    <h4>Agregar Nuevo Usuario</h4>
                    <div>
                        <img src={iconClose} alt="" />
                    </div>
                </div>

                <form>
                    <label htmlFor="setNameUser">Nombre <span>*</span></label>
                    <input id="setNameUser" type="text" placeholder="Nombre de Usuario" />

                    <label htmlFor="setEmail">Correo Electrónico <span>*</span></label>
                    <input id="setEmail" type="email" placeholder="Correo Electrónico" />

                    <label htmlFor="setProfile">Perfil <span>*</span></label>
                    <input id="setProfile" list="list-profiles" placeholder="Seleccionar" />
                    <datalist id="list-profiles">
                        <option value="Practicante" />
                        <option value="Desarrollador" />
                        <option value="Vendedor" />
                        <option value="Administrador" />
                    </datalist>
                    <div className="buttons">
                        <button type="submit">Aceptar</button>
                        <button type="button">Cancelar</button>
                    </div>
                </form>
            </div></div>

    )
}
