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

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js','../particles.json', function() {
  console.log('callback - particles.js config loaded');
});

export default App;
