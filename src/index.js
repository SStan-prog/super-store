import React from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "./globalStyles";
import Navbar from "./components/navigation/Navbar";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Navbar></Navbar>
  </>,

  document.getElementById("root")
);
