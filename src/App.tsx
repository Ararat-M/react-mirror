import * as React from "react";
import "./styles.global.css";
import { Header } from "./components/Header";
import { Layot } from "./components/Layout";
import { Content } from "./components/Content";

export function App() {
  
  return (
      <Layot>
        <Header/>
        <Content/>
      </Layot>
  )
}