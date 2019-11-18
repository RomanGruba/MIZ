import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import Homepage from "./components/pages/Homepage/Homepage";
import Rock from "./components/pages/Rock/Rock";
import Dropdown from "./components/Dropdown/Dropdown";

const menu1 = [{ kitchen: "кухни" }, { locker: "шкафы" }];

const menu2 = ["ЛДСП", "МДФ", "ис. камень"];

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
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/rock" component={Rock} />
        </Switch>
      </>
    );
  }
}

{
  /* <nav className={styles.nav}>
<DropdownMenu title="КОРПУСНАЯ МЕБЕЛЬ" menu={menu1} />
<DropdownMenu title="ПОЛЕЗНО ЗНАТЬ" menu={menu2} />
<DropdownMenu title="КОНТАКТЫ" />
</nav> */
}
