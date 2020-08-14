import React from 'react';
import style from './Notification.module.css';

function Notification({ message }) {
  return (
    <>
      <span className={style.message}>{message}</span>
    </>
  );
}

export default Notification;
