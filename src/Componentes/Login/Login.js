import React,{useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import { LoginAction } from '../../Actions/loginActions';
import {useDispatch, useSelector}  from 'react-redux';

const Login = e =>{

    const dispatch = useDispatch();
    const loginUsers = users => dispatch(LoginAction(users))

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usuario, setUsuario] = useState('');
    const [registro, setRegistro] = useState(false);
    const [error, setError] = useState(null);

    const validacion = e =>{

        e.preventDefault()

        if(!email.trim()){
            setError('Ingrese el email')
            return
        }


        if(!password.trim()){
            setError('Ingrese el password')
            return
        }

        if(!usuario.trim()){
            setError('Ingrese el nombre de usuario')
            return
        }

        if(password.length < 6){
            setError('Faltan caracteres')
            return
        }

           setError(null)
           loginUsers({
               email,
               password
           });
    }

    return(
        <div className="mt-5">
            <h3 className="text-center">
                {
                    registro ? 'Registro de usuario' : 'Ingresar'
                }
            </h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={validacion}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        <label className="mb-2">Nombre de Usuario</label>
                        <input
                            type="email"
                            className="form-control mb-2"
                            onChange={e => setUsuario(e.target.value)}
                            value={usuario}
                        />

                        <label className="mb-2">Email</label>
                        <input
                            type="email"
                            className="form-control mb-2"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />

                        <label className="mb-2">Contraseña</label>
                        <input
                            type="password"
                            className="form-control mb-2"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />

                        <div className="d-grid gap-2">
                            <button className="btn btn-danger btn-lg btn-block"
                             type={"submit"}>
                               {
                                    registro ? 'Registrase' : 'Acceder'
                               }
                            </button>

                            <button className="btn btn-primary btn-sm btn-block" 
                             type={"button"}
                             onClick={() => setRegistro(!registro)}>
                                 {
                                     registro ? '¿Ya tienes una cuenta?' : '¿No tienes cuenta?'
                                 }
                                
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;