import React, { Component } from 'react';
import CardList from '../components/ContactList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchfield: ''
    };
  }

  async componentDidMount() {
    const resp = await fetch(
      'http://private-05627-frontendnewhire.apiary-mock.com/contact_list'
    );
    const ret = await resp.json();
    this.setState({ users: ret });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { users, searchfield } = this.state;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !users.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Contact List</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList users={filteredUsers} />
        </Scroll>
      </div>
    );
  }
}

export default App;
