import React from 'react';
import './LoginForm.css'

function LoginForm(props){
    return(
        <div class="LogInForm">
            <div>
                <h2>
                    Login
                </h2>
                <input class="enterField" name="login" onChange={LoginForm.onLoginChange}/>
            </div>
            <div>
                <h2>
                    Password
                </h2>
                <input class="enterField" type="password" name="password" onChange={LoginForm.onPasswordChange}/>
            </div>
            <button class="confirmButton" onClick={() => LoginForm.onConfirmClick(props)}>
                Confirm.
            </button>
      </div>
    );
}


LoginForm.state = {
    login: "",
    password: ""
}

LoginForm.onLoginChange = function(event){
    LoginForm.state.login = event.target.value
}

LoginForm.onPasswordChange = function(event){
    LoginForm.state.password = event.target.value;
}

LoginForm.onConfirmClick = function(props){
    props.serverConnector.authorize(LoginForm.state.login, LoginForm.state.password);
    LoginForm.state.password = '';
    LoginForm.state.login = '';
    let updateFront = document.getElementsByClassName('enterField');
    for (const element of updateFront) {
        element.value = '';
    }
}

export default LoginForm;