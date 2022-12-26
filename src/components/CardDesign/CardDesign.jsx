import React from 'react';

import css from './CardDesign.module.css';

import circle from '../../img/circle.png';

export default function CardDesign ({ user, avatar }) {
  return (
    <>
      <span className={css.horizontalLine}></span>
      <img className={css.circleBorder} src={circle} alt="Circle" />
      <div className={css.circleBg}>
        <img src={avatar} alt={user} width="72" />
      </div>
    </>
  );
}
