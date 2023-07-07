import { UsersList } from './UserList/UsersList';
import data from './data/users.json';
import Section from './Section/Section';
import { Component } from 'react';

export class App extends Component {
  // console.log(data);
  state = {
    users: data,
  };

  handleDelete = (id) => {
    this.setState((prevState) => {
     return {
      users: prevState.users.filter((user) => user.id!== id
    )};
  });
  };
  
  handleJobstatus = (id) => {
    this.setState((prevState) => {
      return {
        users: prevState.users.map((user) => user.id === id ? {...user, hasJob:!user.hasJob} : user)
      }

    })
  }

  render() {
    return (
      <Section title="UsersList">
        <UsersList users={this.state.users} handleDelete = {this.handleDelete} handleJobstatus={this.handleJobstatus}/>
      </Section>
    );
  }
}
