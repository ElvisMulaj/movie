import React, { useState } from 'react'
import "./navbar.scss"
import { ArrowDropDown, NotificationAdd, Notifications,} from '@mui/icons-material'


export const Navbar = () => {
//navbar kur osht scrolled
  const [isScrolled,setIsScrolled]= useState(false);

  window.onscroll =() =>{
    setIsScrolled(window.pageYOffset=== 0 ? false:true);
    return () =>window.onscroll=null
  };
//navbar kur osht scrolled
  
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
     
        <div className="container">
              <div className="left">
                  <img 
                  src='https://filma365.net/wp-content/uploads/2022/09/ss.png'
                  alt='elvisi'/>

                  <span>Homepage</span>
                  <span>Series</span>
                  <span>Movies</span>
                  <span>New and Popular</span>
                  <span>My list</span>
                
                  
                

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