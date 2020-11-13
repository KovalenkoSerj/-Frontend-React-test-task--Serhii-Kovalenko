const charStateInitialState = {
  loading: false,
  data: {},
  films: [],
  homeworld: null,
  error: null,
};

const charStateReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      };

    case 'GET_CHAR':
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case 'GET_FILMS':
      return {
        ...state,
        films: action.payload,
        loading: false
      };
      case 'GET_HOMEWORLD':
      return {
        ...state,
        homeworld: action.payload,
        loading: false
      };

    case 'CLEAR_STATE': 
      return {
        ...state, 
        data: {}
      }
    

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


export { charStateInitialState, charStateReducer };