import ApiCalendar from 'react-google-calendar-api';

import { listMonthEvents } from '../helper/calendarFunctions';

export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
export const LOAD_EVENTS_FAIL = 'LOAD_EVENTS_FAIL';
export const CLEAR_EVENTS = 'CLEAR_EVENTS';
export const CHANGE_DATE = 'CHANGE_DATE';
export const EVENTS_LOADING = 'EVENTS_LOADING';

// Load events if authed
export const loadEvents = (date) => async dispatch => {
    dispatch({
        type: EVENTS_LOADING,
        payload: { loading: true }
    });
    dispatch({
        type: CLEAR_EVENTS
    });
    if (ApiCalendar.sign) {
        listMonthEvents({ startDate: new Date(date.getFullYear(), date.getMonth()-1, 20), endDate: new Date(date.getFullYear(), date.getMonth()+1, 10) })
          .then(({result}) => {
            const events = result.items.map((event) => {
                return {
                    id: event.id,
                    start: event.start.date || event.start.dateTime,
                    end: event.end.date || event.end.dateTime,
                    title: event.summary
                }
            })
            dispatch({
                type: LOAD_EVENTS_SUCCESS,
                payload: { events }
            });
            dispatch({
                type: EVENTS_LOADING,
                payload: { loading: false }
            });
          });
    } else {
        dispatch({
            type: LOAD_EVENTS_FAIL
        });
        dispatch({
            type: EVENTS_LOADING,
            payload: { loading: false }
        });
    }
}

export const changeDate = (newDate) => async dispatch => {
    dispatch({
        type: CHANGE_DATE,
        payload: { newDate }
    })
}

export const eventsLoader = (loading) => async dispatch => {
    dispatch({
        type: EVENTS_LOADING,
        payload: { loading }
    })
}
