import ApiCalendar from 'react-google-calendar-api';

import { getUserInfo } from '../helper/calendarFunctions';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOAD_USER_SUCESS = 'LOAD_USER_SUCESS';
export const LOAD_USER_FAIL = 'LOAD_USER_FAIL'
export const LOGOUT = 'LOGOUT'; 

// Load user if authed
export const loadUser = () => async dispatch => {
    ApiCalendar.onLoad(() => {
        if(ApiCalendar.sign) {
            getUserInfo().then(res => {
                dispatch({ 
                    type: LOAD_USER_SUCESS,
                    payload: { email: res.email }
                });
            })
        } else {

            dispatch({ type: LOAD_USER_FAIL });
        }
    });
}

// Auth with google
export const login = () => async dispatch => {
    ApiCalendar.handleAuthClick();
    ApiCalendar.listenSign(() => {
        if(ApiCalendar.sign) {
            getUserInfo().then(res => {
                dispatch({ 
                    type: LOGIN_SUCCESS,
                    payload: { email: res.email }
                });  
            })
        } else {
            dispatch({ type: LOGIN_FAIL });
        }
    })
}

//LOGOUT / Clear Profile
export const logout = () => dispatch => {
    ApiCalendar.handleSignoutClick();
    dispatch({ type: LOGOUT });
}
