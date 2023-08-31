import styles from './Cards.module.css'
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import logo from "../../Sources/logo.png"



export default function Cards({characters, user, userStatus}) {

  

   const favs = useSelector(state => state.myFavorites)
   const scrollCardRef = useRef(null); 

   const scrollToCard = () => {
      if (scrollCardRef.current) {
        scrollCardRef.current.scrollIntoView({
          behavior: 'smooth', // Opciones: 'auto', 'smooth'
          block: 'start',     // Opciones: 'start', 'center', 'end', 'nearest'
        });
      }
    };
   
   // useEffect(() => {
   //    dispatch(getFavorites(user))
   // }, [user])

    useEffect(() => {
     scrollToCard()
    }, [characters])


   

   return( 
      
      <div className={styles.contain}>
      {characters == '' && <img className={styles.logo2} src={logo} />}
         <div className={styles.divStyles} >
      {characters.map(({id, name, origin, image, species, gender }) => {
         return <Card 
         key={id}
         id={id}
         name ={name} 
         origin={origin}
         species={species} 
         gender={gender} 
         image={image}
         scrollCardRef={scrollCardRef}
         user={user}
         favs={favs}
         userStatus={userStatus}
            />
      })}
        </div>
      </div>


   )
        

   }
