import React from 'react';
import { Card } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';
import './login.css';

const Login = () => {
  return (
    <div className='login bg-info'>
      <Card className='card'>
        <LoginForm/>
      </Card>
    </div>
  )
}

export default Login;
