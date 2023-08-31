import axios from "../utils/axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const GET_CHARACTER_BY_NAME = "GET_CHARACTER_BY_NAME";
export const GET_CHARACTER_BY_ID = "GET_CHARACTER_BY_ID";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const GET_FAVORITES = "GET_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const LOG_USER = "LOG_USER";
export const LOG_OUT = "LOG_OUT";
export const POST_USER = "POST_USER";

export const getFavorites = (id) => {
  const data = {
    id: id,
  };
  return async function (dispatch) {
    const response = await axios.post("/fav", data);
    dispatch({ type: GET_FAVORITES, payload: response.data });
  };
};

export const postFavorites = ({
  idUser,
  name,
  origin,
  image,
  species,
  gender,
}) => {
  const data = {
    userId: idUser,
    name: name,
    origin: origin.name,
    species: species,
    gender: gender,
    image: image,
  };
  return async function (dispatch) {
    const response = await axios.post("/newfav", data);
    console.log(response.data);
    dispatch({ type: ADD_FAVORITE, payload: response.data });
  };
};

export const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
};

export const getCharacterByName = (nombre) => async (dispatch) => {
  try {
    const response = await axios.get(`/character/${nombre}`);
    const data = response.data;
    console.log(response.data);
    data.map((c) => {
      return dispatch({
        type: GET_CHARACTER_BY_NAME,
        payload: c,
      });
    });
  } catch (error) {
    alert("No matches found");
  }
};

export const getCharacterById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/character/random/${id}`);
    const data = response.data;
    dispatch({
      type: GET_CHARACTER_BY_ID,
      payload: data,
    });
  } catch (error) {}
};

export const getCharacterDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`/character/random/${id}`);
    dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
  };
};

export const deleteCharacter = (id) => {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (caso) => {
  return {
    type: ORDER,
    payload: caso,
  };
};

export const getLogin = (form) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/activateUser", form);
      return dispatch({
        type: LOG_USER,
        payload: response.data,
      });
    } catch (error) {}
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
export const postUser = (form) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/newUser", form);
      console.log(response);
      return dispatch({
        type: POST_USER,
        payload: response.data,
      });
    } catch (error) {}
  };
};
