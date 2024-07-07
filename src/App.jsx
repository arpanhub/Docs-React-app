import React, { useState } from 'react'
import Background from './components/background.jsx';
import Foreground from './components/foreground.jsx';

function App() {
  return (
    <div className=" relative w-full h-screen bg-black text-white">
      <Background />
      <Foreground/>
    </div>
  );
}

export default App;
