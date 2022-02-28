import React from 'react'
import './App.css';

import Home from './home'
import TeethSales from './teethSales'
import Procedures from './procedures'
import ProcedureSearchResults from './ProcedureSearchResults'

import { Route, HashRouter as Router, Link } from 'react-router-dom';


class App extends React.Component {

render(){


  return (
    <div className="App">
      <Router>
        <header>

        <h1>
          Dentistry is my passion. 
          It's my obsession.
          I need this.
        </h1>
        <nav>
  {/* 
          <a href="#" onClick={ () => this.navigateTo('home')}>Home</a> |&nbsp;
          <a href="#" onClick={ () => this.navigateTo('sales')}>Teeth Sales</a> |&nbsp;
          <a href="#" onClick={ () => this.navigateTo('procedures')}>Procedures</a> */}

        

          <Link to="/">home</Link> |&nbsp;
          <Link to="/sales">Teeth Sales</Link> |&nbsp;
          <Link to="/procedures">Procedures</Link>


          <br/>

        </nav>
        <hr/>
        </header>

      

          <Route exact path = '/' component={ Home } />
          <Route exact path = '/sales' component={ TeethSales } />
          <Route exact path = '/procedures' component={ Procedures } />
          <Route exact path = '/procedures/search/:query' component={ ProcedureSearchResults } />
          

       </Router>


    </div>
  );
  }
}

export default App;
