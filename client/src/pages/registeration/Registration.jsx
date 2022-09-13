import { useRef } from "react";
import { useState } from "react";
import "./registeration.scss";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
  };
    return (
        <div className="registeration">
            <div className="reg-top">
                <div className="reg-wrapper">
                    <img className="logo" 
                        src="https://raw.githubusercontent.com/edielam/ReactNodeJava/main/practice/JEFLIX2-removebg-preview.png" 
                        alt=''
                    />
                <button className="log-btn">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership. </p>
      </div>
    )
}