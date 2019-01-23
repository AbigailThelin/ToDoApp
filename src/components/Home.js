import React, { Component } from 'react';
import Media from 'react-media';
import Header from './Header';
import Lists from './Lists';
import Mobile from './Mobile';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <Mobile />
            ) : (
              <>
                <Header />
                <Lists />
              </>
            )
          }
        </Media>
      </div>
    );
  }
}

export default Home;
