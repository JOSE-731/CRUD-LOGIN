import clienteAxios from '../Config/Axios';
import {
    LOGIN,
    LOGIN_EXITO,
    ERROR
} from '../Types/Index';

//Login

export function LoginAction(users){
    return (dispatch) =>{
        dispatch(usersLogin());

        try{
            clienteAxios.post('api/auth/signup', users);

            dispatch(usersLoginExito(users));

        }catch(error){
            dispatch(userLoginError(true));
        }
    }
}

const usersLogin = () => ({
    type: LOGIN,
});

const usersLoginExito = users => ({
    type:LOGIN_EXITO,
    payload:users
});

const userLoginError = () =>{

}