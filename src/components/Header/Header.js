import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.location}>
        <i className="material-icons md-dark">room</i>
        <p className={styles.locationText}>г.Измаил, ул.Клушина, 4г</p>
      </div>
      <div className={styles.workingHours}>
        <i class="material-icons md-dark">query_builder</i>
        <div className={styles.workingHoursText}>
          <p className={styles.workingHoursTextItem}>Пн-Пт с 10 до 18</p>
          <p className={styles.workingHoursTextItem}>Субб. с 10 до 14</p>
          <p className={styles.workingHoursTextItem}>Воскр. выходн.</p>
        </div>
      </div>
      <div className={styles.mail}>
        <i className="material-icons md-dark">email</i>
        <p className={styles.mail}>mebelklushina@ukr.net</p>
      </div>
      <div className={styles.phone}>
        <i className="material-icons md-dark">call</i>
        <div className={styles.phoneNumbers}>
          <p className={styles.mail}>098 969 32 81</p>
          <p className={styles.mail}>099 624 10 79</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
