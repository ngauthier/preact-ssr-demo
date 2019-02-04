import App from "./App";
import { h, render, Component } from "preact";

const root = document.getElementById('root')
render(<App />, root, root.firstElementChild);