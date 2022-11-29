import React from 'react'



export const UserContext = React.createContext();

function App(){
  return(
    <UserContext.Provider value="jesus">
      <User/>
    </UserContext.Provider>
  );
}

function User(){
    const value = React.useContext(UserContext);
    return <h1>{value}</h1>

}

export default App;
