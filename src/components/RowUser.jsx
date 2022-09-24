
export const RowUser = ({ user, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.profile}</td>
            <td>{user.state}</td>
            <td>{user.updated_at}</td>
            <td>.</td>
        </tr>
    )
}
