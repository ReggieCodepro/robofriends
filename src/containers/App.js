import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList';
import CarList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css'
//State: is an object that describe //props come out of state

import {setSearchField} from '../actions'


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
   
}
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>{this.setState({robots: users})});
    }
    
    render(){
        const { robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchF
                ield.toLowerCase());
        })
        return !robots.length ?
             <h1> Loading</h1> :
             (
            <div className='tc'>
                <h1 className='f1'>RoboFriends </h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                <ErrorBoundry>
                <CarList robots={filteredRobots}/>
                </ErrorBoundry>
                </Scroll>
        </div>
    );
  }
 }


export default  connect(mapStateToProps, mapDispatchToProps)(App); 