import React from 'react';
import style from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <div className={style.statWrapper}>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
      </div>
      <div className={style.totalWrapper}>
        <span className={style.total}>Total: {total}</span>
        <span className={style.percentage}>
          Positive feedback: {positivePercentage}%
        </span>
      </div>
    </>
  );
}

export default Statistics;
