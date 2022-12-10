import { Route, Routes } from 'react-router-dom'
import { Profile } from '../../pages/Profile'
import './AllRoutes.css'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route to="/profile" element={<Profile />}>Profile</Route>
    </Routes>
  )
}
