import React from 'react';
// import style from './FeedbackOptions.module.css';

function FeedbackOptions({ onClick }) {
  return (
    <>
      <div className={style.btnWrapper}>
        <button type="button" name="good" onClick={onClick}>
          Good
        </button>
        <button type="button" name="neutral" onClick={onClick}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={onClick}>
          Bad
        </button>
      </div>
    </>
  );
}

export default FeedbackOptions;
