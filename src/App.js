import React, { Component } from 'react';
import CarList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots';
//State: is an object that describe //props come out of state



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots, 
            searchfield: ''
        }
    }
    onSearchChange(event) {
        console.log(event.target.value);
    }

    render(){
    return (
        <div className='tc'>
          <h1>RoboFriends </h1>
          <SearchBox SearchChange={this.onSearchChange} />
          <CarList robots={this.state.robots}/>
        </div>
    );
  }
}

export default App;