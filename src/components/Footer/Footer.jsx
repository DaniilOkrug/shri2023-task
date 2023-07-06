import styles from './Footer.module.css';

export const Footer = () => {
    return (
      <footer className={styles.footer}>
        <ul className={styles.footer__list}>
          <li>
            <a className={styles.footer__link} href="/">
              Помощь
            </a>
          </li>
          <li>
            <a className={styles.footer__link} href="/">
              Обратная связь
            </a>
          </li>
          <li>
            <a className={styles.footer__link} href="/">
              Разработчикам
            </a>
          </li>
          <li>
            <a className={styles.footer__link} href="/">
              Условия использования
            </a>
          </li>
        </ul>

        <div className={styles.footer__copyright}>© 1997–2023 ООО «Яндекс»</div>
      </footer>
    );
}