import './sideNavbar.css'
import { FaUserAlt, FaHouseUser } from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'
import { ImOffice } from 'react-icons/im'
import { MdDevicesOther } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'

export const SideNavbar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarLogo'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94Hx7mznKUuJChS2soZ-BM78fp1b-Qv8yhA&usqp=CAU" alt=""/>
        <h2>Todo bar</h2>
      </div>
      <div className='sidebarList'>
        <ul >
          <li> <FaUserAlt /> Profile </li>
          <li> <BsListTask/> All Tasks num</li>
          <li> <FaHouseUser/> Personal num</li>
          <li> <ImOffice/> Official num</li>
          <li> <MdDevicesOther /> Others num</li>
          <li> <FiLogOut /> LogOut/Login</li>
        </ul>
      </div>

    </div>
  )
}
