import { Routes, Route, Outlet} from 'react-router-dom';
import LandingPage from './routes/landing-page/landing-page.routes.jsx';
import './App.css';
import Navigation from './routes/navigation/navigation.routes.jsx';
import LoginPage from './routes/Auth/login-page/login-page.routes.jsx';
import RegisterPage from './routes/Auth/register-page/register-page.routes.jsx';
import {useRoutes} from "react-router-dom";


const App = () =>{
  return (
      <Routes>
        {/* <Route index element = {<LandingPage/>}/> */}
        <Route path = '/' element = {<LandingPage/>}/>
        <Route path="/login" element ={<LoginPage/>}/>
        <Route path="/register" element ={<RegisterPage/>}/>
        <Route path="/login/navigation" element ={<Navigation/>} />
        <Route path="/register/navigation" element ={<Navigation/>} />

      </Routes>

  );
}

export default App
