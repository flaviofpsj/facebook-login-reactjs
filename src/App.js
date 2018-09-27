import React, { Component } from 'react';

import Top from './components/Top';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div>
        <Top />
        <Content name='Flavio Farias' email='flavio_farias_@hotmail.com' picture='assets/img/1.jpg' />
      </div>
    );
  }
}

export default App;
