import React from 'react';
import CarList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots';

const App = () => {
    return (
        <div className='tc'>
          <h1>RoboFriends </h1>
          <SearchBox />
          <CarList robots={robots}/>
        </div>
    );
}

export default App;