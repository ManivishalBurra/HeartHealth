import React, { Component } from 'react';
import { Menu, Icon, Form, Input, InputNumber, Button, DatePicker, Select } from 'antd';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import "../css/custom.css";
import { backgroundColor, primaryColor, secondaryColor } from ".././constants/style"
const Home = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const CreateOrder = (e) => {
        navigate(`/createorder/${e.cp}/${e.bloodPressure}/${e.serum}/${new Date(e.birthDate).toISOString()}/${e.gender}`)
    }
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    const headers = {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin' : '*'
    };
    return (
    <div style={{display:"flex", height:"100vh"}}>
      <Navbar selectedKey = "Home"/>
    <div className='truck' style={{display:"inline"}}> 
      <p style={{marginBottom:"0px"}}>Do your part  <br></br></p>
      <p><span style={{color: secondaryColor}}>Care </span>for your heart.</p> 
    </div>
    <div className='order-create' style={{fontFamily:"nunito"}}>
    <Form
      layout="vertical"
      form={form}
      onFinish={CreateOrder}
    >
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <Form.Item name="cp" label="CP type" style={{width:"40%", marginRight:"20px", fontWeight:"bold"}}>
        <Select
            showSearch
            style={{fontWeight:"normal"}}
            placeholder="Select Chest Pain type"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: '1',
                label: 'Low Pain',
              },
              {
                value: '2',
                label: 'Medium Pain',
              },
              {
                value: '3',
                label: 'Heavy Pain',
              },
            ]}
          />
      </Form.Item>
      <Form.Item name="bloodPressure" label="Resting blood pressure" style={{width:"50%", fontWeight:"bold"}}>
        <InputNumber placeholder="Resting blood pressure" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
      </Form.Item>
      <Form.Item name="serum" label="Serum cholestoral" style={{width:"50%", fontWeight:"bold"}}>
        <InputNumber placeholder="Serum cholestoral in mg/dl" style={{borderRadius:"20px", width:"100%", height:"40px", backgroundColor:"#EEEEEE"}}/>
      </Form.Item>
      </div>
      <div style={{display:"flex"}}>
      <Form.Item name="birthDate" label="Date of birth" style={{width:"30%", fontWeight:"bold", marginBottom:"10px"}}>
        
        <DatePicker 
          format="DD-MM-YYYY"
          style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} 
          onChange={onChange}  
        />
  
      </Form.Item>
        <Form.Item name="gender" label="Gender" style={{width:"33%", fontWeight:"bold"}}>
          <Select
            showSearch
            style={{fontWeight:"normal"}}
            placeholder="Select Your Gender"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: '1',
                label: 'Male',
              },
              {
                value: '2',
                label: 'Female',
              },
              {
                value: '3',
                label: 'Others',
              },
            ]}
          />
        </Form.Item>
        <Form.Item style={{height:"40px"}} >
          <Button htmlType="submit" type="primary" className="center shadow" style={{backgroundColor: primaryColor, color:"black", width:"100%", height:"40px", borderRadius:"20px", fontWeight:"bold", marginTop:"30px", marginLeft:"70px"}}>Check Health</Button>
        </Form.Item>
      </div>
      
    </Form>
    </div>
    </div>
    );
  }

export default Home;