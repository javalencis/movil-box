

import '../styles/Header.scss'
import iconMsg from '../assets/icons/iconMsg.png'
import iconEmail from '../assets/icons/Email.png'
import iconCalendar from '../assets/icons/Calendar.png'
import iconStar from '../assets/icons/Star.png'
import iconCart from '../assets/icons/Cart.png'
import iconNoti from '../assets/icons/Notification.png'
import iconSearch from '../assets/icons/Search.png'
import { logoName } from '../helpers'


export const Header = () => {
  return (
    <header className="Header">
      <div className='icons'>
        <img src={iconMsg} alt="" />
        <img src={iconEmail} alt="" />
        <img src={iconCalendar} alt="" />
        <img src={iconStar} alt="" />
      </div>

      <div className='info'>
        <p className='language'>Español</p>
        <div className='icons-rigth'>
          <img src={iconSearch} alt="" />
          <img src={iconCart} alt="" />
          <img src={iconNoti} alt="" />
        </div>
        <div>
          <p className='username'>Joe Doe</p>
          <p className='profile'>Admin</p>
        </div>
        <div className='logo-name'>
          {logoName('Joe Doe')}
        </div>
      </div>

    </header>
  )
}
