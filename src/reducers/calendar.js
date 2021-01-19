import { LOAD_EVENTS_SUCCESS, LOAD_EVENTS_FAIL, CHANGE_DATE, CLEAR_EVENTS, EVENTS_LOADING } from '../actions/calendar';

const initialState = {
    events: [],
    date: new Date(),
    loading: false
};

export default function calendar(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case LOAD_EVENTS_SUCCESS:
            return {
                ...state,
                events: payload.events
            }
        case LOAD_EVENTS_FAIL:
        case CLEAR_EVENTS:
            return {
                ...state,
                events: []
            }
        case CHANGE_DATE: 
            return {
                ...state,
                date: payload.newDate
            }
        case EVENTS_LOADING:
            return {
                ...state,
                loading: payload.loading
            }
        default:
            return state;
    }
}
