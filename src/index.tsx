import { Component, h, render } from "preact";
import App from "./App";

const root = document.getElementById("root");
render(<App />, root, root.firstElementChild);
