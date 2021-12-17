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
                        {/* <PrivateRoute path="/secret-base">
                            <Dashboard/>
                        </PrivateRoute> */}
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
