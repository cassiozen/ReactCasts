import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/user';
import { Button } from 'semantic-ui-react'

class Auth extends Component {
  render() {
    const { user, getUser } = this.props
    return (
      <Button onClick={getUser}>
        { user? 'Logged' : 'Login' }
      </Button>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
}

const mapDispatchToProps = {
  getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
