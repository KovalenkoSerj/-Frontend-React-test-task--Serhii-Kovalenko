const dataInitialState = {
    loading: false,
    data: null,
    // films: null,
    error: null,
  };
  
  const dataReducer = (state, action) => {
    switch (action.type) {
      case 'LOADING':
        return {
          ...state,
          loading: true
        };
  
      case 'GET_PEOPLE':
        return {
          ...state,
          data: action.payload,
          loading: false
        };
        
  
      case 'ERROR':
        return {
          ...state,
          error: action.payload,
          loading: false

        };
  
      default:
        return state;
    }
  };

  
  export {dataInitialState, dataReducer};