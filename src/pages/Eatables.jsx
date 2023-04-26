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
const Eatables = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    useEffect(() =>{
        navigate(CheckAuthorization());
    },[0])
    const columns = [
        {
          title: `Do's`,
          dataIndex: 'do',
          key: 'do',
        },
        {
          title: `Don't`,
          dataIndex: 'dont',
          key: 'dont',
        },
      ];
    const dataSource = [
        {
            do: "Barley",
            dont:"Sugar, Salt",
        },
        {
            do: "Black Beans.",
            dont:"Bacon, Red Meat, Egg noodles",
        },
        {
            do: "Dark Leafy greens like Lettuce, Spinach, Mustard Greens, and Fresh Herbs.",
            dont:"Pizza, Burger, Hot Dog",
        },
        {
            do: "Fish: Salmon and Tuna.",
            dont:"Soda, Alcohol",
        },
        {
            do: "Flax seeds",
            dont:"Mayonnaise, Ketchup, and packaged dressings",
        },
        {
            do: "Fruits: Orange, Avocados, Cherries, Blueberries.",
            dont:"White bread, Cornbread, Quick bread",
        },
        {
            do: "Nuts: Walnuts and Almonds.",
            dont:"Muffins, Frozen waffles",
        },
        {
            do: "Oatmeal",
            dont:"Cakes, Doughnuts, Pies",
        },
        {
            do: "Soybeans.",
            dont:"Biscuits",
        },
        {
            do: "Sweet Potato",
            dont:"Buttered popcorn",
        },
        {
            do: "Tofu",
            dont:"High-fat snack crackers",
        },
    ]
    return (
    <div style={{display:"flex", height:"100vh"}}>
        <Navbar selectedKey = "Health"/>
        <div className='center' style={{ width:"100%", height:"100%"}}>
        <div style={{backgroundColor:"white", width:"100%", height:"89%", borderRadius:"20px", margin:"40px", padding:"30px", overflow:"scroll"}}>
        <div style={{display:"flex", alignItems:"center"}}>
        <h2> Health Tips</h2>
        &nbsp;
        <Health size="32" color="#FF8A65" variant="Bulk"/>   
        </div>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>    
    </div>
    </div>
    )
  }
export default Eatables;