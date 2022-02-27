import React from 'react'
import './App.css';

import Home from './home'
import TeethSales from './teethSales'
import Procedures from './procedures'
// import { render } from '@testing-library/react';


class App extends React.Component {

  // initialising state w/o constructor()
  state = {
      currentPage: 'default'
  }

  navigateTo = (destination) => {
    console.log('navigateTo()')
    this.setState({currentPage: destination})
  }

render(){

  let pageContent;

  if(this.state.currentPage === 'sales'){
    pageContent = <TeethSales />;
  } else if (this.state.currentPage === 'procedures'){
    pageContent = <Procedures />
  } else {
    pageContent = <Home />
  }

  return (
    <div className="App">
      <header>

      <h1>
        Dentistry is my passion. 
        It's my obsession.
        I need this.
      </h1>
      <nav>

        <a href="#" onClick={ () => this.navigateTo('home')}>Home</a> |&nbsp;
        <a href="#" onClick={ () => this.navigateTo('sales')}>Teeth Sales</a> |&nbsp;
        <a href="#" onClick={ () => this.navigateTo('procedures')}>Procedures</a>

        <br/>
        Current page: {this.state.currentPage}
      </nav>
      <hr/>
      </header>

      {
        // We want to show only ONE of tese
        // at a time, to give the effect of
        // navigating between unique 'pages'
        // in this SPA
        // i.e. we want to do what React calls
        // "conditional rendering"
      }


        {pageContent}


      {
        /*
        
        We are back in normal JS no 
        ... so we can be nornmal
      
        <home /> 

        ... what react does behind the scense is

        const homeInstance = new Home(props);
        homeInstance1.render()

        */
      }


    </div>
  );
  }
}

export default App;
