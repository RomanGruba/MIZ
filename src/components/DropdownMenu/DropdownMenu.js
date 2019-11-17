import React, { Component } from "react";
import styles from "./DropdownMenu.module.css";

export default class DropdownMenu extends Component {
  state = {
    showMenu: false
  };

  handleShowMenu = e => {
    e.preventDefault();

    this.setState({ showMenu: true }, () =>
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
        <button onClick={this.handleShowMenu}>{this.props.title}</button>
        {this.state.showMenu ? (
          <div className={styles.menu}>
            <button className={styles.menuItem}>{this.props.menu[0]}</button>
            <button className={styles.menuItem}>{this.props.menu[1]}</button>
            <button className={styles.menuItem}>{this.props.menu[2]}</button>
            <button className={styles.menuItem}>{this.props.menu[3]}</button>
          </div>
        ) : null}
      </div>
    );
  }
}
