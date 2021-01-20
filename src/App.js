import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';

import './App.css';


//function component and basic component from create react app
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           My name is yoni
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
  render(){
    return(
      <div className="App">
        <input type='search' placeholder="search monsters"
        onChange={evt => this.setState({searchFeild: evt.target.value})}/>
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;
