import React from 'react';
import moment from 'moment';

const Notifications = ({ notifications }) => {
  const notificationsList = notifications && notifications.map(
    notification => (
      <li key={ notification.id }>
        <span className="pink-text">{ notification.user }</span>
        &nbsp;
        <span>{ notification.content }</span>
        <div className="grey-text note-date">
          { moment(notification.time.toDate()).fromNow() }
        </div>
      </li>
    )
  );

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notfications</span>
          <ul className="notifications">
            { notificationsList }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;