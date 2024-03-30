/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import IdCard from "./components/idCard/IdCard";
import Greetings from "./components/Greetings/Greetings";
import Random from "./components/Random/Random";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Random min = {5} max = {10}></Random>






      <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<Greetings lang = "es">español</Greetings>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
    </div>  
  );

}

export default App;
