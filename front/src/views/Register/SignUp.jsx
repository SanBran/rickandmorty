import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postUser } from '../../redux/actions';
import {expresions} from '../../utils/regex'
import styles from './Login.module.css'

function Login({ setForm,signUpSuccess }) {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [logInfo, setLogInfo] = useState({
     email: '',
     name: '',
     image:'https://i.ibb.co/K7rc712/user.png',
     password: '' })
  const [errors, setErrors] = useState({ 
    email: '',
    name: '',
    password: '' })
  
    const validateInputs = (state, property) => {
     
      if (!expresions[property].test(state[property])) {
        switch (property) {
          case 'name': setErrors({ ...errors, [property]: 'Invalid name' })
            break;
          case 'email': setErrors({ ...errors, [property]: 'Invalid email' })
            break;
          case 'password': setErrors({ ...errors, [property]: 'Password must be between 8-15 characters, lowercase, uppercase, numbers and special character' })

        }
      } else {
        switch (property) {
          case 'name': setErrors({ ...errors, [property]: '' })
            break;
          case 'email': setErrors({ ...errors, [property]: '' })
            break;
          case 'password': setErrors({ ...errors, [property]: '' })
            break;
        }
      }
  
    }

  const handleInputChange = (event) => {
    const property = event.target.name
    const value =event.target.value

    

    setLogInfo({...logInfo, [property]: value});
    validateInputs({ ...logInfo, [property]: value }, property)
    
}

const handlerSignUp =  (event) => {
  event.preventDefault();
  try {
     dispatch(postUser(logInfo));
    setErrors("");
    navigate('/');
   

    
  } catch (error) {
    setErrors(error.message)
  }
}

  return (
    <form className={styles.fromContainer} >
       <div className={styles.input}  >
            <label className={styles.user} htmlFor="email">Name </label>
            <input 
            className={styles.iUser}
            type="text" 
            name="name"
            value={logInfo.name}
            onChange={handleInputChange}
            />
            <p className={styles.errorUser}>{errors.name}</p>
       </div>
       <div className={styles.input}  >
            <label className={styles.user} htmlFor="email">Email </label>
            <input 
            className={styles.iUser}
            type="text" 
            name="email"
            value={logInfo.email}
            onChange={handleInputChange}
            />
            <p className={styles.errorUser}>{errors.email}</p>
       </div>

       <div className={styles.input} >
            <label className={styles.pass} htmlFor="password">Password </label>
            <input 
            className={styles.iPass}
            type='password'
            name="password"
            value={logInfo.password}
            onChange={handleInputChange}
            />
            <p className={styles.errorPass}>{errors.password}</p>
      </div>
        { errors.name || logInfo.name === "" || errors.email || logInfo.email === "" || errors.password || logInfo.password === "" ? <button  type="submit" className={styles.button} disabled>Register</button>: <button  type="submit" onClick={handlerSignUp} className={styles.button}>Register</button>}
            
      
    </form>
  )
}

export default Login