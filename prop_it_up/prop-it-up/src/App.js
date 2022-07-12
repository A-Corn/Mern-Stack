import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Cornelius"}
        firstName={"Amir"}
        age={22}
        hairColor={"Black"}
      />
      <PersonCard
        lastName={"Evans"}
        firstName={"Juli"}
        age={20}
        hairColor={"Brown"}
      />
      <PersonCard
        lastName={"Doe"}
        firstName={"John"}
        age={73}
        hairColor={"Bald"}
      />
      <PersonCard
        lastName={"Brown"}
        firstName={"Ashley"}
        age={23}
        hairColor={"Green"}
      />
    </div>
  );
}

export default App;
