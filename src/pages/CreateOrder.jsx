import React, { Component, useState } from 'react';
import { Menu, Icon, Form, Input, Button, DatePicker, Select, InputNumber, Descriptions, Steps, Modal, Result } from 'antd';
import { Truck, Notification, HeartSearch, Profile2User, BoxAdd } from 'iconsax-react';
import moment from 'moment';
import axios from 'axios';
import Navbar from '../components/Navbar';
import dayjs from 'dayjs';
import "../css/custom.css";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { backgroundColor, primaryColor, secondaryColor } from ".././constants/style"
import { BASE_URL } from ".././constants/url"
const CreateOrder = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    let {cp, restbp, chol, birthDate, sex} = useParams();

    birthDate = dayjs(moment(birthDate))
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderDetails, setOrderDetails] = useState({})
    const [testOrderSuccess, setTestOrderSuccess] = useState(true)
    const [percentage, setPercentage] = useState("10%")
    const [sux, setSux] = useState(false)
    const CreateOrderWithSummary = (e) => {
      var today = new Date();
      var birthDate = new Date(e.birthDate); 
      var ageNow = today.getFullYear() - birthDate.getFullYear();
        e.age = ageNow;
        e.chol = parseInt(e.chol);
        e.cp = parseInt(e.cp);
        e.restbp = parseInt(e.restbp);
        e.sex = parseInt(e.sex);
        if (e.sex === '1') {
          e.gender = 'male'
        }else if (e.sex === '2') {
          e.gender = 'female'
        }else{
          e.gender = 'others'
        }
        setOrderDetails(e)
        setIsModalOpen(true);
    }

    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    
    const handleOk = () => {
        setIsModalOpen(false);
        setTestOrderSuccess(false);
      };
    
    const handleCancel = () => {
        setIsModalOpen(false);
        setTestOrderSuccess(false);
      };
    const RequestAction = () => {
        
        axios.post(`${BASE_URL}/api/predict`, {
           ...orderDetails,
        })
        .then(function (response) {
          if( response && response.data ){
            if(response.data[0]>40){
              setPercentage(response.data[0].toFixed(2)+ "%, Please Consult a doctor immediately!")
              setSux(false)
            }else{
              setPercentage("Wow your heart looks happy!")
              setSux(true)
            }
            setTestOrderSuccess(true)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return (
    <div style={{display:"flex", height:"100vh"}}>
      <Navbar selectedKey = "Home"/>
    <div className='center' style={{ width:"100%", height:"100%"}}>
        <div style={{backgroundColor:"white", width:"100%", height:"89%", borderRadius:"20px", margin:"40px", padding:"30px"}}>
        <div style={{display:"flex", alignItems:"center"}}>
        <h1> Check Health </h1>
        <HeartSearch size="32" color="#FF8A65" variant="TwoTone"/>
        </div>
        <Form
            layout="vertical"
            form={form}
            onFinish={CreateOrderWithSummary}
            initialValues={{
                cp, restbp, chol, birthDate, sex
            }}
        >
      <div style={{display:"flex"}}>
      <Form.Item name="cp" label="CP type" style={{width:"28.5%", marginRight:"20px", fontWeight:"bold"}}>
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
      <Form.Item name="restbp" label="Resting Blood Pressure" style={{width:"30%", fontWeight:"bold"}}>
        <InputNumber placeholder="Resting Blood Pressure" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
      </Form.Item>
      </div>
      <div style={{display:"flex"}}>
      <Form.Item name="chol" label="Serum Cholestoral" style={{width:"28.5%", fontWeight:"bold", marginRight:"1.5%"}}>
        <InputNumber placeholder="Serum Cholestoral in mg/dl" style={{borderRadius:"20px", width:"100%", height:"40px", backgroundColor:"#EEEEEE"}}/>
      </Form.Item>
      <Form.Item name="birthDate" label="Birth Date" style={{width:"30%", fontWeight:"bold", marginBottom:"10px"}}>
        
        <DatePicker 
          format="DD-MM-YYYY"
          style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} 
          onChange={onChange}  
        />
  
      </Form.Item>
      <Form.Item name="sex" label="Gender" style={{width:"30%", fontWeight:"bold"}}>
          <Select
            showSearch
            placeholder="Select Your Gender"
            optionFilterProp="children"
            style={{fontWeight:"normal"}}
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
      </div>
      <div style={{display:"flex"}}>
      <Form.Item name="fbs" label="Fasting Blood Sugar" style={{width:"30%", fontWeight:"bold"}}>
        <InputNumber placeholder="Fasting Blood Sugar in mg/dl" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
      </Form.Item>
      <Form.Item name="slope" label="Slope" style={{width:"30%", fontWeight:"bold"}}>
        <InputNumber placeholder="Slope" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
      </Form.Item>
      <Form.Item name="ca" label="CA" style={{width:"30%", fontWeight:"bold"}}>
        <InputNumber placeholder="CA" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
      </Form.Item>
      </div>
      <div style={{display:"flex"}}>
      <Form.Item name="restecg" label="Electro Cardio graph" style={{width:"30%", fontWeight:"bold"}}>
        <InputNumber placeholder="Electro Cardio graph(values 0,1,2)" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
      </Form.Item>
      <Form.Item name="oldpeak" label="Old Peak" style={{width:"30%", fontWeight:"bold"}}>
        <InputNumber placeholder="Old Peak" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
      </Form.Item>
      </div>
      <Form.Item name="maxrate" label="Max Heart rate" style={{width:"30%", fontWeight:"bold"}}>
        <InputNumber placeholder="Max Heart rate acheived" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
      </Form.Item>

      <Form.Item name="exang" label="Exercise induced angina" style={{width:"30%", fontWeight:"bold"}}>
        <InputNumber placeholder="exercise induced angina" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
      </Form.Item>

      <Form.Item style={{height:"40px", width:"15%"}} >
        <Button htmlType="submit" type="primary" className="center shadow" style={{backgroundColor:primaryColor, color:"black", width:"100%", height:"40px", borderRadius:"20px", fontWeight:"bold", marginTop:"20px"}}>Check Health</Button>
      </Form.Item>
    </Form>
        </div>    
    </div>
    <Modal title="Health Request Summary" open={isModalOpen} width={1200} footer={null} onCancel={handleCancel}>
    <Steps
    current={testOrderSuccess? 3 : 1}
        items={[
            {
                title: 'Check Health',
            },
            {
                title: 'Validate',
                subTitle: 'Please Validate',
            },
            {
                title: 'Submit Data',
            },
        ]}
    />
    <br/>
    {!testOrderSuccess ? <div>
    <Descriptions bordered>
    <Descriptions.Item label="Chest Pain Type">{orderDetails.cp}</Descriptions.Item>
    <Descriptions.Item label="Resting Blood Pressure" span={2}>{orderDetails.restbp}</Descriptions.Item>
    <Descriptions.Item label="Age">{orderDetails.age}</Descriptions.Item>
    <Descriptions.Item label="Gender">{orderDetails.gender}</Descriptions.Item>
    <Descriptions.Item label="Serum Cholestoral" span={2}>{orderDetails.chol}</Descriptions.Item>
    <Descriptions.Item label="Fasting Blood Sugar" span={3}>{orderDetails.fbs}</Descriptions.Item>
    <Descriptions.Item label="Electro Cardio graph" >{orderDetails.restecg}</Descriptions.Item>
    <Descriptions.Item label="Max Heart Rate" span={1}>{orderDetails.maxrate}</Descriptions.Item>
    <Descriptions.Item label="Exercise induced angina" span={2}>{orderDetails.exang}</Descriptions.Item>
    <Descriptions.Item label="Old Peak">{orderDetails.oldpeak}</Descriptions.Item>
    <Descriptions.Item label="CA">{orderDetails.ca}</Descriptions.Item>
    <Descriptions.Item label="Slope">{orderDetails.slope}</Descriptions.Item>


    
  </Descriptions>
  <Button key="requestaction" type="primary" onClick={RequestAction} className="center shadow" style={{backgroundColor:primaryColor, color:"black", width:"15%", height:"40px", borderRadius:"20px", fontWeight:"bold", marginTop:"30px"}}>Submit Data</Button>
  </div>
  :
  <Result
        status= {sux?"success":"error"}
        title={percentage}
        extra={[
        <Button key ="console" style={{backgroundColor:"black", color:"white"}} onClick={()=>navigate("/")}>
            Go Home
        </Button>,
         <Button><Link to="https://familydoctor.org/diet-and-exercise-for-a-healthy-heart/">My Health</Link></Button>
        
        ]}
    />
}
  
    </Modal>
    </div>
    );
  }
export default CreateOrder;