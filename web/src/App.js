import React from "react";
import { useWeb5 } from './helpers/useWeb5';


function App() {
  const { web5, myDid } = useWeb5();

  return (
    <div>Your Did is: {myDid}</div>
  );
}

export default App;
