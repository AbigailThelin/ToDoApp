import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {
  addToCompleted,
  deleteTask
} from '../reducers/actions';
import '../styles/lists.scss';

class Lists extends Component {
  render() {
    return (
      <div className="lists">

        <div className='not-completed'>
          {
            this.props.toDoTasks.map(i => {
              return (
                <Paper key={i.title} elevation={1} className='paper'>
                  <span>task: {i.title}</span>
                  <span>finish by: {i.date}</span>
                  <Button variant="contained" onClick={() => this.props.addToCompleted(i)}>Click to finish</Button>
                </Paper>
            )
          })}
        </div>

        <div className='completed'>
          {
            this.props.completedTasks.map(i => {
              return (
                <Paper key={i.title} elevation={1} className='paper'>
                <span>task: {i.title}</span>
                <span>finish by: {i.date}</span>
                <Button variant="contained" onClick={() => this.props.deleteTask(i)}>Delete</Button>
              </Paper>
              )
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDoTasks: state.ToDoReducer.toDoTasks,
    completedTasks: state.ToDoReducer.completedTasks
  };
};

Lists.propTypes = {
  toDoTasks: PropTypes.array,
  addToCompleted: PropTypes.func,
  deleteTask: PropTypes.func
};

const mapDispatchToProps = {
  addToCompleted,
  deleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
