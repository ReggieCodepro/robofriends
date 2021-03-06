import React, { Component } from 'react';
import {connect} from 'react-redux';
import CarList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css'
//State: is an object that describe //props come out of state

import {requestRobots, setSearchField} from '../actions'


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
   
}
class App extends Component {
    

    componentDidMount(){
       this.props.onRequestRobots();
    }
    
    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot =>{
            console.log(searchField);
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
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