import './sideNavbar.css'
import { FaHouseUser } from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'
import { ImOffice } from 'react-icons/im'
import { MdDevicesOther } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi' 
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/Auth/action'

export const SideNavbar = () => {
  let { loggedInUser } = useSelector((state)=>state)
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.setItem("token", null);
    localStorage.setItem("loggedInUser", null);
    alert("You have been looged out")
    dispatch(logout());
    window.location.replace("/");
  }
  

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
          <li> <NavLink className="link"to="/allTask"><BsListTask/> All Tasks </NavLink></li>
          <li> <NavLink className="link" to="/personal"><FaHouseUser/> Personal </NavLink></li>
          <li> <NavLink className="link" to="/official"><ImOffice/> Official </NavLink></li>
          <li> <NavLink className="link" to="/others"><MdDevicesOther /> Others </NavLink></li>
          { loggedInUser 
            ? <li> <NavLink className="link login" onClick={handleLogOut}><FiLogOut /> Logout </NavLink></li> 
            : <li> <NavLink className="link login" to="/login"><FiLogOut /> Login </NavLink></li> 
          }
        </ul>
      </div>     
    </div>

  )
}
