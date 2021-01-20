import { useState, useEffect } from 'react';
import { Avatar } from 'primereact/avatar';
import { Skeleton } from 'primereact/skeleton';
import { Card } from 'primereact/card';
import PropTypes from 'prop-types';
import data from '../data.json';

const CalendarDetails = ({ id }) => {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setEvent(data[id]);
            setLoading(false);
        }, 2000)
    }, [id]);

    if(loading) {
        return (
            <Card className="event-details">
                <div className="event-info p-d-flex">
                    <div className="event-personal-info p-d-flex p-ai-center">
                        <Skeleton width="7rem" height="7rem" />
                        <div className="p-d-flex p-flex-column p-jc-center">
                            <Skeleton width="12rem" height="1.5rem" className="skeleton-text" />
                            <Skeleton width="12rem" className="skeleton-text" />
                        </div>
                    </div>
                    <div className="event-pet-info p-d-flex p-ai-center">
                        <Skeleton width="7rem" height="7rem" />
                        <div className="p-d-flex p-flex-column p-jc-center">
                            <Skeleton width="12rem" height="1.5rem" className="skeleton-text" />
                            <Skeleton width="12rem" className="skeleton-text" />
                            <Skeleton width="12rem" className="skeleton-text" />
                            <Skeleton width="12rem" className="skeleton-text" />
                        </div>
                    </div>
                </div>
                <div className="event-general-info">
                    <Skeleton className="skeleton-text" width="12rem" height="2rem" />
                    <Skeleton className="skeleton-text" height="5rem" />
                </div>
            </Card>
        )
    }

    return (
        <Card className="event-details">
            <div className="event-info p-d-flex">
                <div className="event-personal-info p-d-flex p-ai-center">
                    <Avatar image={event.personalInfo.avatar} className="personal-info-avatar" shape="square" />
                    <div className="p-d-flex p-flex-column p-jc-center">
                        <h3>{event.personalInfo.name}</h3>
                        <p>{event.personalInfo.cpf}</p>
                    </div>
                </div>
                <div className="event-pet-info p-d-flex p-ai-center">
                    <Avatar image={event.petInfo.avatar} shape="square" className="pet-info-avatar" />
                    <div className="p-d-flex p-flex-column p-jc-center">
                        <h3>{event.petInfo.name}</h3>
                        <h4>{event.petInfo.age}</h4>
                        <p>{event.petInfo.race}</p>
                        <p>{event.petInfo.color}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>{event.type}</h2>
                <p>{event.description}</p>
            </div>
        </Card>
    )
}

CalendarDetails.propTypes = {
    id: PropTypes.string
}

export default CalendarDetails;