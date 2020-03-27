import React from 'react';
import Home from './containers/Home/Home'
import './animations/animations.css'
import {createGlobalStyle} from 'styled-components'
import Rockout from './img/Rockout.ttf'

const Global = createGlobalStyle`
@font-face {
  font-family: 'Rockout';
  src: url(${Rockout}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
body {
  overflow-x: hidden;
  margin: 0;
  font-family: 'Rockout', cursive;
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
