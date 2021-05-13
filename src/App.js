import { logDOM } from "@testing-library/dom";
import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => (
          <List {...person} id={person.id} />
        ))}
        {people.length ? (
          <button onClick={() => setPeople([])}>Clear All</button>
        ) : (
          <button onClick={() => setPeople(data)}>Undo changes</button>
        )}
      </section>
    </main>
  );
}

export default App;
