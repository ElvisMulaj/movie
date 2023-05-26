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
              <input type='text' placeholder='Kerko Filmin' className='kerko'/>
            <div className="right">
              <span>Elvis</span>
              <Notifications className='icon'/>
              <img src='https://yt3.googleusercontent.com/ytc/AL5GRJXLE4TfrvZ6RlSNilncmTtgD8KzxoL0QuDEuJQ64_A=s900-c-k-c0x00ffffff-no-rj' 
              alt='profil-picture'/>
              <div className="profile">
                <ArrowDropDown className='icon'/>
                  <div className="options">
                        <span>SETTINGS</span>
                        <span>LOGOUT</span>
                    </div>
                
                
              </div>
            </div>
        </div>
     </div>
  )
}
export default Navbar