import React, {createContext, useReducer, useEffect} from 'react';
import { dataReducer, dataInitialState } from './peopleState';
import { charStateInitialState, charStateReducer } from './oneCharacterState'
import { favoritesInitialState, favoritesReducer } from './favorites'
export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {

  const [people, dataDispatch] = useReducer(
    dataReducer,
    dataInitialState
  );
  const [char, charDispatch] = useReducer(
    charStateReducer,
    charStateInitialState
  )
const [favorites, favoritesDispatch] = useReducer(
  favoritesReducer,
  favoritesInitialState
)
  const state =  {
    people,
    char,
    favorites,
  };

  const dispatch = {
    dataDispatch,
    charDispatch,
    favoritesDispatch,
  };

  useEffect(() => {
    
    const fetchDataFromStorage = async () => {
      if(localStorage.favorites){
        const favorites = await localStorage.getItem('favorites');
        const parsedData = await JSON.parse(favorites)
        await favoritesDispatch({type: 'ADD_FAVORITES', payload : parsedData});
      }
      

    };

    fetchDataFromStorage();
  }, []);

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
