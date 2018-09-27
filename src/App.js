import React, { Component } from 'react';

import Top from './components/Top';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div>
        <Top />
        <Content />
      </div>
    );
  }
}

export default App;
