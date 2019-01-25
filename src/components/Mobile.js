import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import '../styles/Mobile.scss'
import { divider } from '../utils/divider';
import { addOverarching } from '../reducers/actions';

class Mobile extends Component {

    submitOverarching = () => {
        let val = document.getElementById('list-type').value;
        if(val === ''){
            alert('must have a title')
        } else
            this.props.addOverarching({title: val})
            document.getElementById('list-type').value = '';
    }

    render(){
        const { overarchingTickets, toDoTasks } = this.props;

        return(
            <div className='mobile-container'>

                <div className="add-overarching-container" >
                    <TextField
                        id="list-type"
                        label="Add Overarching Task"
                        className='list-type'
                        margin="dense"
                    />
                    <div className='submit' onClick={() => this.submitOverarching()}>ADD</div>
                </div>


                <div className='tasks-container'>
                    {
                        overarchingTickets.map(i => {
                            let amount = divider(i.title, toDoTasks);
                            return(
                                <Link to={`overarching-task/${i.title}`} key={i}>
                                    <Paper className='overarching-paper' elevation={1}>
                                        <span className='overarching-title'>{i.title}</span>
                                        <span className='amount'>{amount.length} tasks</span>
                                    </Paper>
                                </Link>
                            )
                        })
                    }
                </div>

                <Link to='progress'>
                    <div className='progress-icon'>
                        <i className="material-icons">
                            assessment
                        </i>
                    </div>
                </Link >
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        overarchingTickets: state.ToDoReducer.overarchingGroups,
        toDoTasks: state.ToDoReducer.toDoTasks,
    };
  };
  
Mobile.propTypes = {
    toDoTasks: PropTypes.array,
    addOverarching: PropTypes.func
};
  
const mapDispatchToProps = {
    addOverarching
};

export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
