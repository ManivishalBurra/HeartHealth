import React, { Component, useEffect, useState } from 'react';
import { Menu, Icon, Form, Input, Button, DatePicker, Select, InputNumber, Descriptions, Steps, Modal, Result, Table } from 'antd';
import { Truck, Notification, Home2, Profile2User, Health, BoxAdd, NotificationBing } from 'iconsax-react';
import moment from 'moment';
import Navbar from '../components/Navbar';
import "../css/custom.css";
import {  primaryColor } from ".././constants/style"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL2 } from '../constants/url';
import CheckAuthorization from '../utils/authorization';
const MyHealth = () => {
    const [form] = Form.useForm();
    const [dataSource, setDataSource] = useState([]);
    const navigate = useNavigate();
    useEffect(() =>{
        navigate(CheckAuthorization());
    },[0])
    const columns = [
        {
          title: 'CA',
          dataIndex: 'ca',
          key: 'ca',
        },
        {
          title: 'Cholestarol',
          dataIndex: 'chol',
          key: 'chol',
        },
        {
          title: 'CP',
          dataIndex: 'cp',
          key: 'cp',
        },
        {
            title: 'Exang',
            dataIndex: 'exang',
            key: 'exang',
        },
        {
            title: 'Fbs',
            dataIndex: 'fbs',
            key: 'fbs',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Old Peak',
            dataIndex: 'oldpeak',
            key: 'oldpeak',
        },
        {
            title: 'Rest BP',
            dataIndex: 'restbp',
            key: 'restbp',
        },
        {
            title: 'Sex',
            dataIndex: 'sex',
            key: 'sex',
        },
        {
            title: 'Slope',
            dataIndex: 'slope',
            key: 'slope',
        },
        {
            title: 'Results',
            dataIndex: 'result',
            key: 'result',
        },
        {
            title: 'Created On',
            dataIndex: 'createdOn',
            key: 'createdOn',
        },

      ];
    useEffect(() => {
        axios.get(`${BASE_URL2}/report/fetch?id=${localStorage.getItem('accessToken')}`)
        .then((res)=>{
            setDataSource(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[0])
    return (
    <div style={{display:"flex", height:"100vh"}}>
        <Navbar selectedKey = "Health"/>
        <div className='center' style={{ width:"100%", height:"100%"}}>
        <div style={{backgroundColor:"white", width:"100%", height:"89%", borderRadius:"20px", margin:"40px", padding:"30px"}}>
        <div style={{display:"flex", alignItems:"center"}}>
        <h2> My Health </h2>
        &nbsp;
        <Health size="32" color="#FF8A65" variant="Bulk"/>   
        </div>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>    
    </div>
    </div>
    )
  }
export default MyHealth;