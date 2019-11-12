import React, { Component } from "react";
import Header from "./components/Header/Header";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <DropdownMenu />
      </>
    );
  }
}
