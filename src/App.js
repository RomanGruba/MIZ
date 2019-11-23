import React, { Component } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import Homepage from "./components/pages/Homepage/Homepage";
import Kamen from "./components/pages/Kamen/Kamen";
import Mdf from "./components/pages/MDF/MDF";
import Dsp from "./components/pages/DSP/DSP";
import Dropdown from "./components/Dropdown/Dropdown";

const menu1 = [
  { kuhny: "кухни" },
  { shkafy: "шкафы" },
  { shkafy_kupe: "шкафы купе" },
  { office: "офисная" },
  { polki: "полки" }
];

const menu2 = [{ dsp: "ДСП" }, { mdf: "МДФ" }, { kamen: "ис. камень" }];

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <nav className={styles.nav}>
          <Dropdown title="КОРПУСНАЯ МЕБЕЛЬ" menu={menu1} dropDown />
          <Dropdown title="ПОЛЕЗНО ЗНАТЬ" menu={menu2} dropDown />
          <Dropdown title="КОНТАКТЫ" menu dropDown={false} />
        </nav>
        <Homepage />
        <Dsp />
        <Mdf />
        <Kamen />
      </>
    );
  }
}
