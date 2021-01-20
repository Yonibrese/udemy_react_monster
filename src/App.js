import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';

import './App.css';

// class component
class App extends Component{
  constructor(){
    super();
    this.state={
      monsters :[],
      searchFeild: ""
      
    };
  }
  // calling to get Json information
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users) => this.setState({ monsters: users }));
  }
//search from chang event
handleChange = (evt) => {
  this.setState({searchFeild: evt.target.value});
}

  render(){
    const { monsters, searchFeild } = this.state;
    const filterdMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
      );
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBar
          placeholder='search monsters'
          handleChange = {this.handleChange} 
        />
        <CardList monsters={filterdMonsters} />
      </div>
    )
  }
}

export default App;
