
import '../styles/RowUser.scss'


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


export const RowUser = ({ user, index, profiles }) => {

    return (
        <tr className='RowUser'>
            <td>{index}</td>
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
            <td>{user.updated_at}</td>
            <td>.</td>
        </tr>
    )
}
