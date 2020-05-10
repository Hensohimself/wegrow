import React from 'react';
import moment from 'moment';
import { Card, ListGroup } from 'react-bootstrap';

const Notifications = (props) => {
    const { notifications } = props;

    return (
        <Card className="notification-card">
            <Card.Header>Notifications</Card.Header>
            <ListGroup variant="flush">
                {notifications && notifications.map(notification => {
                    return (
                        <ListGroup.Item key={notification.id}><span className="pink-text">{notification.user} </span>
                            <span>{notification.content}</span>
                            <div className="grey-text notification-date">
                                {moment(notification.time.toDate()).fromNow()}</div></ListGroup.Item>
                    )})}
            </ListGroup>
        </Card>
    )
}

export default Notifications;