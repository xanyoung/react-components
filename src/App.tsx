import React from 'react';
import ClassComponent from './tasks/ClassComponent';
import FunctionComponent from './tasks/FunctionComponent';

function App() {
  return (
    <>
      <h2>Class Component</h2>
      <ClassComponent />
      <h2>Function Component</h2>
      <FunctionComponent exampleProp='World'/>
    </>
  );
}

export default App;
