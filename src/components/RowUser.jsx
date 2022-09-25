
import { useContext, useState } from 'react'
import iconDots from '../assets/icons/Dots.svg'
import { AppContext } from '../context/AppContext'
import '../styles/RowUser.scss'
import { MenuCrud } from './MenuCrud'

import {profile,formatDate,logoName } from '../helpers'



export const RowUser = ({ index,user }) => {

    const {profiles} = useContext(AppContext)
    const [clickDots, setClickDots] = useState(false)

    const handleClickMenu = () => {
        setClickDots(!clickDots)
    }



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
            <td className='iconDots' onClick={handleClickMenu}><img src={iconDots} alt="" />
                
            </td>

            {
                clickDots && <MenuCrud user={user}/>
            }

        </tr>
    )
}
