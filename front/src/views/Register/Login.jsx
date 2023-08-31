import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import validationUser from '../validation/validationUser';
import validationPass from '../validation/validationPass';
import { getLogin } from '../../redux/actions';
import styles from './Login.module.css'

function Login({ setForm }) {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [logInfo, setLogInfo] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: '', password: '' })

  const handleInputChange = (event) => {
    const property = event.target.name
    const value =event.target.value

  

    setLogInfo({...logInfo, [property]: value});
    validationUser({...logInfo, [property]: value}, errors, setErrors)
    validationPass({...logInfo, [property]: value}, errors, setErrors)
    
}

const handlerLogIn =  (event) => {
  event.preventDefault();
  try {
     dispatch(getLogin(logInfo));
    setErrors("");
    
    
    navigate('/');
  } catch (error) {
    setErrors(error.message)
  }
}

  return (
    <form className={styles.fromContainer} >
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

            <button  type="submit" onClick={handlerLogIn} className={styles.button}>Login</button>
      
    </form>
  )
}

export default Login