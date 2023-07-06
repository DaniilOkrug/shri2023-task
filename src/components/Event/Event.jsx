import React from 'react';

import styles from './Event.module.css';

// eslint-disable-next-line react/prop-types
export const Event = ({ slim, icon, iconLabel, title, subtitle }) => {
  const ref = React.useRef();

  return (
    <li ref={ref} className={slim ? styles.event_slim : ""}>
      <button className={styles.event__button}>
        <span
          className={`${styles.event__icon} ${styles[`event__icon_${icon}`]}`}
          role="img"
          aria-label={iconLabel}
        ></span>
        <h4 className={styles.event__title}>{title}</h4>
        {subtitle && <span className={styles.event__subtitle}>{subtitle}</span>}
      </button>
    </li>
  );
};