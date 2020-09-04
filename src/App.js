import React from 'react';
import CarList from './CardList'
import SearchBox from './Searchbox'
import { robots } from './robots';

const App = () => {
    return (
        <div>
          <h1>RoboFriends </h1>
          <SearchBox />
          <CarList robots={robots}/>
        </div>
    );
}

export default App;