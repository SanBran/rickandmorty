import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchBar from "../Search/SearchBar";
import User from "../User/User";
import styles from './Nav.module.css';
import profile from '../../Sources/profile.png'


import { getCharacterById } from "../../redux/actions";


export default function Nav({user, userStatus}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userImage = user.image

    const [open, setOpen] = useState(false) 

    
    const handleOverlayToggle = () => {
          if(userStatus){
            if (open) {
              setOpen(false)
            }else{
              setOpen(true)

            }
            
          }else{
            navigate("/login");
          }
          
      };

      const random = () => {
        const id = Math.floor(Math.random() * 827) + 1;
        
        dispatch(getCharacterById(id))
      };
    
    return (
        <div className={styles.nav}>
        <Link className={styles.name} to="/">
            <h3>HOME</h3>
        </Link>

        <Link className={styles.about} to="/about">
            <h3>ABOUT</h3>
        </Link>

        {userStatus? <Link className={styles.fav} to="/favorites">
            <h3>FAVORITES</h3>
        </Link>: <Link className={styles.fav} to="/login">
            <h3>FAVORITES</h3>
        </Link>}

        
        
        <button 
      className={styles.random} 
      onClick={() => random()}>
         Random
      </button> 

        <SearchBar/>

        <div className={styles.profile}>
      
      <img className={styles.img} onClick={handleOverlayToggle}  src={userStatus? userImage: profile} alt="profile" />
        {open? <User user={user} open={open} setOpen={setOpen}/> : <></>}
      </div>


        </div>
    )
  
 }