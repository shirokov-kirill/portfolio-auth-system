import React from 'react';
import './LoginForm.css'

function LoginForm() {
    return(
        <div class="LogInForm">
            <div>
                <h2>
                    Login
                </h2>
                <input name="login" onChange={LoginForm.onLoginChange}/>
            </div>
            <div>
                <h2>
                    Password
                </h2>
                <input type="password" name="password" onChange={LoginForm.onPasswordChange}/>
            </div>
            <button class="confirmButton" onClick={LoginForm.onConfirmClick}>
                Confirm.
            </button>
      </div>
    );
}


LoginForm.state = {
    login: "",
    password: ""
}

LoginForm.onLoginChange = (event) => {
    LoginForm.state.login = event.target.value
}

LoginForm.onPasswordChange = (event) => {
    LoginForm.state.password = event.target.value;
}

LoginForm.onConfirmClick = (event) => {
        //toBackend
}

export default LoginForm;