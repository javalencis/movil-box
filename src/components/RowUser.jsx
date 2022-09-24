import '../styles/RowUser.scss'
const profile = (user, profiles) => {
    const p = profiles.find(profile => profile.id === user.profile)
    return p.name.charAt(0).toUpperCase() + p.name.slice(1)
}


export const RowUser = ({ user, index, profiles }) => {

    return (
        <tr className='RowUser'>
            <td>{index}</td>
            <td>
               
                {user.name}</td>
            <td>{user.email}</td>
            <td>{profile(user, profiles)}</td>
            <td>{user.state ? 'Activo' : 'Inactivo'}</td>
            <td>{user.updated_at}</td>
            <td>.</td>
        </tr>
    )
}
