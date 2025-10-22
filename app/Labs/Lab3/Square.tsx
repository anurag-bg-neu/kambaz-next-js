import React, { ReactNode } from "react";
export default function Square({ children }: { children: ReactNode }) {
  const num = Number(children);
  return (
    <>
    <h2>Child Components</h2>
    <h4>Square of 4</h4>
    <span id="wd-square">{num * num}</span>
    <br /><br />
    </>
);}
