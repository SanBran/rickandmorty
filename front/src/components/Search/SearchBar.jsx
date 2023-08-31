import styles from "./SearchBar.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharacterByName } from "../../redux/actions";

export default function SearchBar() {

   const dispatch = useDispatch()
   
   const [nombre,setNombre] = useState("");

   const handleChange = (event) => {
      setNombre(event.target.value)
   }
   
   const onSearch = (nombre) => {
      dispatch(getCharacterByName(nombre))
   }
   
   return (
      <div>
      <input 
      className={styles.input} 
      type='search' 
      onChange={handleChange}
      />
      {nombre.length? <button 
      className={styles.button} 
      onClick={() => onSearch(nombre)}>
         Search
      </button> : <button 
      className={styles.buttonD} 
      >
         Search
      </button>  }
      
      </div>
   );
}
