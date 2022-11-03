import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { clickHelloAction } from './actions/index'
import { bindActionCreators } from 'redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgPrivate: ''
    }
  }
  //console.log(connect()(App));

  handleOnChange = (event) => {
    this.setState({
      msgPrivate: event.target.value
    });
  }

  render() {
    const { msgPrivate } = this.state;
    const { msg, clickHelloAction } = this.props;
    console.log('Props', this.props);
    return (
      <div className="App">
        <input type='text' onChange={ this.handleOnChange }></input>
        <button type='button' onClick={() => { clickHelloAction(msgPrivate) }}>Click</button>
        <h1>{ msg }</h1>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log('Store App', store)
  return {
    msg: store.clickReducer.msg
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ clickHelloAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
