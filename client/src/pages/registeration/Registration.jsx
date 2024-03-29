import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./registeration.scss";
import axios from "axios";

export default function Registeration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const handleLogin = () => {
    history.push("/login");
  } 
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axiosInstance.post("/auth/register", { email,username, password });
      history.push("/login");
    } catch (err) {}
  };
  return (
    <div className="registeration">
        <div className="reg-top">
        <img 
            className="logo" 
            src="https://raw.githubusercontent.com/edielam/ReactNodeJava/main/practice/JEFLIX2-removebg-preview.png" alt=''/>
        <button onClick={() => {handleLogin()}}>Sign In
          </button>
        </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="reg-btn" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="reg-btn" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
        {/* <br/><p>Already have an account?</p><br/>
          <button onClick={() => {handleLogin()}}>Sign In
          </button> */}
      </div>
    </div>
  );
}
