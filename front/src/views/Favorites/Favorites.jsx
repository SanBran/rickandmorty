import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import styles from "./Favorites.module.css"

const Favorites = () => {

    const favorites = useSelector((state) => state.myFavorites)
    return(
        <div className= {styles.divStyles}>
            {
                favorites.map(({id,name,species,gender,image}) => {
                    return( <Card 
                    Key={id}
                    id={id}
                    name ={name} 
                    species={species}  
                    gender={gender} 
                    image={image}
                    />)
                })
            }
        </div>
    )
};

export default Favorites