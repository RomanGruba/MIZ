import React, { Component } from "react";
import styles from "./Dropdown.module.css";

export default class Dropdown extends Component {
  render() {
    return (
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>{this.props.title}</button>
        {this.props.dropDown ? (
          <div className={styles.dropdown_content}>
            {this.props.menu.map(element => (
              <a key={Object.keys(element)} href={Object.keys(element)}>
                {Object.values(element)}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
