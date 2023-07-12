import { UsersList } from './UserList/UsersList';
import data from './data/users.json';
import Section from './Section/Section';
import { Component } from 'react';
import Button from './Button/Button';
// import Form from './Form/Form';
import { nanoid } from 'nanoid';
import FormikForm from './FormFormik/Formik';
import FilterForm from './FilterForm/FilterForm';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    users: null,
    isShowForm: false,
    // filterQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.users !== prevState.users) {
      localStorage.setItem('users', JSON.stringify(this.state.users));
    }
  }

  componentDidMount() {
    const parsedUsers = JSON.parse(localStorage.getItem('users')) ?? data;
    // if (parsedUsers) {
    //   if (parsedUsers.length) {
    //     this.setState({ users: parsedUsers });
    //   }
    //   this.setState({ data });
    // }
    parsedUsers.length > 0
      ? this.setState({ users: parsedUsers })
      : this.setState({ users: data });
  }
  openDetails = user => {
    this.setState({ userDetails: user });
  };
  closeModal = () => {
    this.setState({ userDetails: null });
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
        {this.state.users && (
          <UsersList
            users={this.state.users}
            handleDelete={this.handleDelete}
            handleJobstatus={this.handleJobstatus}
            openDetails={this.openDetails}
          />
        )}
        {!this.state.isShowForm ? (
          <Button text="Open form" handleClick={this.openForm} />
        ) : (
          // <Form closeForm={this.closeForm} formSubmit={this.addUser} />
          <FormikForm closeForm={this.closeForm} formSubmit={this.addUser} />
        )}
        {this.state.userDetails && (
          <Modal close={this.closeModal} user={this.state.userDetails} />
        )}
      </Section>
    );
  }
}
