import React, { Component, useEffect, useState } from 'react';
import { Menu, Icon, Form, Input, Button, DatePicker, Select, InputNumber, Descriptions, Steps, Modal, Result, Table } from 'antd';
import { Truck, CalendarAdd, Home2, Profile2User, Health, BoxAdd, NotificationBing } from 'iconsax-react';
import moment from 'moment';
import Navbar from '../components/Navbar';
import "../css/custom.css";
import {  primaryColor } from ".././constants/style"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL2 } from '../constants/url';
import CheckAuthorization from '../utils/authorization';
const MyAppointment = () => {
    const [form] = Form.useForm();
    const [dataSource, setDataSource] = useState([]);
    const navigate = useNavigate();
    useEffect(() =>{
        navigate(CheckAuthorization());
    },[0])
    const columns = [
        {
          title: 'Doctor Name',
          dataIndex: 'doctorName',
          key: 'doctorName',
        },
        {
          title: 'Specialisation',
          dataIndex: 'specialisation',
          key: 'specialisation',
        },
        {
          title: 'Appointment data',
          dataIndex: 'appointment',
          key: 'appointment',
        },
      ];
    useEffect(() => {
        axios.get(`${BASE_URL2}/appointment/fetch?id=${localStorage.getItem('accessToken')}`)
        .then((res)=>{
            setDataSource(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[0])
    return (
    <div style={{display:"flex", height:"100vh"}}>
        <Navbar selectedKey = "Appointment"/>
        <div className='center' style={{ width:"100%", height:"100%"}}>
        <div style={{backgroundColor:"white", width:"100%", height:"89%", borderRadius:"20px", margin:"40px", padding:"30px"}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <h2> My Appointments </h2>
                &nbsp;
                <Health size="32" color="#FF8A65" variant="Bulk"/>   
            </div>
        <Button className="center" style={{fontWeight:"bold"}} onClick={()=> navigate("/consult")}>Create a New Appointment&nbsp; <CalendarAdd size="22" color="#FF8A65" variant="Bulk"/>   </Button>
        </div>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>    
    </div>
    </div>
    )
  }
export default MyAppointment;