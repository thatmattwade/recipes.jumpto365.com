import React, { useEffect, useState } from "react";
import "./styles.module.css";

export default function BoxWithShadow({children,caption}): JSX.Element {
  return <div><div style={{padding:"20px",margin:"20px",boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.12)"}} >{children}</div>
  {caption}
  </div>;
}
