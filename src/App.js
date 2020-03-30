import React from 'react';
import Base from './containers/Base/Base'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { NavbarProvider } from './contexts/NavbarContext'
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
  
  margin: 0;
  font-family: 'Rockout', cursive;
}
`


const App = () => {


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
    <LanguageProvider>
      <NavbarProvider>
        <Global />
        <Router>
          <Route path='/' component={Base}/>
        </Router>
      </NavbarProvider>
    </LanguageProvider>
  );

}

export default App;
