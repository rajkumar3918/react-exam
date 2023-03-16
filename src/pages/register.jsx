import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postdata, setUserDetails } from "../redux/sclice/register";
import "../styles/register.scss"
const Register = ()=>{
    const  data = useSelector(state=> state.ResData);
    console.log(data)

    const dispatch = useDispatch();

    
    const formRef = useRef()
    const navigate = useNavigate();
    const submitHandler = async (e)=>{
        e.preventDefault();
        
        const form = formRef.current;
        const registerData = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
    
        };
        dispatch(setUserDetails(registerData));
        navigate("/login");
    }
    
    useEffect(()=>{
        dispatch(postdata())
    },[])
    return(
        <div>
            <div className="auth-container">
                <div className="myprofile">
                
            <div className="login-signup">    
            <div className="register">
                <h2>REGISTER</h2>
                <form ref={formRef}>
                    <div><p>Username</p>
                    <input name="name" type="text" placeholder="username" required/></div>
              
                   <div><p>Email Address</p>
                    <input name="email" type="email" placeholder="@gmail.com" required/></div>
                    <div><p>Password</p>
                    <input name="password" type="text" required placeholder="password"/></div>
                    <button type="submit" onClick={submitHandler}>Register</button>
                </form>
            </div>
                <img className="img" src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg" alt="" />
            
                
            
            </div>
           
            </div>
            </div>
        </div>
    )
}

export default Register;