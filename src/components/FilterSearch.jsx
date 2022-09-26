import { useContext, useState } from 'react'
import iconClean from '../assets/icons/Clean.svg'
import { AppContext } from '../context/AppContext'
import '../styles/FilterSearch.scss'
export const FilterSearch = ({ setSearchValue }) => {
    const { profiles, loadingProfiles } = useContext(AppContext)
    const [valueForm,setValueForm] = useState('')



    const handleChangeForm = (e) => {
        setValueForm(e.target.value)
        let value = ''
        if (e.target.id === 'profiles') {

            const prof = profiles.find(p => (p.name.toLowerCase() === e.target.value.toLowerCase()))
            if (prof) {
                value = prof.id
            }

        } else if (e.target.id === 'states') {

            const state = e.target.value === 'Activo' ? 1 : 0

            value = state
        } else {
            value = e.target.value
        }


        setSearchValue({
            field: e.target.id,
            value
        })

    }

    const handleClean = () => {
        setValueForm('')
    }

    return (
        <div className="FilterSearch">
            <div className='FilterSearch-sup'>
                <h3>Filtros de Búsqueda</h3>
                <button onClick={handleClean}>
                    <img src={iconClean} alt="" />
                    <p>Limpiar Filtros</p>
                </button>
            </div>

            <div className='FilterSearch-form'>
                <form onChange={handleChangeForm} value={valueForm}>
                    <div className='form-left'>
                        <div className='form-input'>
                            <label htmlFor="name" >Nombre</label>
                            <input type="text" id='name' placeholder='Nombre de Usuario' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="profiles">Perfil</label>
                            <input list='list-profiles' id='profiles' name='profile' placeholder='Perfil' />
                            <datalist id="list-profiles">
                                {

                                    !loadingProfiles && (
                                        <datalist id="list-profiles">
                                            {profiles.map(p => (
                                                <option key={p.id} value={p.name} />
                                            ))
                                            }
                                        </datalist>
                                    )
                                }
                            </datalist>
                        </div>

                    </div>
                    <div className='form-rigth'>
                        <div className='form-input'>
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" id='email' placeholder='Correo Electrónico' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="states">Estado</label>
                            <input list='list-states' id="states" name='state' placeholder='Estado' />
                            <datalist id="list-states" >

                                <option value="Activo" />
                                <option value="Inactivo" />

                            </datalist>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}
