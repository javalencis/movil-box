
import iconDots from '../assets/icons/Dots.svg'
import '../styles/RowUser.scss'
import { MenuCrud } from './MenuCrud'


const profile = (user, profiles) => {
    const p = profiles.find(profile => profile.id === user.profile)
    return p.name.charAt(0).toUpperCase() + p.name.slice(1)
}

const logoName = (name) => {
    const pNames = name.split(' ')
    if (pNames.length == 1) {
        return pNames[0].charAt(0)
    } else {
        return pNames[0].charAt(0) + pNames[1].charAt(0)
    }

}

const formatDate = (date) => {
    const dateA = date.split('T')
    const fecha =  dateA[0].split('-').join('/')
    const hora = dateA[1].substring(0,5)

    return fecha +' - '+hora
}


export const RowUser = ({ user, index, profiles }) => {

    return (
        <tr className={`RowUser ${user.state ? 'activo' : 'inactivo'}`}>
            <td>{index+1}</td>
            <td className='RowUser-name'>
                <div className='logoName'>
                    {logoName(user.name)}
                </div>
                {user.name}</td>
            <td>{user.email}</td>
            <td>{profile(user, profiles)}</td>
            <td className='RowUser-state'>
                <p className={user.state ? 'activo' : 'inactivo'}> {user.state ? 'Activo' : 'Inactivo'}</p>
            </td>
            <td>{formatDate(user.updated_at)}</td>
            <td className='iconDots'><img src={iconDots} alt="" />
                
            </td>
        </tr>
    )
}
