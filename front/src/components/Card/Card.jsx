import styles from './Card.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {  postFavorites, removeFavorite, deleteCharacter  } from '../../redux/actions';
import videoPortal from "../../Sources/Portal.gif" 

function Card({id,name,species,origin,gender, image,scrollCardRef, user, favs, userStatus}) {
   
   const [isFav, setIsFav] = useState(false);
   const [portal, setPortal] = useState(true)
   const dispatch = useDispatch()
   const navigate = useNavigate();

   useEffect(() => {
      favs.forEach((c) => {
        if (c.id === id) {
          setIsFav(true);
        }
      });
    }, []);
  

    const onClose = useCallback((id) => {
      dispatch(deleteCharacter(id));
    }, [dispatch]);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setPortal(false); 
       }, 1700);
  
      return () => clearTimeout(timeout)
    }, []);

   

   // const removeFavorite = async (id) => {
   //    await axios.delete(`http://localhost:3001/fav/${id}`);
   //    dispatch(getFavorites());
   //    alert("Eliminado con éxito");

   // }

   const handleFavorite = async() => {
      if (userStatus) {
         if (isFav) {
            try {
               await dispatch(removeFavorite({ id, user }));
               setIsFav(false);
            } catch (error) {
               console.error("Error removing favorite:", error);
            }
         } else {
            setIsFav(true);
            dispatch(postFavorites({user,id, name, origin, image, species, gender }))
         }
      }else{
         navigate('/login')
      }
      
   }

   

   return ( 
     
      <div className={styles.cardContainer}>

      
      {portal &&   <img src={videoPortal} alt='portal' className={styles.videos}  />}
         
      <div ref={scrollCardRef}
       className={`${styles.card} ${isFav ? styles.yCard : styles.card}`}>
         {
            isFav ? (
               <button className={styles.rbutton} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={styles.wbutton} onClick={handleFavorite}>🤍</button>
                  )}
         
                  <button className={styles.button} onClick={()=> onClose(id)}>X</button>
         
         <h2 className={styles.name}>{name}</h2>
         
         
         <img className={styles.image} src={image} alt="Card" /> 
         <h2 className={styles.species} >{species}</h2>
         <h2 className={styles.gender}>{gender}</h2>
      </div> 
      </div>
      
      
   );

   
}
   


export default Card;