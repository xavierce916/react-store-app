import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';

const formFields = {
    name: '',
    email: '',
    password: '',
    password2: '',
    userType: 'buyer'
}

export const RegisterPage = () => {

    const { startSingUp, errorMessage } = useAuthStore();

    const { name, email, password, password2, userType, onInputChange } = useForm(formFields);

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( password !== password2 ){
            Swal.fire('Register error', 'passwords are not equals', 'error');
            return;
        }
        startSingUp( {name, email, password, userType} );
    }

    useEffect(() => {
    
        if ( errorMessage ){
            Swal.fire('Register Error', errorMessage, 'error');
        }

    }, [ errorMessage ]);

    return (
        <AuthLayout title='Sing up' >
            <form onSubmit={ onSubmit }>

                {/* Name input */}
                <div className="form-outline mb-4">
                    <input
                        type="text"
                        id="form1Example13"
                        className="form-control form-control-lg"
                        placeholder="name"
                        name="name"
                        value={name}
                        onChange={onInputChange}
                    />
                    <label className="form-label" htmlFor="form1Example13">Name</label>
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                    <input
                        type="email"
                        id="form1Example13"
                        className="form-control form-control-lg"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    />
                    <label className="form-label" htmlFor="form1Example13">Email address</label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                    <input
                        type="password"
                        id="form1Example23"
                        className="form-control form-control-lg"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                    <label className="form-label" htmlFor="form1Example23">Password</label>
                </div>
                {/* Confirm Password input */}
                <div className="form-outline mb-4">
                    <input
                        type="password"
                        id="form1Example23"
                        className="form-control form-control-lg"
                        placeholder="confirm password"
                        name="password2"
                        value={password2}
                        onChange={onInputChange}
                    />
                    <label className="form-label" htmlFor="form1Example23">Confirm Password</label>
                </div>
                <div className="d-flex mb-4">
                    <label className="form-check-label" >
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userType"
                            value="buyer"
                            checked={userType === 'buyer'}
                            onChange={onInputChange}
                        />
                        Buy
                    </label>
                    <br />
                    <label className="form-check-label mx-3" >
                        <input
                            className="form-check-input"
                            type="radio"
                            name="userType"
                            value="seller"
                            checked={userType === 'seller'}
                            onChange={onInputChange}
                        />
                        Sell
                    </label>



                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Sing up</button>
                <Link
                    to="/auth/login"
                    className="text-decoration-none mx-3"
                >
                    Do you have an account?
                </Link>
            </form>
        </AuthLayout>
    )
}
