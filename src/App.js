import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import { CurrentSectionProvider } from './contexts/CurrentSectionContex'
import { LanguageProvider } from './contexts/LanguageContext'
import { NavbarProvider } from './contexts/NavbarContext'
import { MouseProvider } from './contexts/MouseContext'
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
  @media (max-width: 991px) {
    overflow: scroll;
  }
}
`


const App = (props) => {


  // let cos = 0;
//   window.addEventListener('mousewheel', (e) => {
//      console.log("scroll")
//       return <Redirect to='/about' />
    
//       console.log(cos)
//       cos +=  e.deltaY
//       if(cos < 1000) {
//         console.log("powinno sie zmienic na home")
//       }
//       else if(cos > 1000 && cos < 2000) {
//         console.log("powinno sie zmienic na about")
    
//       } else if(cos > 2000 && cos < 3000) {
//         console.log("powinno sie zmienic na skills")
//       }
  
// }
//   )

// })


  return (
    <MouseProvider>
      <LanguageProvider>
        <NavbarProvider>
          <CurrentSectionProvider>
            <Global />
            <Router>
              <Route path='/' component={Base}/>
            </Router>
          </CurrentSectionProvider>
        </NavbarProvider>
      </LanguageProvider>
    </MouseProvider>
  );

}

export default App;
