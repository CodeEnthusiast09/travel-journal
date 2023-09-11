import React from "react";
import Head from "./components/Head";
import Hero from "./components/Hero";
import data from "./data";
import "./styles.css";

export default function App() {
  const dataElement = data.map((info) => {
    return <Hero key={info.id} {...info} />;
  });

  // console.log(dataElement);

  return (
    <div className="App">
      <Head />
      {dataElement}
    </div>
  );
}
