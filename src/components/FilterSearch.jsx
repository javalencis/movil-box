import iconClean from '../assets/icons/Clean.svg'
import '../styles/FilterSearch.scss'
export const FilterSearch = () => {
    return (
        <div className="FilterSearch">
            <div className='FilterSearch-sup'>
                <h3>Filtros de Búsqueda</h3>
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
                            <label htmlFor="profiles">Perfil</label>
                            <input list='list-profiles' id='profiles' name='profile' placeholder='Perfil'/>
                            <datalist id="list-profiles">
                                <option value="Practicante"/>
                                <option value="Desarrollador"/>
                                <option value="Vendedor"/>
                                <option value="Administrador"/>
                            </datalist>
                        </div>

                    </div>
                    <div className='form-rigth'>
                        <div className='form-input'>
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" id='email' placeholder='Correo Electrónico'/>
                        </div>
                        <div className='form-input'>
                            <label htmlFor="states">Estado</label>
                            <input list='list-states' id="states" name='state' placeholder='Estado'/>
                            <datalist id="list-states" >
                        
                                <option value="Activo"/>
                                <option value="Inactivo"/>

                            </datalist>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}
