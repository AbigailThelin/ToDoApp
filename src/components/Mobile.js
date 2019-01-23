import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import '../styles/Mobile.scss'
import {
    addToCompleted,
    deleteTask
} from '../reducers/actions';

class Mobile extends Component {
    render(){
        const { toDoTasks } = this.props;
        console.log('tasks', toDoTasks);
        return(
            <div className='mobile-container'>
                <div className='mobile-footer'>
                    <Link to='/progress' className='link'>
                        <i class="material-icons">
                            insert_chart
                        </i>
                    </Link>

                    <Link to='/add'>
                        <i class="material-icons md-48">
                            control_point
                        </i>
                    </Link>

                    <Link to='/progress' className='link'>
                        <i class="material-icons">check_circle_outline</i>
                    </Link>
                </div>

                {
                this.props.toDoTasks.map(i => {
                    return (
                        <Paper key={i.title} elevation={1} className='mobile-paper'>
                            <span>{i.title}</span>
                            <span>{i.date}</span>
                            {/* <Button variant="contained" onClick={() => this.props.addToCompleted(i)}>Click to finish</Button> */}
                        </Paper>
                    )
                })}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      toDoTasks: state.ToDoReducer.toDoTasks,
      completedTasks: state.ToDoReducer.completedTasks
    };
  };
  
  Mobile.propTypes = {
    toDoTasks: PropTypes.array,
    addToCompleted: PropTypes.func,
    deleteTask: PropTypes.func
  };
  
  const mapDispatchToProps = {
    addToCompleted,
    deleteTask
  };

export default connect(mapStateToProps, mapDispatchToProps)(Mobile);