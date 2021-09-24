import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Customcss.css';
import './Customcsstwo.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Team from './Team';
import Contact from './Contact';
import Donate from './Donate';
import ErrorBoundary from './ErrorBoundary';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      
      <div className="site-wrap">
      <Router>
      <ErrorBoundary>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/aboutus' component={About} />
        <Route path='/team' component={Team} />
        <Route path='/team' component={Team} />
        <Route path='/contact' component={Contact} />
        <Route path='/donate' component={Donate} />
      </Switch>  
      <Footer/>
      </ErrorBoundary>
      </Router>
      </div>
    </React.Fragment>
    
  );
}

export default App;
