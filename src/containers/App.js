import React, { Component } from 'react';
import ContactList from '../components/ContactList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      pending: true,
      searchfield: ''
    };
  }

  async componentDidMount() {
    const resp = await fetch(
      'http://private-05627-frontendnewhire.apiary-mock.com/contact_list'
    );
    console.log(resp);
    const ret = !resp.ok ? [] : await resp.json();
    this.setState({ users: ret, pending: false });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { users, searchfield } = this.state;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return this.state.pending ? (
      <div className="loading-page flex-center">
        <h1>Loading Page</h1>
      </div>
    ) : (
      <React.Fragment>
        <header className="flex-space-between">
          <h2>Contact List</h2>
          <SearchBox searchChange={this.onSearchChange} />
        </header>
        <div className="contacts">
          <ContactList users={filteredUsers} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
