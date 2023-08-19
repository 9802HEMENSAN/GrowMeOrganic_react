import { Routes , Route } from 'react-router-dom'
import UserInfoForm from '../components/UserInfoForm'
import MainData from '../Pages/MainData'
 

const AllRoutes = () => {
  return (
    <div> 
        <Routes>
            <Route path="/" element={<UserInfoForm/>}></Route>
            <Route path="/data" element={<MainData/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes