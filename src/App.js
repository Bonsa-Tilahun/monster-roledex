import React, {Component} from 'react';
import {CardList} from './componentes/card-list/card-list.component';
import {SearchBox} from './componentes/searchbox/searchbox.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monesters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monesters: users}))
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monesters, searchField } = this.state;
    const filterdMonsters = monesters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
      <h1>Monster Roledex</h1>
        <SearchBox
        placeholder='search monster'
        handleChange={this.handleChange}
        />
        <CardList monesters={filterdMonsters} />

        
        
      </div>
    )
  }
}

export default App;
