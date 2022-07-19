import {useState} from 'react';
import { useAuthContext } from '../../components/context/authContext';
import {useNavigate} from 'react-router-dom';
import { async } from '@firebase/util';

export const Register = () => {

    const [username, setUsername] = useState({
        email: '',
        password: ''
    })

    const {signUp} = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleChange = ({target: {name, value}}) => {
        //console.log(e.target.name, e.target.value);
        setUsername({
            ...username,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signUp(username.email, username.password);
            navigate('/home');
            //alert('Usuario registrado');
        } catch (error) {
            setError(error.message);
            if (error.code === 'auth/email-already-in-use') {
                setError('El email ya esta en uso');
            }
            if  (error.code === 'auth/invalid-email') {
                setError('El email no es valido');
            }
            if (error.code === 'auth/weak-password') {
                setError('La contraseña es muy debil');
            }
            if (error.code === 'auth/operation-not-allowed') {
                setError('No se puede registrar');
            }
            if (error.code === 'auth/user-not-found') {
                setError('El usuario no existe');
            }
            if (error.code === 'auth/wrong-password') {
                setError('La contraseña es incorrecta');
            }

        }
        

    }

    return (
        <div className="form-wrap">
            <div className="tabs">
                {/*<h3 className="signup-tab"><a onClick={active} href="#signup-tab-content" >Sign Up</a></h3>*/}
                <h3 className="login-tab">
                    <a href="#login-tab-content">Registro</a>
                </h3>
            </div>
            {error && <p className="error">{error}</p>}

            {
            < div className = "tabs-content" > <div id="signup-tab-content" className="active"/>

            <form onSubmit={handleSubmit} className="signup-form" action="" method="post">
                {/*<input type="email" className="input" name='email' id="user_email" autocomplete="off" placeholder="Email"/>*/}
                <input type="email" className="input"
                    onChange={handleChange}
                    name='email'
                    id="user_name"
                    autocomplete="off"
                    placeholder="Email"
                />

                <input type="password" className="input"
                    onChange={handleChange}
                    name='password'
                    id="user_pass"
                    autocomplete="off"
                    placeholder="Password"
                />

                <input type="submit" className="button" value="Sign Up"
                    
                />
            </form>

            <div className="help-text">
                <p>By signing up, you agree to our</p>
                <p>
                    <a href="#">Terms of service</a>
                </p>
            </div>
        </div>
        }

        {/*<div id="login-tab-content">
    <form className="login-form" action="" method="post">
        <input type="text" className="input" id="user_login" autocomplete="off" placeholder="Email or Username"/>
        <input type="password" className="input" id="user_pass" autocomplete="off" placeholder="Password"/>
        <input type="checkbox" className="checkbox" id="remember_me"/>
        <label for="remember_me">Remember me</label>

        <input type="submit" className="button" value="Login"/>
    </form>
    <div className="help-text">
        <p><a href="#">Forget your password?</a></p>
    </div>
    </div>*/} </div>

    )
}
