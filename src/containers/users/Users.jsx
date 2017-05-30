import React, { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  componentDidMount() {
    this.setFive();
  }
  setFive() {
    this.setState({
      number: 5,
    });
  }
  render() {
    return <div>{this.state.number}</div>;
  }
}

export default Users;
