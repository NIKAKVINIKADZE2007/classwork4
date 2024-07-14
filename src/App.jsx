import React from 'react';
import Header from './Header/Header';
import Randomname from './Randomname/Randomname';

function App() {
  const names = ['Alice', 'Bob', 'Charlie', 'Diana'];

  return (
    <>
      <Header></Header>
      <Randomname names={names} />
    </>
  );
}

export default App;
