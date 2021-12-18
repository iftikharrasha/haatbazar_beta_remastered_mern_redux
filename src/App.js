import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import ScrollToTop from './ScrollToTop.js';
import HomePage from './Pages/HomePage/HomePage';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import './Sass/style.css';
import OutletPage from './Pages/OutletPage/OutletPage';
import OutletsPage from './Pages/OutletsPage/OutletsPage.js';
import AboutPage from './Pages/AboutPage/AboutPage.js';
import ContactPage from './Pages/ContactPage/ContactPage.js';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute.js';
import ProfilePage from './Pages/ProfilePage/ProfilePage.js';

function App() {
  return (
    <div className="App">
        <AuthProvider>
          <Router>
            <ScrollToTop>
              <Route render={({location}) => (
                <TransitionGroup>
                  <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                  >
                    <Switch location={location}>
                        <Route path="/home">
                            <HomePage/>
                        </Route>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/outlet/:outletKey">
                          <OutletPage/>
                        </Route>
                        <Route path="/outlets">
                          <OutletsPage/>
                        </Route>
                        <Route path="/about">
                          <AboutPage/>
                        </Route>
                        <Route path="/contact">
                          <ContactPage/>
                        </Route>
                        <PrivateRoute path="/profile">
                            <ProfilePage/>
                        </PrivateRoute>
                        <Route path="*">
                        </Route>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )} />
            </ScrollToTop>
          </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
