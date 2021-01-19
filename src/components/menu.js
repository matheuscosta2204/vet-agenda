import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './login';
import MenuList from './menuList';
import { ProgressSpinner } from 'primereact/progressspinner';

const Menu = ({ isAuthenticated, loading }) => {
    const _renderMenu = () => {
        if(loading) {
            return <div className="login-container p-d-flex p-flex-column p-jc-center p-ai-center"><ProgressSpinner className="loader" /></div>
        } else if(isAuthenticated) {
            return <MenuList />
        } else {
            return <Login />
        }
    }

    return (
        <div className="menu-container p-shadow-5">
            {_renderMenu()}
        </div>
    )
}

Menu.propTypes = {
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool
}

function mapStateToProps({ auth }) {
    return {
        isAuthenticated: auth.isAuthenticated,
        loading: auth.loading
    }
}

export default connect(mapStateToProps)(Menu);