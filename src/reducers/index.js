import { combineReducers } from 'redux';
import auth from './authedUser';
import calendar from './calendar';

export default combineReducers({
    auth,
    calendar
});
