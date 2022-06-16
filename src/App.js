import { useState } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");
  const [mode, setMode] = useState("black");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  const handleModeChange = () => {
    if (mode === "black") {
      setMode("white");
    } else {
      setMode("black");
    }
  }
  
  return (

    <DefaultContext.Provider value={{ handleCreateFan,handleModeChange }}>
      <Header fan={fan} mode ={mode} />
      <hr />
      <Content mode={mode}/>
      <hr />
      <Footer />
    </DefaultContext.Provider>
 
 );
}