import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

import { logout } from '../actions/authedUser';
import logo from '../assets/images/pawprint.svg';

const MenuList = ({ logout }) => {
    return (
        <div className="p-d-flex p-flex-column">
            <div className="logo-container p-d-flex p-flex-column p-jc-center p-ai-center p-shadow-7 p-mb-3">
                <img src={logo} alt="logo" className="logo" />
                <h3>VET AGENDA</h3>
            </div>
            <Link to="home">
                <Button label="Home" icon="pi pi-home" iconPos="left" className="menu-button p-button-primary p-button-text p-mb-1" />
            </Link>
            <Link to="calendar">
                <Button label="Agenda" icon="pi pi-calendar" iconPos="left" className="menu-button p-button-primary p-button-text p-mb-1" />
            </Link>
            <Link to="/">
                <Button label="Logout" icon="pi pi-sign-out" iconPos="left" className="menu-button p-button-primary p-button-text p-mb-1" onClick={logout} />
            </Link>
        </div>
    )
}

MenuList.propTypes = {
    logout: PropTypes.func,
}

export default connect(null, { logout })(MenuList);