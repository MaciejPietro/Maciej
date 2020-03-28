import React from 'react';
import Base from './containers/Base/Base'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
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
  overflow: hidden;
  margin: 0;
  font-family: 'Rockout', cursive;
}
`


function App() {
  return (
    <LanguageProvider>
      <Global />
      <Router>
        <Route path='/' component={Base}/>
      </Router>
    </LanguageProvider>
  );
}

export default App;
