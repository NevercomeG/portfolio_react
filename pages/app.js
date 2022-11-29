import React from 'react'



export const UserContext = React.createContext();

function App(){
  return(
    <UserContext.Provider value="jesus">
      <User/>
    </UserContext.Provider>
  );
}
export default App;
