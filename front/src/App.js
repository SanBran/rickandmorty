import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./views/About/About";
import Favorites from "./views/Favorites/Favorites";
import Access from "./views/Register/Access.jsx";
import { getFavorites } from "./redux/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.characters);
  const favorites = useSelector((state) => state.myFavorites);
  const userStatus = useSelector((state) => state.user.state);
  const user = useSelector((state) => state.userDetail);

  useEffect(() => {
    if (userStatus) {
      dispatch(getFavorites(user.id));
    } else {
      return;
    }
  }, [user]);

  return (
    <div id="container">
      <Routes>
        <Route
          path="/"
          element={
            <Cards
              characters={characters}
              user={user}
              userStatus={userStatus}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Access />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Nav user={user} userStatus={userStatus} />

      <video
        src="https://iframe.mediadelivery.net/play/152121/133ded83-9a2c-43a9-8ee7-e555081dec34"
        autoPlay
        muted
        loop
      />
      <video
        src="https://res.cloudinary.com/dajn5cfcv/video/upload/v1693505605/AbleDelayedFieldmouse_nt4txv.mp4?_s=vp-1.7.0"
        autoplay="true"
        muted="true"
        loop="true"
      ></video>
    </div>
  );
}

export default App;
