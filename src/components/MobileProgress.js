import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/progress.scss';

class MobileProgress extends Component {
    render(){
        const {toDoTasks, completedTasks} = this.props;

        return (
            <div className='progress-container'>
                <div className='mobile-header'>
                    <Link to='/' className='link'>&#x2190;</Link>
                </div>

                <div className='progress-bar'>
                    this is the bar
                </div>
                
                <div className='progress-data'>
                    <span>TASKS CREATED: {toDoTasks.length + completedTasks.length}</span>
                    <span>TASKS COMPLETED: {completedTasks.length}</span>
                    <span>PROGRESS: {completedTasks.length / toDoTasks.length}</span>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
      toDoTasks: state.ToDoReducer.toDoTasks,
      completedTasks: state.ToDoReducer.completedTasks
    };
  };
  
  MobileProgress.propTypes = {
    toDoTasks: PropTypes.array,
  };
  
  const mapDispatchToProps = {
    // addToCompleted,
    // deleteTask
  };

export default connect(mapStateToProps, mapDispatchToProps)(MobileProgress);