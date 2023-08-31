import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import styles from './Access.module.css'

function Access() {

  const navigate = useNavigate()
  
  const [form, setForm] = useState('login')
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handlerSwitchForms = (formName) => {
    setForm(formName)
}

useEffect(() => {
  
  const timer = setTimeout(() => {
      setSignUpSuccess(false);
  }, 3000);

  return () => clearTimeout(timer);
  }, [signUpSuccess]);

  return (
    <div className={styles.mainContainer}>
       {signUpSuccess && <p className={styles.successMessage}>User created successfully</p>}
       {(form === 'login' || form === 'signup') &&
                (<>
                    <button className={styles.buttonClose}   
                    onClick={()=>{navigate(-1)}}>x</button>
                    <div className={styles.switchForms}>
                        <div 
                        className={form === 'login' ? styles.switchFocus : styles.switch}
                        onClick={()=>{handlerSwitchForms("login")}}
                        >
                            <h1 className={styles.switchTitle}>LOG IN</h1>
                        </div>
                        <div 
                        className={form === 'signup' ? styles.switchFocus : styles.switch}
                        onClick={()=>{handlerSwitchForms("signup")}}
                        >
                            <h1 className={styles.switchTitle}>SIGN UP</h1>
                        </div>
                    </div>
                    <div className={form === 'login' ? styles.loginContainer : styles.singupContainer}>
                        {form === 'login' && (<Login setForm={setForm}/>)}
                        {form === 'signup' && (<SignUp setForm={setForm}/>)}
                    </div>
                </>)}
    </div>
  )
}

export default Access