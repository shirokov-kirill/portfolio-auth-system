import { render } from '@testing-library/react';
import './Auth.css';
import LoginForm from './LoginForm.js';

function Auth(props) {
  return (
    <div className="App">
      <LoginForm serverConnector = {props.serverConnector} next = {props.next}/>
    </div>
  );
}

export default Auth;
