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
        default:
            return state;
    }
}