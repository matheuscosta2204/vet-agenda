import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { connect } from 'react-redux';

import googleLogo from '../assets/images/google.svg';
import { login } from '../actions/authedUser';

const Login = ({ login }) => {
    return (
        <div className="login-container p-d-flex p-flex-column p-jc-center p-ai-center">
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" value={''} onChange={(e) => {}} />
                </div>
                <div className="p-field">
                    <label htmlFor="password">Password</label>
                    <InputText id="password" value={''} onChange={(e) => {}} />
                </div>
            </div>
            <Button label="Login" icon="pi pi-home" iconPos="left" />
            <div className="google-logo-button-container p-d-flex p-ai-center p-jc-center" onClick={login}>
                <img src={googleLogo} alt="google-logo" className="google-logo-button" />
            </div>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func,
}

export default connect(null, { login })(Login);