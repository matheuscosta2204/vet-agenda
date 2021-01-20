import { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { FullCalendar } from 'primereact/fullcalendar';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptLocale from '@fullcalendar/core/locales/pt-br';

import CalendarDetails from './calendarDetails';
import { loadEvents, changeDate } from '../actions/calendar';

const Calendar = ({ date, events, loadEvents, changeDate }) => {
    const [detaisDialog, setDetaisDialog] = useState(false);
    const [currentEventId, setCurrentEventId] = useState(null);

    const calendarRef = useRef();
    useEffect(() => {
        loadEvents(date);
    }, [date, loadEvents]);

    const options = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultView: 'dayGridMonth',
        defaultDate: moment().format('YYYY-MM-DD'),
        header: {
            left: 'cPrev,cNext',
            center: 'title',
            right: ''
        },
        editable: true,
        locale: ptLocale,
        customButtons: {
            cPrev: {
                text: 'prev',
                click: function() {
                    calendarRef.current.calendar.prev();
                    changeDate(calendarRef.current.calendar.getDate());
                }
            },
            cNext: {
                text: 'next',
                click: function() {
                    calendarRef.current.calendar.next();
                    changeDate(calendarRef.current.calendar.getDate());
                }
            }
        },
        eventClick: function(info) {
            setCurrentEventId(info.event.id);
            setDetaisDialog(true);
        }
        // dateClick: function(info) {
        //     console.log('Clicked on:', info);
        // }
    };

    return (
        <>
            <ScrollPanel className="calendar-container">
                <Card title="Agenda" className="calendar-card">
                    <FullCalendar ref={calendarRef} events={events} options={options} />
                </Card>
            </ScrollPanel>
            <Dialog header="Detalhes" visible={detaisDialog} style={{ width: '50vw' }} onHide={() => setDetaisDialog(false)}>
                <CalendarDetails id={currentEventId} />
            </Dialog>
        </>
    )
}

function mapStateToProps({ calendar }) {
    return {
        events: calendar.events,
        date: calendar.date
    }
}

export default connect(mapStateToProps, { loadEvents, changeDate })(Calendar);