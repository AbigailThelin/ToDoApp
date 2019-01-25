import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styles/progress.scss';

class MobileProgress extends Component {
    render(){
        const { toDoTasks } = this.props;
        let finished = toDoTasks.filter(i => i.checked === true);

        return (
            <div className='progress-container'>
                <div className='mobile-header'>
                    <Link to='/' className='link'>&#x2190;</Link>
                </div>

                <div className='progress-bar-container'>
                    <CircularProgress
                        className='progress-bar'
                        variant="static"
                        value={finished.length/toDoTasks.length*100}
                    />
                </div>
                
                <div className='progress-data'>
                    <span>TASKS CREATED: {toDoTasks.length}</span>
                    <span>TASKS COMPLETED: {finished.length}</span>
                    <span>PROGRESS: {finished.length/toDoTasks.length}</span>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
      toDoTasks: state.ToDoReducer.toDoTasks,
    };
  };
  
  MobileProgress.propTypes = {
    toDoTasks: PropTypes.array,
  };
  
  const mapDispatchToProps = {
  };

export default connect(mapStateToProps, mapDispatchToProps)(MobileProgress);