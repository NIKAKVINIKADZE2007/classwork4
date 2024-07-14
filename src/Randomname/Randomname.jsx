import React, { useState } from 'react';

const Randomname = (props) => {
  const [names, setName] = useState(props.names[Math.floor(Math.random() * 4)]);

  const setnewname = () => {
    setName(props.names[Math.floor(Math.random() * 4)]);
  };
  return (
    <>
      <button onClick={setnewname}>Select Random name</button>
      <h1>hello {names}</h1>
    </>
  );
};

export default Randomname;
