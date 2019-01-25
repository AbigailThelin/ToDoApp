import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { divider } from '../utils/divider';
import Modal from './Modal';
import Checkbox from '@material-ui/core/Checkbox';
import '../styles/taskpage.scss';
import {
    setModal,
    addTask,
    deleteTask,
    addToCompleted
} from '../reducers/actions';

class TaskPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        const  {match, toDoTasks, setModal, modalStatus, addToCompleted, deleteTask } = this.props;
        let d = divider(match.params.id, toDoTasks)
        return (
            <div className='task-page-container'>
                {modalStatus && <Modal overarching={match.params.id}/>}

                <div className='mobile-header'>
                    <Link to='/' className='link'>&#x2190;</Link>
                </div>

                <h1 className='task-title'>{match.params.id}</h1>

                <div className='subtask-container'>
                    {
                        d.map(i => {
                            return (
                                <div className='subtasks' key={i.title}>
                                    <div className='subtask-title'>
                                        <Checkbox
                                            checked={i.checked}
                                            onChange={() => addToCompleted(i)}
                                        />
                                        <span>{i.title}</span>
                                    </div>
                                    <span className='delete-subtask' onClick={() => deleteTask(i)}>&#10005;</span>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='add-btn' onClick={() => setModal(modalStatus)}>
                    <div color="primary" className='add-btn'>
                        <span>+</span>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
      modalStatus: state.ToDoReducer.modalStatus,
      toDoTasks: state.ToDoReducer.toDoTasks,
    };
  };
  
  TaskPage.propTypes = {
    setModal: PropTypes.func,
    addTask: PropTypes.func,
    addToCompleted: PropTypes.func
  };
  
  const mapDispatchToProps = {
    setModal,
    addTask,
    deleteTask,
    addToCompleted
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);