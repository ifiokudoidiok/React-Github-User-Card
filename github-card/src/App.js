import React from 'react';
import GithubUser from './components/GithubUser';
import Followers from './components/Followers';

import lambdalogo from './assets/lambdalogo.png';
import githublogo from './assets/githublogo.png';

import './App.css';

class  App extends React.Component {
  constructor(){
    super();
  }
  render(){

    return (
      <div className="App">
        <div className="header">

         <img src={lambdalogo} alt="Lambda Logo"/>
        <span>❤️'s</span>
        <img src={githublogo} alt="GitHub Logo" />
        </div>
     
       
        <GithubUser/>
        <Followers/>

      </div>
    );
  }
}

export default App;
