import React from 'react';
import "../css/custom.css";
import { GoogleLogin,GoogleOAuthProvider } from '@react-oauth/google';
import { Truck, Notification, Heart, Profile2User, BoxAdd } from 'iconsax-react';
import { useNavigate } from "react-router-dom";
import { primaryColor } from '../constants/style';
const MyOrder = () => {
    const navigate = useNavigate()

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
            navigate("/")
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