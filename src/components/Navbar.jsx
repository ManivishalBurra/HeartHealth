import React, { Component, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import { Calendar1, Eye, Home2, Health, Profile2User, LogoutCurve } from 'iconsax-react';
import "../css/custom.css";
import { bodyBackground, primaryColor } from '../constants/style';
import CheckAuthorization from '../utils/authorization';
import axios from 'axios';
import { BASE_URL2 } from '../constants/url';
const Navbar = (props) =>{
    const navigate = useNavigate()
    const [dataSource, setDataSource] = useState(null);
    useEffect(()=>{
        navigate(CheckAuthorization());
    },[0])
    useEffect(()=>{
        axios.get(`${BASE_URL2}/home/getinfo?id=${localStorage.getItem('accessToken')}`)
        .then((res)=>{
            setDataSource(res.data[0]);
        }).catch((err) => {
            console.log(err);
        })
    },[0])
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
                
                <Menu.Item key="health" className="center" style={{marginBottom:"50px"}} title="My Health" onClick={()=> navigate("/myhealth")}>
                    <Health size="32" color={props.selectedKey==="Health"? bodyBackground : "#d9e3f0"} variant="Bold"/>
                </Menu.Item>
                <Menu.Item key="appointment" className="center" style={{marginBottom:"50px"}} title="My Appointment" onClick={()=> navigate("/myappointment")}>
                    <Calendar1 size="32" color={props.selectedKey==="Appointment"? bodyBackground : "#d9e3f0"} variant="Bold"/>
                </Menu.Item>
                {dataSource && (dataSource.email.includes("harika") || dataSource.email.includes("manivishal")) &&
                <Menu.Item key="insights" className="center" style={{marginBottom:"50px"}} title="Insights" onClick={()=> navigate("/myinsights")}>
                    <Eye size="32" color={props.selectedKey==="Admin"? bodyBackground : "#d9e3f0"} variant="Bold"/>
                </Menu.Item>
                }
                <Menu.Item key="profile" className="center" style={{marginBottom:"50px"}} title="My Account" onClick={()=> navigate("/myaccount")}>
                    <Profile2User size="32" color={props.selectedKey==="Account"? bodyBackground : "#d9e3f0"} variant="Bold"/>
                </Menu.Item>

                <Menu.Item key="logout" className="center" style={{marginBottom:"5px", position:"absolute", bottom:"0"}} title="Log out" 
                    onClick={()=> {localStorage.removeItem("accessToken"); navigate("/login")}}
                >
                    <LogoutCurve size="32" color="#d9e3f0" variant="Bold"/>
                </Menu.Item>

            </Menu>
    );
  }

export default Navbar;