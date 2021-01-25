import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AmiibosPage from './Pages/AmiibosPage/AmiibosPage';
import { AmiiboDetailPage } from './Pages/AmiibosPage/Pages/AmiiboDetailPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import { GameSeriesPage } from './Pages/GameSeriesPage/GameSeriesPage';
import HomePage from './Pages/HomePage/HomePage';
import { Menu } from './Shared/components/Menu/Menu';
// import { ButtonSimpleStyles } from './styles/ButtonSimpleStyles';
// import { ButtonStyles } from './styles/ButtonStyles';
// import { HeadingPropsStyles } from './styles/HeadingPropsStyles';
import { darkTheme, lightTheme } from './styles/Themes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import ToggleTheme from './Shared/components/ToggleTheme/ToggleTheme';


function App() {

  const [theme, setTheme] = useState(darkTheme)

  return (
    <div>
      <header>
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <ToggleTheme theme={theme} setTheme={setTheme}/>
        </ThemeProvider>
        {/* <ButtonSimpleStyles>Hola Soy un Botón!</ButtonSimpleStyles> */}
        {/* <HeadingPropsStyles secondary>
          App
        </HeadingPropsStyles> */}
        {/* <HeadingPropsStyles>
          App
        </HeadingPropsStyles> */}
        <div className="App">
          <Router>
            <Menu/>
            <Switch>
              <Route path="/amiibos/:tail">
                <AmiiboDetailPage/>
              </Route>
              <Route path="/amiibos">
                <AmiibosPage/>
              </Route>
              <Route path="/gameseries">
                <GameSeriesPage/>
              </Route>
              <Route path="/contact">
                <ContactPage/>
              </Route>
              <Route path="/">
                <HomePage/>
              </Route>
            </Switch>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
