import { useState } from 'react';
import { Card } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';
import PasswordReset from '../../components/password-reset/PasswordReset';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formLoad, setFormLoad] = useState('login');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        break
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(email, password);
  }

  const handleResetSubmit = e => {
    e.preventDefault()

    console.log(email);
  }


  const formSwitcher = formType => {
    setFormLoad(formType)
  }

  return (
    <div className='login bg-info'>
      <Card className='card'>
        {
          formLoad === 'login' && (
            <LoginForm 
              handleChange={handleChange} 
              email = {email}
              password = {password}
              handleSubmit = {handleSubmit}
              formSwitcher = {formSwitcher}
            />
          )
        }

        {
          formLoad === 'reset' && (
            <PasswordReset
              handleChange={handleChange} 
              email = {email}
              handleResetSubmit = {handleResetSubmit}
              formSwitcher = {formSwitcher}
            />
          )
        }
        
       
      </Card>
    </div>
  )
}

export default Login;
