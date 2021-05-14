import {
    LOGIN,
    LOGIN_EXITO,
    ERROR
} from '../Types/Index';

const initialState = {
    tareas: [],
    error: null,
    loading:false
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                loading:true
            }
            case LOGIN_EXITO:
                return{
                    ...state,
                    loading:false,
                    tareas:[...state.tareas, action.payload]
                }
        default:
            return state;
    }
}