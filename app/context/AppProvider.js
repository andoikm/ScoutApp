import React, { createContext, useCallback, useContext, useMemo } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const globalState = {
    screenName: 'Log out page !!!!',
  };

  const handleLogOut = useCallback(() => {
    alert('logout');
  }, []);

  const contextValue = useMemo(() => ({
    globalState,
    handleLogOut,
  }), [globalState, handleLogOut]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalState = () => useContext(AppContext);
