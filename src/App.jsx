/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import IdCard from "./components/idCard/IdCard";
import Greetings from "./components/Greetings/Greetings";
import Random from "./components/Random/Random";
import BoxColor from "./components/BoxColor/BoxColor";
import CreditCard from "./components/CreditCard/CreditCard";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
    
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
    
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>

      <hr />
      <BoxColor r = {120} g= {30} b= {100}/>
      <hr />
      <Random min={5} max={10}></Random>
      <hr/>
      <Greetings lang="es">español</Greetings>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>




      

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

    </div>
  );

}

export default App;
