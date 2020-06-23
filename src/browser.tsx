import { React, ReactDOM } from "https://unpkg.com/es-react";
import { App } from "./http/get-index/app.tsx";

window.addEventListener("DOMContentLoaded", () => {

  let el = window.document.getElementById("app");
  //@ts-ignore
  ReactDOM.hydrate(<App />, el);
});
