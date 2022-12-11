import './sideNavbar.css'
import { FaUserAlt, FaHouseUser } from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'
import { ImOffice } from 'react-icons/im'
import { MdDevicesOther } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

export const SideNavbar = () => {
  let user = false;

  return (

    <div className='sidebar'>
      <NavLink to="/" className="linkLogo">
        <div className='sidebarLogo'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94Hx7mznKUuJChS2soZ-BM78fp1b-Qv8yhA&usqp=CAU" alt=""/>
          <h2>Todo bar</h2>
        </div>
      </NavLink>
      <div className='sidebarList'>
        <ul>
          <li> <NavLink className="link" to="/profile" ><FaUserAlt /> Profile </NavLink></li>
          <li> <NavLink className="link"to="/"><BsListTask/> All Tasks num </NavLink></li>
          <li> <NavLink className="link"><FaHouseUser/> Personal num </NavLink></li>
          <li> <NavLink className="link"><ImOffice/> Official num </NavLink></li>
          <li> <NavLink className="link"><MdDevicesOther /> Others num </NavLink></li>
          { user 
            ? <li> <NavLink className="link"><FiLogOut /> Logout </NavLink></li> 
            : <li> <NavLink className="link"><FiLogOut /> Login </NavLink></li> 
          }
        </ul>
      </div>     
    </div>

  )
}
