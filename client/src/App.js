import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor() {
    super();
    this.state = {value : 'Not Fetched'}
  }

   componentDidMount() {
    fetch("http://54.165.127.56:8081/",{
    method: "GET", //http://100.26.185.156:8081/
    headers:{
    }})
      .then(res => res.text())
      .then(
        (result) => {
        console.log(result)
        this.setState({value: result});
        }
      )
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.value} Secured !!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
