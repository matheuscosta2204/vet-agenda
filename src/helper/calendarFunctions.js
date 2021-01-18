import ApiCalendar from 'react-google-calendar-api';

export const getUserInfo = () => {
    return fetch("https://www.googleapis.com/oauth2/v3/userinfo?alt=json", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${ApiCalendar.gapi.client.getToken().access_token}`
        }
    })
    .then(res => res.json())
}

export const listMonthEvents = ({ startDate, endDate}, calendarId = ApiCalendar.calendar) => {
    if (ApiCalendar.gapi) {
        return ApiCalendar.gapi.client.calendar.events.list({
            'calendarId': calendarId,
            'timeMin': (new Date(startDate)).toISOString(),
            'timeMax': (new Date(endDate)).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'orderBy': 'startTime'
        });
    }
    else {
        return false;
    }
}

export const createEvent = (event, calendarId = ApiCalendar.calendar) => {
    if (ApiCalendar.gapi) {
        return ApiCalendar.gapi.client.calendar.events.insert({
            'calendarId': calendarId,
            'sendUpdates': "all",
            'resource': event
        });
    }
    else {
        return false;
    }
}

export const deleteEvent = (eventId, calendarId = ApiCalendar.calendar) => {
    if (ApiCalendar.gapi) {
        return ApiCalendar.gapi.client.calendar.events.delete({
            'calendarId': calendarId,
            'eventId': eventId,
            'sendUpdates': "all"
        });
    }
    else {
        return false;
    }
}
