import { useState } from "react";

import "./App.css";

import { PizzaScreen } from "./components/PizzaScreen";
import { MakerScreen } from "./components/MakerScreen";

const initState = { 
  borda: "fina", 
  molho: "vermelho", 
  tipo: ["verdura", "carne"] 
};

function App() {
  const [state, _setState] = useState(initState);
  const [isMakerVisible, setIsMakerVisible] = useState(true);

  return (
    <>
      { isMakerVisible ? 
        <MakerScreen onChange={_setState} submit={() => setIsMakerVisible(false)} /> :
        <PizzaScreen molho={state.molho} borda={state.borda} tipos={state.tipo} />
      }
      {
        !isMakerVisible && <button onClick={() => setIsMakerVisible(true)}> ⬅️ </button> 
      }
    </>
  );
}