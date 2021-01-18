import { 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOAD_USER_SUCESS, 
    LOAD_USER_FAIL, 
    LOGOUT 
} from '../actions/authedUser';

const initialState = {
    loading: true,
    isAuthenticated: false,
    email: null
};

export default function auth(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case LOGIN_SUCCESS:
        case LOAD_USER_SUCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                email: payload.email
            }
        case LOGOUT:
        case LOGIN_FAIL:
        case LOAD_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false
            }
        default:
            return state;
    }
}
