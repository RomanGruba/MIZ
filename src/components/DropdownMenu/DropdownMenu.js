import React, { Component } from "react";
import styles from "./DropdownMenu.module.css";

export default class DropdownMenu extends Component {
  state = {
    showMenu: false
  };

  handleShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu }, () =>
      document.addEventListener("click", this.closeMenu)
    );
  };

  closeMenu = () => {
    this.setState({ showMenu: false }, () =>
      document.removeEventListener("click", this.closeMenu)
    );
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleShowMenu()}>Show menu</button>
        {this.state.showMenu ? (
          <div className={styles.menu}>
            <button className={styles.menuItem}>Item 1</button>
            <button className={styles.menuItem}>Item 2</button>
            <button className={styles.menuItem}>Item 3</button>
          </div>
        ) : null}
      </div>
    );
  }
}
