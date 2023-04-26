import React from 'react';
import Home from "./pages/Home"
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import CreateOrder from './pages/CreateOrder';
import Notification from './pages/Notification';
import MyOrder from './pages/MyOrder';
import Error from './pages/Error';
import Login from './pages/Login';
import MyHealth from './pages/MyHealth';
import MyAccount from './pages/MyAccount';
import MyInsights from './pages/MyInsights';
import Eatables from './pages/Eatables';
import ConsultDoctor from './pages/consultDoctor';
import MyAppointment from './pages/MyAppointment';

function Render() {

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/predict/:cp/:restbp/:chol/:birthDate/:sex" element={<CreateOrder/>} />
      <Route exact path="/notification" element={<Notification/>} />
      <Route exact path="/myorder" element={<MyOrder/>} />
      <Route exact path="/myhealth" element={<MyHealth/>} />
      <Route exact path="/myaccount" element={<MyAccount/>} />
      <Route exact path="/myinsights" element={<MyInsights/>} />
      <Route exact path="/eatables" element={<Eatables/>} />
      <Route exact path="/consult" element={<ConsultDoctor/>} />
      <Route exact path="/myappointment" element={<MyAppointment/>} />
      
      <Route exact path="*" element={<Error/>} />
      </Routes> 
    </Router>
  );
}

export default Render;
