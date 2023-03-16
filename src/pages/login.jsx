import React from "react";

const Login = ()=>{
    return(
        <div>
            <div className="auth-container">
                <div className="myprofile">
                
            <div className="login-signup">    
            <div className="register">
            <h2>LOGIN</h2>
             <form >
                 <div>
                 <p>email</p>
                 <input name="email" type="email" placeholder="@gmail.com" required/>
                 </div>
                <div>
                <p>Passsword</p>
                 <input name="password" type="text" required placeholder="password"/>
                </div>
                 <button type="submit" onClick={""}>Login</button>
             </form>
            </div>
                <img className="img" src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg" alt="" />
            
                
            
            </div>
           
            </div>
            </div>
        </div>
        )
    }
    
    export default Login;
    
    // <div>
    //     
     
    // </div>