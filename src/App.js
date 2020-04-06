import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import { CurrentSectionProvider } from './contexts/CurrentSectionContex'
import { LanguageProvider } from './contexts/LanguageContext'
import { NavbarProvider } from './contexts/NavbarContext'
import { MouseProvider } from './contexts/MouseContext'
import { CursorProvider } from './contexts/CursorContext'
import Cursor from './components/Cursor/Cursor'
import './animations/animations.css'
import Base from './containers/Base/Base'
import Rockout from './fonts/Rockout.ttf'
import Tamira from './fonts/Tamira.otf'

const Global = createGlobalStyle`
@font-face {
  font-family: 'Rockout';
  src: url(${Rockout}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Tamira';
  src: url(${Tamira}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
body {
  overflow: hidden;
  margin: 0;
  font-family: 'Rockout', cursive;
  cursor: default;
  @media (max-width: 991px) {
    overflowY: scroll;
  }
}
::-webkit-scrollbar {
  width: 0px;  
  background: transparent; 
}
`


const App = (props) => {
  return (
    <MouseProvider>
      <LanguageProvider>
        <NavbarProvider>
          <CursorProvider>
            <CurrentSectionProvider>
              <Global />
              {/* <Cursor /> */}
              <Router>
                <Route path='/Maciej/' component={Base}/>
              </Router>
            </CurrentSectionProvider>
          </CursorProvider>
        </NavbarProvider>
      </LanguageProvider>
    </MouseProvider>
  );

}

export default App;
