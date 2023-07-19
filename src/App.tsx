import * as React from "react";
import "./styles.global.css";
import { Header } from "./components/Header";
import { Layot } from "./components/Layout";
import { Content } from "./components/Content";
import { tokenContext } from "./context/index";
import { useToken } from "./hooks/useToken";

export function App() {
  
  const [token] = useToken();

  return (
    <Layot>
        <tokenContext.Provider 
          value={
            token
          }
        >
          <Header/>
        </tokenContext.Provider>
        <Content/>
      </Layot>
  )
}