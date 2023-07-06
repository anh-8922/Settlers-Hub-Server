import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicePage from './Pages/ServicePage';
import Register from "./Pages/Register";
import Login from "./Pages/Login"
import ProfilePage from "./Pages/Profile";
import InfoLondon from "./SubPage/info";
import Community from "./Pages/CommunityPage";
import ResetPassowrd from "./Pages/ResetPasswordPage";
import ForgotPassowrd from "./Pages/ForgotPasswordPage";
import AddGuidePost from "./AdminUnpublished/AddGuidePost";
import SingleSubPage from "./SubPage/SingleSubPage";

export default function AllRoutes () {
    return(
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/service" element={<ServicePage/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/userregister" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/guide/info" element={<InfoLondon/>}/>
        <Route path="/resetpassword" element={<ResetPassowrd/>}/>
        <Route path="/forgotpassword" element={<ForgotPassowrd/>}/>
        <Route path='/admin/addguidepost' element={<AddGuidePost/>}/>
        <Route path="/singleguidepost/:id" element={<SingleSubPage/>} />
      </Routes>
    )
}