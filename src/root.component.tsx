import React from "react";

export default function Root(props) {
  console.log("HEY");
  return (
    <nav>
      <a href="/">Home</a> |<a href="/app1">App 1</a> |<a href="/app2">App 2</a>
    </nav>
  );
}
