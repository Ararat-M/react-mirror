import * as React from "react";
import classes from "./header.module.css"

export function Header() {
  return (
    <header>
      <h1 className={[classes.example, classes.background].join(' ')} > Hello React </h1>
    </header>
  )
}