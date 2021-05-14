import {
    LOGIN,
    LOGIN_EXITO,
    ERROR
} from '../Types/Index';

//Login

export function LoginAction(users){
    return () =>{
        console.log(users)
    }
}