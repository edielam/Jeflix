import { useContext, useState } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { login } from "../../authContext/apiCalls";
import "./login.scss"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
      };
    return(
        <div className="login">
            <div className="log-top">
                <div className="log-wrapper">
                <img className="logo" 
                    src="https://raw.githubusercontent.com/edielam/ReactNodeJava/main/practice/JEFLIX2-removebg-preview.png" alt=''/>
                </div>
            </div>
            <div className="container">
                <form>
                    <h1 className="hpos">SIGN IN</h1>
                    <input type="email" placeholder="Email or Phone number"
                    onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}/>
                    <button className="login-btn" onClick={handleLogin}>Sign In</button>
                    <span>
                        New to Jeflix? <b>Sign up now</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )    
}