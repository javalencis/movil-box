import { useContext, useState } from 'react'
import iconClean from '../assets/icons/Clean.svg'
import { AppContext } from '../context/AppContext'
import '../styles/FilterSearch.scss'

const defaultForm = {
    name: "", 
    email: "", 
    profile: "", 
    state: ""
}


export const FilterSearch = ({ setSearchValue }) => {
    const { profiles, loadingProfiles } = useContext(AppContext)
    const [valueName, setValueName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [valueState, setValueState] = useState('')
    const [valueProfiles, setValueProfile] = useState('')


    const handleValueName = (e) => {
        setSearchValue((m) => ({ ...m, name: e.target.value }))
        setValueName(e.target.value)
    }


    const handleValueEmail = (e) => {
        setSearchValue((m) => ({ ...m, email: e.target.value }))
        setValueEmail(e.target.value)
    }


    const handleValueState = (e) => {


        const state = ()=> {
            if(e.target.value === 'Activo'){
                return 1
            }else if(e.target.value === 'Inactivo'){
                return 0
            }else{
                return ""
            }

        }
  
        setSearchValue((m) => ({ ...m, state: state() }))
        setValueState(e.target.value)
    }


    const handleValueProfile = (e) => {
        const prof = profiles.find(p => (p.name.toLowerCase() === e.target.value.toLowerCase()))
        if (prof) {
            
            setSearchValue((m) => ({ ...m, profile: prof.id }))
        }else{
            setSearchValue((m) => ({ ...m, profile: ''}))
        }
        setValueProfile(e.target.value)
    }


    const handleClean = () => {
        setValueName("")
        setValueEmail("")
        setValueState("")
        setValueProfile("")
        setSearchValue(defaultForm)
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
                <form>
                    <div className='form-left'>
                        <div className='form-input'>
                            <label htmlFor="name" >Nombre</label>
                            <input type="text" id='name' placeholder='Nombre de Usuario' onChange={handleValueName} value={valueName} />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="profiles">Perfil</label>
                            <input list='list-profiles' id='profiles' name='profile' placeholder='Perfil' onChange={handleValueProfile} value={valueProfiles} />
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
                            <input type="email" id='email' placeholder='Correo Electrónico' onChange={handleValueEmail} value={valueEmail} />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="states">Estado</label>
                            <input list='list-states' id="states" name='state' placeholder='Estado' onChange={handleValueState} value={valueState} />
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
