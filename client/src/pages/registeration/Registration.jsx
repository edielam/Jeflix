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
    return ()
}