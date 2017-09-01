import React, { Component } from 'react';
import logo from './auth_logo.png';
import './App.css';
import router from './routers/wizardrouter'
import {connect} from 'react-redux' ;
import {Link} from 'react-router-dom';

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     thingsToDisplay: [],
  //     url: 'http://localhost:3000'
  //   }
  // }
  // componentDidMount(){
  //     this.getProperties();
  // }
  
  // getProperties() {
  //   axios.get(this.state.url + '/api/properties/')
  //   .then((resp) => {
  //     this.setState({
  //       thingsToDisplay: 
  //     })
  //   })
  // }

  render() {
    const { filterProperties } = this.props;


    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><Link to="/StepOne"><button>Add new property</button></Link></h2>
        </div>

        <p className="App-intro">
          List Properties with "desired rent" less than $ <input onChange={ ( e ) => filterProperties( e.target.value ) } ></input>
        <button>Filter</button>
        <button>Reset</button>
        </p>

        <div>

        </div>

        <div>
        {router}
        </div>
      </div>
    );
  }
}

export default App;
