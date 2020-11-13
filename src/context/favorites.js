const favoritesInitialState = {
  data: [],

};

const favoritesReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_FAVORITES':
      return {
        ...state,
        data: [...action.payload],
      };

    case 'REMOVE':
      return {
        ...state, 
        data: state.data.filter(fav => fav.url !== action.payload)

      }


    default:
      return state;
  }
};


export { favoritesInitialState, favoritesReducer };