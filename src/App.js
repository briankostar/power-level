import React, { Component } from 'react';
import Header from './components/Header'
import FormInput from './components/FormInput'
import ServerOutput from './components/ServerOutput'
import DataAnalysis from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormInput />
        <ServerOutput />
        {/* <DataAnalysis /> */}
      </div>
    );
  }
}

export default App;
