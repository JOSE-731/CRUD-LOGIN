import {combineReducers} from 'redux';
import crudReducer from './CrudReducer';

export default combineReducers({
    tareas:crudReducer
});