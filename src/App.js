import { React } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import './Sass/style.css';

function App() {
  return (
    <div className="App">
        <AuthProvider>
          <Router>
            <Route render={({location}) => (
                <Switch location={location}>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    {/* <PrivateRoute path="/secret-base">
                        <Dashboard/>
                    </PrivateRoute> */}
                    <Route path="*">
                    </Route>
                </Switch>
            )} />
          </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
