import React, { Component } from 'react';
import Form from './form/';
import DevTools from './containers/DevTools';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <DevTools />
      </div>
    );
  }
}

export default App;