import React from 'react';
import GithubUser from './components/GithubUser';
import Followers from './components/Followers';

import './App.css';

class  App extends React.Component {
  constructor(){
    super();
  }
  render(){

    return (
      <div className="App">
        App page(Serve as Navigation/Route)
        <GithubUser/>
        <Followers/>

      </div>
    );
  }
}

export default App;
