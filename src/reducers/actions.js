export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const SET_MODAL = 'SET_MODAL';
export const ADD_TASK = 'ADD_TASK';
export const ADD_TO_COMPLETED = 'ADD_TO_COMPLETED';
export const DELETE_TASK = 'DELETE_TASK';
export const ADD_OVERARCHING = 'ADD_OVERARCHING';

// actions
export function addOverarching (overarching) {
    return {
        type: ADD_OVERARCHING,
        payload: overarching
    }
}

export function getAllTasks() {
    return {
        type: GET_ALL_TASKS
    }
}

export function setModal(modalStatus) {
    return {
        status: !modalStatus,
        type: SET_MODAL
    }
}

export function addTask (task) {
    return {
        payload: task,
        type: ADD_TASK
    }
}

export function addToCompleted (task) {
    return {
        payload: task,
        type: ADD_TO_COMPLETED
    }
}

export function deleteTask (task) {
    return {
        payload: task,
        type: DELETE_TASK
    }
}