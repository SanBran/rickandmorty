import styles from './Card.module.css'
import { connect, useDispatch } from 'react-redux';
import {  postFavorites, removeFavorite, deleteCharacter  } from '../../redux/actions';
import { useState, useEffect } from 'react';
import videoPortal from "../../Sources/Portal.gif" 

function Card({id,name,species,origin,gender, image, myFavorites,scrollCardRef, idUser}) {

   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch()

   const onClose = (id) => {
      dispatch(deleteCharacter(id));
    };

   const [renderizadoCompletado, setRenderizadoCompletado] = useState(false);

   useEffect(() => {
      const realizarRenderizado = () => {
        setTimeout(() => {
          setRenderizadoCompletado(true);
        }, 2000);
      };
  
      realizarRenderizado();
    }, [renderizadoCompletado]);

   

   // const removeFavorite = async (id) => {
   //    await axios.delete(`http://localhost:3001/fav/${id}`);
   //    dispatch(getFavorites());
   //    alert("Eliminado con éxito");

   // }

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFavorite(id)

      } else {
         setIsFav(true);
         dispatch(postFavorites({idUser, name, origin, image, species, gender }))
      }
   }

   

   return ( 
      <>
      
            <img src={videoPortal} alt='portal' className={styles.videos}  />
         
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
      </> 
      
   );

   
}
   
const mapDispatchToProps = (dispatch) => {
   return {
      
      removeFavorite: (id) => {dispatch(removeFavorite(id))}
   }
};

const mapStateToProps = (state) => {
return {
   myFavorites: state.myFavorites
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);