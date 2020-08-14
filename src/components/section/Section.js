import React from 'react';
import style from './Section.module.css';

function Section({ title, children }) {
  return (
    <>
      <span className={style.title}>{title}</span>
      {children}
    </>
  );
}

export default Section;
