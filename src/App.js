import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { People } from './Pages/People'
import { HeroDetails } from './Pages/HeroDetails'
import { Favorites } from './Pages/Favorites'
import { GlobalContextProvider } from './context/context'
import { Nav } from './componenets/Nav'


function App() {

  
  return (
    <GlobalContextProvider>
    <BrowserRouter>
      <div className="header">
        <h1 className='header-title'>Star Wars API</h1>
        <Nav />
      </div>
      <div className="container">
          <Switch>
            <Route path={'/'} exact component={People} />
            <Route path={'/favorites'} component={Favorites} />
            <Route path={'/detail/:id'} component={HeroDetails} />
          </Switch>
      </div>
    </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
