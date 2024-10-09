import React, { useState } from 'react';

const MovieContext = React.createContext();
const defaultValues = {
  isLogin: false,
};

const MovieProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MovieContext.Provider value={{state, setState }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
