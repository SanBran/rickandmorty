import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import styles from './Access.module.css'

function Access() {

  const navigate = useNavigate()
  
  const [form, setForm] = useState('login')

  const handlerSwitchForms = (formName) => {
    setForm(formName)
}
  return (
    <div className={styles.mainContainer}>
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