import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './ui/privateRoute';

import EmptyPage from './emptyPage';
import Home from './home';
import Calendar from './calendar';

const Content = ({ isAuthenticated }) => {
    if(!isAuthenticated) {
        //not authenticated
        return <EmptyPage />
    }
    return (
        <div className="layout-main">
            <Switch>
                <Route path="/" exact component={Home} />
                <PrivateRoute path="/home" component={Home} />
                <PrivateRoute path="/calendar" component={Calendar} />
            </Switch>
        </div>
    )
}

Content.propTypes = {
    isAuthenticated: PropTypes.bool
}

function mapStateToProps({ auth }) {
    return {
        isAuthenticated: auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Content);