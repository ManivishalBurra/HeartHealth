import React, { Component } from 'react';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import { Truck, Notification, Home2, Profile2User, LogoutCurve } from 'iconsax-react';
import "../css/custom.css";
import { bodyBackground, primaryColor } from '../constants/style';

const Navbar = (props) =>{
    const navigate = useNavigate()
    return (
        <Menu selectedKeys={[props.selectedKey]} mode="inline" inlineCollapsed={true} theme={"dark"} style={{margin:"10px", paddingTop:"40px", borderRadius:"50px", width:"60px", marginLeft:"15px", position:"relative"}}>
                <Menu.Item key="Home" className="center" style={{marginBottom:"50px", backgroundColor:"#001529"}} title="Home" onClick={()=> navigate("/")}>
                <Home2 size="32" color={props.selectedKey==="Home"? bodyBackground : "#d9e3f0"} variant="Bold"/>
                </Menu.Item>
                {/* <Menu.Item key="Notification" className="center" style={{marginBottom:"50px", backgroundColor:"#001529"}} title="Notification" onClick={()=> navigate("/notification")}>
                <Notification color={props.selectedKey==="Notification"? bodyBackground : "#d9e3f0"} size="32" variant="Bold"/>
                </Menu.Item>
                <Menu.Item key="MyOrder" className="center" style={{marginBottom:"50px", backgroundColor:"#001529"}} title="My Orders" onClick={()=> navigate("/myorder")}>
                    <Truck size="32"color={props.selectedKey==="MyOrder"? bodyBackground : "#d9e3f0"}variant="Bold"/>
                </Menu.Item> */}
                <Menu.Item key="profile" className="center" style={{marginBottom:"50px"}} title="My Account">
                <Profile2User size="32" color="#d9e3f0" variant="Bold"/>
                </Menu.Item>
                <Menu.Item key="logout" className="center" style={{marginBottom:"5px", position:"absolute", bottom:"0"}} title="Log out">
                <LogoutCurve size="32" color="#d9e3f0" variant="Bold"/>
                </Menu.Item>
            </Menu>
    );
  }

export default Navbar;