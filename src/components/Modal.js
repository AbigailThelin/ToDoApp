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
        let date = document.getElementById('date').value;

        this.props.addTask({title, date});
        this.props.setModal(this.props.modalStatus);
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
                <TextField
                    id="date"
                    label="Task Date"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                    shrink: true,
                    }}
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
