import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import { FETCH_TODO } from '../constants';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: FETCH_TODO,
      promise: fetch('https://todo-hapi-postgres.herokuapp.com/')
    })
  }
  render() {
    return (
      <div>
        <div className="content">
          <AddTodo />
          <VisibleTodoList />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect()(App);
