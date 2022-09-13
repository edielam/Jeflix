import "./login.scss"

export default function Login() {
    return(
        <div className="login">
            <div className="top">
                <div className="wrapper">

                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign IN</h1>
                    <input type="email" placeholder="Email or Phone number"/>
                    <input type="password" placeholder="Password"/>
                </form>
            </div>
        </div>
    )    
}