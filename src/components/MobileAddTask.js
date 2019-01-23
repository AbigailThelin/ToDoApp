import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {
  setModal,
  addTask
} from '../reducers/actions';
import '../styles/mobileAddTasks.scss';

class MobileAddTask extends Component {

    submit = () => {
        let title = document.getElementById('task-title').value;
        let date = document.getElementById('date').value;

        this.props.addTask({title, date});
        this.props.setModal(this.props.modalStatus);
    }

    render(){
        return(
            <div className='mobile-add-container'>
                <div className='mobile-header'>
                    <Link to='/' className='link'>&#x2190; Home</Link>
                </div>

                <span className='add-title'>Add Your Task</span>
                <TextField
                    id="task-title"
                    label="Task Title"
                    className="task-name"
                />
                <TextField
                    id="date"
                    label="Task Date"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <Link to='/'>
                    <div variant="contained" className='submit' onClick={this.submit}>
                        <span>Add Task</span>
                    </div>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      modalStatus: state.ToDoReducer.modalStatus
    };
  };
  
  MobileAddTask.propTypes = {
    setModal: PropTypes.func,
    addTask: PropTypes.func
  };
  
  const mapDispatchToProps = {
    setModal,
    addTask
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MobileAddTask);