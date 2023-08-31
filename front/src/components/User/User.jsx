import React, {} from 'react'
import { useDispatch } from 'react-redux'
import {FiLogOut} from 'react-icons/fi'
import styles from  './User.module.css'
import { logOut } from '../../redux/actions'


function User({ user, open, setOpen}) {

    const dispatch = useDispatch()

    const handleLogOut = ()=>{
        dispatch(logOut())
        setOpen(false)
    }
      
    return (
      
      <div className={styles.container}>
        <div className={styles.card}>
        <button className={styles.buttonClose}   
                    onClick={()=>setOpen(false)}>x</button>
            <img className={styles.image} src={user.image} alt="userImage" />
            <h1 className={styles.name}>{user.name}</h1>
                <div className={styles.logout}>
                    <button className={styles.logOutButton} onClick={() => {handleLogOut()}}>Log out<FiLogOut className={styles.icon}/></button>
                </div>
        </div>
        
        
      </div>
    )
}

export default User