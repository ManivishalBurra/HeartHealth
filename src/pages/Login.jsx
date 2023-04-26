import React, { useEffect } from 'react';
import "../css/custom.css";
import { GoogleLogin,GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { Truck, Notification, Heart, Profile2User, BoxAdd } from 'iconsax-react';
import { useNavigate } from "react-router-dom";
import { primaryColor } from '../constants/style';
import { BASE_URL2 } from '../constants/url';
import axios from 'axios';
import CheckAuthorization from '../utils/authorization';
const MyOrder = () => {
  const navigate = useNavigate()  
  
  useEffect(() => {
      navigate(CheckAuthorization());
    },[0]);

    return (
    <div className='center login' style={{display:"flex", height:"100vh"}}>
      <div className='center' style={{width:"500px",height:"500px", flexDirection: "column", background:primaryColor, borderRadius:"20px"}}>
      <Heart
        size="80"
        color="#fff"
        variant="Bold"
      />
      <h3>Heart Health</h3>
      &nbsp;&nbsp;&nbsp;
      <GoogleOAuthProvider clientId="800457657463-7bgs0eqdk4a0h95g70ajpts9i1s888ie.apps.googleusercontent.com">
        <GoogleLogin
          width="500"
          onSuccess={(credentialResponse) => {
            var decoded = jwt_decode(credentialResponse.credential);
            axios.post(`${BASE_URL2}/login`,{
              email:decoded.email,
              name: decoded.name,
              imageUrl:decoded.picture,
            })
            .then(response => {
              console.log(response.data)
              localStorage.setItem('accessToken', response.data._id)
              navigate("/")
            })
            .catch(function (error) {
              console.log(error);
              navigate("/login")
            });
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          useOneTap={true}
          size="large"  
        />
        </GoogleOAuthProvider>
        </div>
    </div>
    );
  }
export default MyOrder;