import React, { Component } from 'react';
import CarList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots';
//State: is an object that describe //props come out of state
const state = { 
    robots: robots,
    searchfield: ''

}


class App extends Component {
    render(){
    return (
        <div className='tc'>
          <h1>RoboFriends </h1>
          <SearchBox />
          <CarList robots={robots}/>
        </div>
    );
  }
}

export default App;