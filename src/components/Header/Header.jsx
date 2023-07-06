import React from 'react';

import styles from './Header.module.css';

export const Header = () => {
    const [expanded, setExpanded] = React.useState(false);

    const onClick = () => {
      setExpanded(!expanded);
    };

    return (
      <header className={styles.header}>
        <a href="/" className={styles.header__logo} aria-label="Яндекс.Дом"></a>
        <button
          className={styles.header__menu}
          aria-expanded={expanded ? "true" : "false"}
          onClick={onClick}
        >
          <span className="a11y-hidden">
            {expanded ? "Закрыть меню" : "Открыть меню"}
          </span>
        </button>
        <ul
          className={
            styles.header__links + ' ' + (expanded && styles.header__links_opened)
          }
        >
          <li className={styles.header__item}>
            <a
              className={styles.header__link + ' ' + styles.header__link_current}
              href="/"
              aria-current="page"
            >
              Сводка
            </a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="/devices">
              Устройства
            </a>
          </li>
          <li className={styles.header__item}>
            <a className={styles.header__link} href="/scripts">
              Сценарии
            </a>
          </li>
        </ul>
      </header>
    );
}