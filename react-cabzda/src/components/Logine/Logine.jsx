import react from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import { login } from '../../redax/auth-reduser';
import { Input } from '../../support/formControl/formControl';
import { required } from '../../utils/validators/validators';
import { Navigate } from "react-router-dom";
import s from '../../support/formControl/formControl.module.css';

const LoginForm  = ({handleSubmit, error}) => {
return (
    <form onSubmit={handleSubmit} >
        <div> 
            <Field placeholder='Enter login' component= {Input} name='email' validate={[ required ]} />
         </div>
         <div> 
            <Field placeholder='Enter pasvord' component={Input} name='password' validate={[ required ]} type = 'password'/>
         </div>
         <div> 
            <Field type='checkbox' component='input' name='rememberMe' /> Remember mi
         </div>
         { error && <div className={s.errorLogin} > {error} </div>}
         <div> 
            <button > Login </ button >
         </div>
    </form>
)
}

const LoginReduxForm = reduxForm({ form: 'login' })( LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe );
    }
    if(props.isAuth){
       return < Navigate to='/Profile' />
    }
    return (
        <div>
    <h1> Login </h1>
<LoginReduxForm  onSubmit={onSubmit}/>
    </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);