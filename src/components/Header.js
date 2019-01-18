import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from './Modal';
import {
  setModal
} from '../reducers/actions';

import '../styles/header.scss';

class Header extends Component {
  render() {
    console.log('this.props;', this.props.tasks);
    return (
      <div className="header-container">
        {this.props.modalStatus ? <Modal /> : null}
        <h1>To Do App</h1>
        <div onClick={() => this.props.setModal(this.props.modalStatus)}>ADD A TASK &#x2b;</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.ToDoReducer.toDoTasks,
    modalStatus: state.ToDoReducer.modalStatus
  };
};

Header.propTypes = {
  tasks: PropTypes.array,
  setModal: PropTypes.func
};

const mapDispatchToProps = {
  setModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
