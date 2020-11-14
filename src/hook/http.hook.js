import {useCallback} from 'react';

const useHttp = (dispatch) => {
  const baseURL = 'https://swapi.dev/api/'

  const request = useCallback(async (url, params, method = 'GET') => {
    const options = {
      method
    };
    
    dispatch({type: 'LOADING'});

    const response = await fetch(baseURL + url + params, options);
    const people = await response.json();
    if (!response.ok) {
      throw new Error(people.error);
    }
    return people;
  }, []);

  const get = (url, params) => request(url, params);

  return { get }
};

export default useHttp;