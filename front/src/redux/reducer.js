import {
  ADD_FAVORITE,
  GET_CHARACTER_BY_NAME,
  GET_CHARACTER_BY_ID,
  GET_CHARACTER_DETAIL,
  DELETE_CHARACTER,
  GET_FAVORITES,
  FILTER,
  ORDER,
  REMOVE_FAVORITE,
  LOG_USER,
  LOG_OUT,
  POST_USER,
} from "./actions";

const initialState = {
  characters: [],
  myFavorites: [],
  characterDetail: {},
  user: { state: false, ref: "" },
  userDetail: {},
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      if (!state.myFavorites.some((char) => char.id === action.payload.id)) {
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload],
        };
      }

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

    case GET_CHARACTER_BY_NAME:
      if (!state.characters.some((char) => char.id === action.payload.id)) {
        return {
          ...state,
          characters: [...state.characters, action.payload],
        };
      }
      return state;

    case GET_CHARACTER_BY_ID:
      if (!state.characters.some((char) => char.id === action.payload.id)) {
        return {
          ...state,
          characters: [...state.characters, action.payload],
        };
      }
      return state;

    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };

    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (char) => char.id !== action.payload
        ),
      };

    case GET_FAVORITES:
      return { ...state, myFavorites: action.payload };

    case FILTER:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };

    case ORDER:
      if (action.payload === "Ascendente") {
        return { ...state, myFavorites: state.allCharacters.sort };
      }
      break;
    case LOG_USER:
      return {
        ...state,
        user: action.payload,
        userDetail: action.payload.detail,
      };

    case POST_USER:
      return { ...state, users: action.payload };

    case LOG_OUT:
      return { ...state, user: { state: false, ref: "" }, myFavorites: [] };

    default:
      return { ...state };
  }
};

export default rootReducer;
