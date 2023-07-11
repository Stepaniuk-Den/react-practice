import { UsersList } from './UserList/UsersList';
import data from './data/users.json';
import Section from './Section/Section';
import { Component } from 'react';
import Button from './Button/Button';
// import Form from './Form/Form';
import { nanoid } from 'nanoid';
import FormikForm from './FormFormik/Formik';
import FilterForm from './FilterForm/FilterForm';

export class App extends Component {
  state = {
    users: data,
    isShowForm: false,
    filterQuery: '',
  };

  handleDelete = id => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => user.id !== id),
      };
    });
  };

  handleJobstatus = id => {
    this.setState(prevState => {
      return {
        users: prevState.users.map(user =>
          user.id === id ? { ...user, hasJob: !user.hasJob } : user
        ),
      };
    });
  };

  openForm = () => {
    this.setState({ isShowForm: true });
  };

  closeForm = () => {
    this.setState({ isShowForm: false });
  };

  addUser = data => {
    const newData = {
      ...data,
      id: nanoid(),
      hasJob: false,
    };
    this.setState(prevState => {
      return {
        users: [...prevState.users, newData],
      };
    });
  };

  handleChangeFilter = e => {
    this.setState({
      users: data.filter(user =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
  };

  render() {
    return (
      <Section title="UsersList">
        <FilterForm handleChange={this.handleChangeFilter} />
        <UsersList
          users={this.state.users}
          handleDelete={this.handleDelete}
          handleJobstatus={this.handleJobstatus}
        />
        {!this.state.isShowForm ? (
          <Button text="Open form" handleClick={this.openForm} />
        ) : (
          // <Form closeForm={this.closeForm} formSubmit={this.addUser} />
          <FormikForm closeForm={this.closeForm} formSubmit={this.addUser} />
        )}
      </Section>
    );
  }
}
