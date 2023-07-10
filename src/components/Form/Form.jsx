import React, { Component } from 'react'

export default class Form extends Component {

state={
  name:'',
  email:''
}

handleChange = ({target:{name, value}}) => {
  this.setState({
    [name]:[value]
  })
}

handleSubmit = (event) => {
  event.preventDefault();
 this.props.formSubmit(this.state)
 this.props.closeForm()
}

  render() {
    const {handleChange, handleSubmit} = this;
    return (
      <form onSubmit={handleSubmit}>
<label>
  Name:
  <input onChange={handleChange} type="text" name="name"/>
</label>
<label>
  Email:
  <input onChange={handleChange} type="email" name="email"/>
</label>
<button type="submit">Save</button>
      </form>
    )
  }
}
