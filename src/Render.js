import React from 'react';
import Home from "./pages/Home"
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import CreateOrder from './pages/CreateOrder';
import Notification from './pages/Notification';
import MyOrder from './pages/MyOrder';
import Error from './pages/Error';
import Login from './pages/Login';

function Render() {

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/createorder/:cp/:restbp/:chol/:birthDate/:sex" element={<CreateOrder/>} />
      <Route exact path="/notification" element={<Notification/>} />
      <Route exact path="/myorder" element={<MyOrder/>} />
      <Route exact path="*" element={<Error/>} />
      </Routes> 
    </Router>
  );
}

export default Render;
