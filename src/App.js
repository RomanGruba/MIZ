import React, { Component } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import Homepage from "./components/pages/Homepage/Homepage";

const menu1 = ["кухни", "шкафы", "шкафы купе", "офисная", "полки"];
const menu2 = ["ЛДСП", "МДФ", "ис. камень"];

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <nav className={styles.nav}>
          <DropdownMenu title="КОРПУСНАЯ МЕБЕЛЬ" menu={menu1} />
          <DropdownMenu title="ПОЛЕЗНО ЗНАТЬ" menu={menu2} />
          <DropdownMenu title="КОНТАКТЫ" />
        </nav>
        <Homepage />
      </>
    );
  }
}
