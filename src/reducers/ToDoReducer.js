import { 
    GET_ALL_TASKS,
    SET_MODAL,
    ADD_TASK
} from "./actions";

let initialState = {
    toDoTasks: [],
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
            console.log('reducer', action.payload)
            return {
                ...state,
                toDoTasks: state.toDoTasks.concat(action.payload)
            }
        default:
            return state;
    }
}