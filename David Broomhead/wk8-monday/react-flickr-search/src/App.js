import React from 'react'; // get used to this
import './App.css';
import Home from './components/Home.js';
import FlickrSearch from './FlickrSearch.js';
import ThumbnailGallery from './components/ThumbnailGallery.js';
import { Route, HashRouter as Router, Link} from 'react-router-dom';

class App extends React.Component {

  render(){

    return (
      <div className="App">
        <Router>
          <header>
            <nav>
              <Link to="/">Home</Link> {' | '}
              <Link to="/search">Search</Link>
            </nav>
          </header>            
          
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={FlickrSearch} />
            <Route exact path="/search/:query" component={FlickrSearch} />

          </Router>
      </div>
    );
  } // render()
} // class App


export default App;
// so that index.js can 'import App from "./App"'
