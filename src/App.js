import React, { Component } from 'react'
import logo from './logo.svg';
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
      monsters :[
        {
          name: 'frankenstine',
          id: 'id1'
        },
        {
          name: 'dracula',
          id: 'id2'
        },
        {
          name: 'wolfman',
          id: 'id3'
        }
      ]
    };
  }
  render(){
    return(
      <div className="App">
       {
         this.state.monsters.map(monster => <h1 key={monster.id}> 
           {monster.name} 
         </h1>)
       }
      </div>
    )
  }
}

export default App;
