import React, { Component, useState } from 'react';
import { Menu, Icon, Form, Input, Button, DatePicker, Select, InputNumber, Descriptions, Steps, Modal, Result, Collapse } from 'antd';
import { Truck, Notification, Home2, Profile2User, BoxAdd, NotificationBing } from 'iconsax-react';
import moment from 'moment';
import Navbar from '../components/Navbar';
import "../css/custom.css";
import { useParams } from 'react-router-dom';
import {  primaryColor } from ".././constants/style"
const Notifications = () => {
    const [form] = Form.useForm();
    let {to, from, pick_date, drop_date} = useParams();

    pick_date = moment(pick_date)
    drop_date = moment(drop_date)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderDetails, setOrderDetails] = useState({})
    const [testOrderSuccess, setTestOrderSuccess] = useState(false)
    const CreateOrderWithSummary = (e) => {
        e.pick_date = e.pick_date.toString()
        e.drop_date = e.drop_date.toString()
        setOrderDetails(e)
        setIsModalOpen(true);
    }
    
    const handleOk = () => {
        setIsModalOpen(false);
        setTestOrderSuccess(false);
      };
    
    const handleCancel = () => {
        setIsModalOpen(false);
        setTestOrderSuccess(false);
      };

    return (
    <div style={{display:"flex", height:"100vh"}}>
      <Navbar selectedKey = "Notification"/>
    <div className='center' style={{ width:"100%", height:"100%"}}>
        <div style={{backgroundColor:"white", width:"100%", height:"89%", borderRadius:"20px", margin:"40px", padding:"30px"}}>
        <div style={{display:"flex", alignItems:"center"}}>
        <h1> Notifications </h1>
        <NotificationBing size="32" color="#FF8A65" variant="Bulk"/>
        </div>
        {/* <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel header="Driver assigned to you" key="1">
            <p>Driver Aheen admed is assigned to you to deliver orderno. 12345678</p>
        </Collapse.Panel>
        <Collapse.Panel header="Delivery completed successfully" key="2">
            <p>Order completed and successfully delivered. Please view in orders</p>
        </Collapse.Panel>
        <Collapse.Panel header="Ready to pickup" key="3">
            <p>Driver is on his way to pick up</p>
        </Collapse.Panel>
        </Collapse> */}
        </div>    
    </div>
    </div>
    );
  }
export default Notifications;