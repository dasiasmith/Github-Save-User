import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';


function App() {
  
  return (
     <div className='App'>
       <Header/>
       <SearchBar placeholder={"Type in username"}/>
      </div>
  );
}

export default App;
