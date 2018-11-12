import React from 'react';
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

const App = (props) => {
    return (
        <div className="main">
            <SearchBar />
            <SearchResult />
        </div>
    )
}

export default App;
