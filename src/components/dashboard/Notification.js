import React from 'react';
import './Notification.css';

function Notification() {
    return (
        <div className="notification">
            <h4>Notification</h4>
            <ul className="notification__list">
                <p><strong>Haris</strong> Joined the party</p>
                <p className="notification__createdAt">few seconds ago</p>
            </ul>
        </div>
    )
}

export default Notification
