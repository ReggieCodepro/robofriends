import React, { Component } from 'react';
import CarList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots';
import Scroll from './Scroll';
import './App.css'
//State: is an object that describe //props come out of state



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots, 
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends </h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
          <CarList robots={filteredRobots}/>
          </Scroll>
        </div>
    );
  }
}

export default App;