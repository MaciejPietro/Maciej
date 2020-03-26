import React from 'react';
import Home from './containers/Home/Home'
import './animations/animations.css'
import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
body {
  overflow-x: hidden;
  margin: 0;
font-family: 'Amatic SC', cursive;
}

`


function App() {
  return (
    <>
      <Global />
      <Home>
      </Home>
    </>
  );
}

export default App;
