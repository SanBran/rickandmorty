import styles from './Cards.module.css'
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
// import { getFavorites } from '../../redux/actions';
import { useEffect, useState, useRef } from 'react';
import logo from "../../Sources/logo.png"



export default function Cards({characters, onClose, idUser,userStatus}) {
   const dispatch = useDispatch();

   const favs = useSelector(state => state.myFavorites)
   const scrollCardRef = useRef(null); 
   console.log(favs);

   const scrollToCard = () => {
      if (scrollCardRef.current) {
        scrollCardRef.current.scrollIntoView({
          behavior: 'smooth', // Opciones: 'auto', 'smooth'
          block: 'start',     // Opciones: 'start', 'center', 'end', 'nearest'
        });
      }
    };
   
   // useEffect(() => {
   //    dispatch(getFavorites(idUser))
   // }, [idUser])

    useEffect(() => {
     scrollToCard()
    }, [characters])


   

   return( 
      
      <div className={styles.contain}>
      {characters == '' && <img className={styles.logo2} src={logo} />}
         <div className={styles.divStyles} >
      {characters.map(({id, name, origin, image, species, gender }) => {
         return <Card 
         Key={id}
         id={id}
         name ={name} 
         origin={origin}
         species={species} 
         gender={gender} 
         image={image}
         onClose={onClose}
         scrollCardRef={scrollCardRef}
         idUser={idUser}
            />
      })}
        </div>
      </div>


   )
        

   }
