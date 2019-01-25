import { 
    GET_ALL_TASKS,
    SET_MODAL,
    ADD_TASK,
    ADD_TO_COMPLETED,
    DELETE_TASK,
    ADD_OVERARCHING
} from "./actions";

let initialState = {
    overarchingGroups: [],
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
            return {
                ...state,
                toDoTasks: state.toDoTasks.concat(action.payload)
            }
        case ADD_TO_COMPLETED:
            let x = state.toDoTasks.indexOf(action.payload);
            action.payload.checked = !action.payload.checked;

            return {
                ...state,
                toDoTasks: [...state.toDoTasks.slice(0, x), action.payload, ...state.toDoTasks.slice(x+1)]
            }
        case DELETE_TASK:
            let y = state.toDoTasks.indexOf(action.payload);

            return {
                ...state,
                toDoTasks: [...state.toDoTasks.slice(0, y), ...state.toDoTasks.slice(y+1)]
            }
        case ADD_OVERARCHING:
            return {
                ...state,
                overarchingGroups: state.overarchingGroups.concat(action.payload)
            }
        default:
            return state;
    }
}