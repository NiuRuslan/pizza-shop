import React from 'react';
import Menu from './menu';
import Navbar from './navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="ui main container" style={{marginTop: '5em'}}>
        <Menu />
      </div>
    </>
  );
}

export default App;
