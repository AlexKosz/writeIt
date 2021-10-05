import React, { useState } from 'react';
import Reg from "./Reg"
import Login from "./Login"

const SignIn = () => {

    const [actionActive, setActionActive] = useState("login")

    const toggleActiveAction = () => {
        actionActive === "login" ? setActionActive("register") : setActionActive("login")
    }

    return (
        <div className="row box">

            <div className="col">
                <h1>Welcome to WrieIt!</h1>
                <p>The modern way to plan and write anything your heart desires!</p>
                <div className="flex">
                    <h2 className={actionActive === "login" ? "active clickable" : "inactive clickable"} onClick={toggleActiveAction}><span>Login</span></h2>
                    <h2>|</h2>
                    <h2 className={actionActive === "register" ? "active clickable" : "inactive clickable"} onClick={toggleActiveAction}><span>Register</span></h2>
                </div>

            </div>
            {
                actionActive === "login"
                    ? <Login />
                    : <Reg />
            }


        </div>
    )
}

export default SignIn;