import React, { Component, useEffect, useState } from 'react';
import { Menu, Icon, Form, Input, Button, DatePicker, Select, InputNumber, Descriptions, Steps, Modal, Result, Table } from 'antd';
import { Truck, Notification, Home2, Hospital, Health, BoxAdd, NotificationBing } from 'iconsax-react';
import moment from 'moment';
import Navbar from '../components/Navbar';
import "../css/custom.css";
import {  primaryColor } from "../constants/style"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL2 } from '../constants/url';
import CheckAuthorization from '../utils/authorization';

const ConsultDoctor = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    useEffect(() =>{
        navigate(CheckAuthorization());
    },[0])
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
    const CreateAppointment = (e) => {

        axios.post(`${BASE_URL2}/appointment/create`,{
            ...e,
            user_id: localStorage.getItem('accessToken'),
        }).then((res)=>{
            console.log(res.data);
            navigate("/myappointment")
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
    <div style={{display:"flex", height:"100vh"}}>
        <Navbar selectedKey = "Health"/>
        <div className='center' style={{ width:"100%", height:"100%"}}>
        <div className='consultdoctor' style={{backgroundColor:"white", width:"100%", height:"89%", borderRadius:"20px", margin:"40px", padding:"30px", overflow:"scroll"}}>
            <div style={{display:"flex", alignItems:"center"}}>
            <h2> Consult a doctor</h2>
            &nbsp;
            <Hospital size="32" color="#FF8A65" variant="Bulk"/>   
            
            </div>
            <div style={{width:"500px", height:"500px", backgroundColor:"white", borderRadius:"20px", float:"right"}} className='center'>
    <Form
        layout="vertical"
        form={form}
        style={{width:"100%", height:"100%", marginLeft:"100px"}}
        className="center"
        onFinish={CreateAppointment}
        initialValues={{
            doctorName: "Dr. Milton",
            specialisation: "Cardiology",
            appointment:""
        }}
    >
      <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
      
      <Form.Item name="doctorName" label="Doctor Name" style={{width:"80%", fontWeight:"bold"}} defaultValue="Dr. Milton">
        <Input placeholder="Dr. Milton" style={{borderRadius:"20px", width:"100%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} defaultValue="Dr. Milton" disabled/>
      </Form.Item>
      <Form.Item name="specialisation" label="Specialisation" style={{width:"80%", fontWeight:"bold"}} defaultValue="Cardiology">
        <Input placeholder="Cardiology" style={{borderRadius:"20px", width:"100%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} defaultValue="Cardiology" disabled/>
      </Form.Item>
      <Form.Item name="appointment" label="Appointment" style={{width:"80%", fontWeight:"bold"}} >
        <DatePicker 
          format="DD-MM-YYYY"
          style={{borderRadius:"20px", width:"100%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} 
          onChange={onChange}  
        />
      </Form.Item>
      <Form.Item style={{width:"80%",height:"40px"}} >
          <Button htmlType="submit" type="primary" className="center shadow" style={{backgroundColor: primaryColor, color:"black", width:"100%", height:"40px", borderRadius:"20px", fontWeight:"bold", marginTop:"30px"}}>Create Appointment</Button>
        </Form.Item>
      </div>
      
    </Form>
                
            </div>
        </div>    
    </div>
    </div>
    )
  }
export default ConsultDoctor;