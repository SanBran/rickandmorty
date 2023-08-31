import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import styles from "./Favorites.module.css"

const Favorites = () => {

    const favorites = useSelector((state) => state.myFavorites)
    const userStatus = useSelector((state) => state.user.state);
    const user = useSelector((state) => state.userDetail);
    return(
        <div className= {styles.divStyles}>
            <Cards
              characters={favorites}
              userStatus={userStatus}
              user={user}
            />
        </div>
    )
};

export default Favorites