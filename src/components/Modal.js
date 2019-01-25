import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper'; 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  setModal,
  addTask
} from '../reducers/actions';

import '../styles/modal.scss';

class Modal extends Component {

    submit = () => {
        let title = document.getElementById('task-title').value;

        if(title === ''){
            alert('needs a title')
        } else{
            this.props.addTask({title, overarching: this.props.overarching, checked: false});
            this.props.setModal(this.props.modalStatus);
        }
    }

    render() {
        return (
            <div className="modal-container">
                <Paper className='modal' elevation={1}>
                    <span>Add Your Task</span>
                    <TextField
                        id="task-title"
                        label="Task Title"
                        className="task-name"
                    />
                    <Button variant="contained" onClick={this.submit}>
                        Add Task
                    </Button>
                </Paper>
            </div>
        );
    }
}


const mapStateToProps = state => {
  return {
    overarchingTickets: state.ToDoReducer.overarchingGroups,
    modalStatus: state.ToDoReducer.modalStatus
  };
};

Modal.propTypes = {
  setModal: PropTypes.func,
  addTask: PropTypes.func
};

const mapDispatchToProps = {
  setModal,
  addTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
