import iconClean from '../assets/icons/Clean.svg'
import '../styles/FilterSearch.scss'
export const FilterSearch = () => {
    return (
        <div className="FilterSearch">
            <div className='FilterSearch-sup'>
                <h2>Filtros de Búsqueda</h2>
                <button>
                    <img src={iconClean} alt="" />
                    <p>Limpiar Filtros</p>
                </button>
            </div>

            <div className='FilterSearch-form'>
                <form action="">
                    <div className='form-left'>
                        <div className='form-input'>
                            <label htmlFor="name" >Nombre</label>
                            <input type="text" id='name' placeholder='Nombre de Usuario'/>
                        </div>
                        <div className='form-input'>
                            <label htmlFor="profile">Perfil</label>
                            <select name="profile" id="profile">
                                <option value="perfil" className='op-ph' hidden>Perfil</option>
                                <option value="Practicante">Practicante</option>
                                <option value="Desarrollador">Desarrollador</option>
                                <option value="Vendedor">Vendedor</option>
                                <option value="Administrador">Administrador</option>
                            </select>
                        </div>

                    </div>
                    <div className='form-rigth'>
                        <div className='form-input'>
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" id='email' placeholder='Correo Electrónico'/>
                        </div>
                        <div className='form-input'>
                            <label htmlFor="state">Estado</label>
                            <select name="state" id="state">
                                <option value="estado" className='op-ph' hidden>Estado</option>
                                <option value={1}>Activo</option>
                                <option value={0}>Inactivo</option>

                            </select>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}
