import { useNavigate } from "react-router-dom";


const CheckAuthorization = () => {
    
    var accessToken = localStorage.getItem("accessToken");
        console.log(accessToken)
        if(accessToken && accessToken.length>0) {
            if(window.location.pathname === "/login") {
                return "/"
            }
            else {
                return window.location.pathname
            }
        }
        else {
            return "/login"
        }
}

export default CheckAuthorization;