import React, { Component, useEffect, useState } from 'react';
import { Menu, Icon, Form, Input, Button, DatePicker, Select, InputNumber, Descriptions, Steps, Modal, Result, Table } from 'antd';
import { Truck, Notification, UserSquare, Profile2User, Health, BoxAdd, NotificationBing } from 'iconsax-react';
import moment from 'moment';
import Navbar from '../components/Navbar';
import "../css/custom.css";
import {  primaryColor } from ".././constants/style"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL2 } from '../constants/url';
import CheckAuthorization from '../utils/authorization';
const MyAccount = () => {
    const [form] = Form.useForm();
    const [dataSource, setDataSource] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        navigate(CheckAuthorization());
    },[0])

    useEffect(() => {
        axios.get(`${BASE_URL2}/home/getinfo?id=${localStorage.getItem('accessToken')}`)
        .then((res)=>{
            setDataSource(res.data[0]);
        }).catch((err) => {
            console.log(err);
        })
    },[dataSource])

    return (
    <div style={{display:"flex", height:"100vh"}}>
        <Navbar selectedKey = "Account"/>
        <div className='center' style={{ width:"100%", height:"100%"}}>
        <div style={{backgroundColor:"white", width:"100%", height:"89%", borderRadius:"20px", margin:"40px", padding:"30px"}}>
        <div style={{display:"flex", alignItems:"center"}}>
        <h2> My Account </h2>
        &nbsp;
        <UserSquare size="32" color="#FF8A65" variant="Bulk"/>   
        </div>
        <div className="center" style={{flexDirection:"column"}}>
            <div style={{width:"200px",height:"200px", borderRadius:"20px", overflow:"hidden"}}>
                {dataSource && dataSource.profilepic && <img src={dataSource.profilepic} style={{width:"100%",height:"100%"}}></img>}
                
            </div>
            <p style={{color:"black"}}>Name: {dataSource.username}</p>
            <p style={{color:"black"}}>Email: {dataSource.email}</p>
        </div>
        </div>    
    </div>
    </div>
    )
  }
export default MyAccount;