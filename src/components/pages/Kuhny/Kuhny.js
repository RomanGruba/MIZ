import React, { Component } from "react";
import styles from "./PhotoCard.module.css";

export default class PhotoCard extends Component {
  render() {
    return (
      <>
        <div className={styles.photoCard}>
          <div className={styles.imageContainer}>
            <img src={webformatURL} alt="" />
          </div>
      </>
    );
  }
}
