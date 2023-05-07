import React from 'react'
import "./navbar.scss"
import { ArrowDropDown, NotificationAdd, Notifications,} from '@mui/icons-material'


export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
            <img 
            src='https://filma365.net/wp-content/uploads/2022/09/ss.png'
            alt='elvisi'/>

            <span>Ballina</span>
            <span>Seriale</span>
            <span>Filma</span>
            <span>Te Rejat</span>
            <span>Lista ime</span>
            <span>homepage</span>

            </div>
            <div className="right">
            <span>Elvis</span>
            <Notifications/>
            <img src='https://yt3.googleusercontent.com/ytc/AL5GRJXLE4TfrvZ6RlSNilncmTtgD8KzxoL0QuDEuJQ64_A=s900-c-k-c0x00ffffff-no-rj' alt='profil-picture'/>
            <ArrowDropDown/>
            <input type='text' placeholder='search'/>
            </div>
        </div>
     </div>
  )
}
export default Navbar