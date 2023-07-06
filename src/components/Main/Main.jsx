import React from 'react';

import { TABS, TABS_KEYS } from '../../constants';
import {Event} from '../Event/Event'

import styles from './Main.module.css';

export const Main = () => {
    const ref = React.useRef();

    const [activeTab, setActiveTab] = React.useState(
    new URLSearchParams(location.search).get("tab") || "all"
    );
    const [hasRightScroll, setHasRightScroll] = React.useState(false);

    const onSelectInput = (event) => {
    setActiveTab(event.target.value);
    };

    React.useEffect(() => {
    if (!ref.current) return;

    const sumWidth = TABS[activeTab].items.length * 200;

    const newHasRightScroll = sumWidth > ref.current.offsetWidth;
    if (newHasRightScroll !== hasRightScroll) {
        setHasRightScroll(newHasRightScroll);
    }
    }, [activeTab, ref.current]);

    const onArrowCLick = () => {
    const scroller = ref.current.querySelector(
        ".section__panel:not(.section__panel_hidden)"
    );
    if (scroller) {
        scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: "smooth",
        });
    }
    };

    return (
      <main className={styles.main}>
        <section className={`section main__general`}>
          <h2 className="section__title section__title-header section__main-title">
            Главное
          </h2>
          <div className={styles["hero-dashboard"]}>
            <div className={styles["hero-dashboard__primary"]}>
              <h3 className={styles["hero-dashboard__title"]}>
                Привет, Геннадий!
              </h3>
              <p className={styles["hero-dashboard__subtitle"]}>
                Двери и окна закрыты, сигнализация включена.
              </p>
              <ul className={styles["hero-dashboard__info"]}>
                <li className={styles["hero-dashboard__item"]}>
                  <div className={styles["hero-dashboard__item-title"]}>
                    Дома
                  </div>
                  <div className={styles["hero-dashboard__item-details"]}>
                    +23
                    <span className="a11y-hidden">°</span>
                  </div>
                </li>
                <li className={styles["hero-dashboard__item"]}>
                  <div className={styles["hero-dashboard__item-title"]}>
                    За окном
                  </div>
                  <div className={styles["hero-dashboard__item-details"]}>
                    +19
                    <span className="a11y-hidden">°</span>
                    <div
                      className={`${styles["hero-dashboard__icon"]} ${styles["hero-dashboard__icon_rain"]}`}
                      role="img"
                      aria-label="Дождь"
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
            <ul className={styles["hero-dashboard__schedule"]}>
              <Event
                icon="temp"
                iconLabel="Температура"
                title="Philips Cooler"
                subtitle="Начнет охлаждать в 16:30"
              />
              <Event
                icon="light"
                iconLabel="Освещение"
                title="Xiaomi Yeelight LED Smart Bulb"
                subtitle="Включится в 17:00"
              />
              <Event
                icon="light"
                iconLabel="Освещение"
                title="Xiaomi Yeelight LED Smart Bulb"
                subtitle="Включится в 17:00"
              />
            </ul>
          </div>
        </section>

        <section className="section main__scripts">
          <h2
            className={`${styles.section__title} ${styles["section__title-header"]}`}
          >
            Избранные сценарии
          </h2>

          <ul className={styles["event-grid"]}>
            <Event
              icon="light2"
              iconLabel="Освещение"
              title="Выключить весь свет в доме и во дворе"
              slim
            />
            <Event
              icon="schedule"
              iconLabel="Расписание"
              title="Я ухожу"
              slim
            />
            <Event
              icon="light2"
              iconLabel="Освещение"
              title="Включить свет в коридоре"
              slim
            />
            <Event
              icon="temp2"
              iconLabel="Температура"
              title="Набрать горячую ванну"
              subtitle="Начнётся в 18:00"
              slim
            />
            <Event
              icon="temp2"
              iconLabel="Температура"
              title="Сделать пол тёплым во всей квартире"
              slim
            />
          </ul>
        </section>

        <section className={`section ${styles.main__devices}`}>
          <div className={styles.section__title}>
            <h2 className={styles["section__title-header"]}>
              Избранные устройства
            </h2>

            <select
              className={styles.section__select}
              defaultValue="all"
              onInput={onSelectInput}
            >
              {TABS_KEYS.map((key) => (
                <option key={`section__select_${key}`} value={key}>
                  {TABS[key].title}
                </option>
              ))}
            </select>

            <ul role="tablist" className={styles.section__tabs}>
              {TABS_KEYS.map((key) => (
                <li
                  key={`tab_${key}`}
                  role="tab"
                  aria-selected={key === activeTab ? "true" : "false"}
                  tabIndex={key === activeTab ? "0" : undefined}
                  className={`${styles.section__tab} ${
                    key === activeTab ? styles.section__tab_active : ""
                  }`}
                  id={`tab_${key}`}
                  aria-controls={`panel_${key}`}
                  onClick={() => setActiveTab(key)}
                >
                  {TABS[key].title}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles["section__panel-wrapper"]} ref={ref}>
            {TABS_KEYS.map((key) => (
              <div
                key={`section__panel-wrapper_${key}`}
                role="tabpanel"
                className={`${styles.section__panel} ${
                  key === activeTab ? "" : styles.section__panel_hidden
                }`}
                aria-hidden={key === activeTab ? "false" : "true"}
                id={`panel_${key}`}
                aria-labelledby={`tab_${key}`}
              >
                <ul className={styles['section__panel-list']}>
                  {TABS[key].items.map((item, index) => (
                    <Event key={`${key}_${index}`} {...item} />
                  ))}
                </ul>
              </div>
            ))}
            {hasRightScroll && (
              <div className={styles.section__arrow} onClick={onArrowCLick}></div>
            )}
          </div>
        </section>
      </main>
    );
}