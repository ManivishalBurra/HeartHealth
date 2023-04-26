import React, { Component, useEffect, useState } from 'react';
import { Menu, Icon, Form, Drawer, Button, DatePicker, Select, InputNumber, Descriptions, Steps, Modal, Result, Table } from 'antd';
import { Truck, InfoCircle, UserSquare, Profile2User, Health, BoxAdd, NotificationBing } from 'iconsax-react';
import moment from 'moment';
import Navbar from '../components/Navbar';
import "../css/custom.css";
import {  primaryColor } from "../constants/style"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL2 } from '../constants/url';
import CheckAuthorization from '../utils/authorization';
const MyInsights = () => {
    const [form] = Form.useForm();
    const [dataSource, setDataSource] = useState([]);
    const [userDataSource, setUserDataSource] = useState([]);
    const [userName, setUserName] = useState("");
    const [open , setOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(() =>{
        navigate(CheckAuthorization());
    },[0])
    const onClose = () => {
        setOpen(false);
    };
    const columns = [
        {
          title: 'Name',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'ID',
          dataIndex: '_id',
          key: '_id',
        },
        {
            title: 'Action',
            key: 'action',
            render: (data) => (
                <Button onClick={()=>showDrawer(data._id, data.username)}>Info</Button>
            ),
          },
      ];
      const newColumns = [
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
            title: 'Created On',
            dataIndex: 'createdOn',
            key: 'createdOn',
        },

      ];
      const showDrawer = (id, username) => {
        axios.get(`${BASE_URL2}/report/fetch?id=${id}`)
        .then((res)=>{
            setUserDataSource(res.data);
            setOpen(true);
            setUserName(username)
        }).catch((err) => {
            console.log(err);
        })
      };
    useEffect(() => {
        axios.get(`${BASE_URL2}/home/getusers`)
        .then((res)=>{
            setDataSource(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[0])
    return (
    <div style={{display:"flex", height:"100vh"}}>
        <Navbar selectedKey = "Admin"/>
        <div className='center' style={{ width:"100%", height:"100%"}}>
        <div style={{backgroundColor:"white", width:"100%", height:"89%", borderRadius:"20px", margin:"40px", padding:"30px"}}>
        <div style={{display:"flex", alignItems:"center"}}>
        <h2> Users </h2>
        &nbsp;
        <UserSquare size="32" color="#FF8A65" variant="Bulk"/>   
        </div>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>    
        <Drawer
            title={userName}
            placement={"bottom"}
            size={"large"}
            onClose={onClose}
            open={open}
            key={"bottom"}
        >
            <Table dataSource={userDataSource} columns={newColumns} pagination={false} />
        </Drawer>
    </div>
    </div>
    )
  }
export default MyInsights;