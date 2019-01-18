import { 
    GET_ALL_TASKS,
    SET_MODAL,
    ADD_TASK,
    ADD_TO_COMPLETED,
    DELETE_TASK
} from "./actions";

let initialState = {
    toDoTasks: [],
    completedTasks: [],
    modalStatus: false
}

export function ToDoReducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_ALL_TASKS:
            return {
                ...state,
                toDoTasks: state.toDoTasks
            }
        case SET_MODAL:
            return {
                ...state,
                modalStatus: action.status
            }
        case ADD_TASK:
            return {
                ...state,
                toDoTasks: state.toDoTasks.concat(action.payload)
            }
        case ADD_TO_COMPLETED:
            let x = state.toDoTasks.indexOf(action.payload);
            console.log(state.toDoTasks.splice(x, 1))
            return{
                ...state,
                // toDoTasks: state.toDoTasks.splice(x, 1),
                completedTasks: state.completedTasks.concat(action.payload)
            }
        case DELETE_TASK:
            let y = state.completedTasks.indexOf(action.payload);
            console.log(state.completedTasks.splice(y, 1))
            return {
                ...state,
                completedTasks: state.completedTasks.splice(y, 1)
            }
        default:
            return state;
    }
}