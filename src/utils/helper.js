const objectToQueryString = (obj) => {
    return Object.keys(obj)
      .map((key) => key + '=' + obj[key])
      .join('&');
  };
  
  export {objectToQueryString};
  