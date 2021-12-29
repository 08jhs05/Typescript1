import React, { useState } from 'react';
import './App.css';

interface Istate {
  people: {
    name: string,
    url: string,
    age: number,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: "Monokuma",
      url: "https://www.nicepng.com/png/detail/227-2277919_monokuma-transparent-danganronpa-v3-danganronpa-monokuma-sprites-transparent.png",
      age: 30,
      note: "Danganronpa mascot"
    },
    {
      name: "Ibuki Mioda",
      url: "https://static.wikia.nocookie.net/danganronpagoods/images/a/ae/Ibuki_Mioda_Danganronpa_2_Sidebar.png",
      age: 17,
    }
  ]);

  return (
    <div className="App">
      <h1>People people people</h1>
      {people.map(person => {
        return <div style={{display: 'flex', width:800, justifyContent:'space-between'}}>
          <img src={person.url} width={150} height={150}/>
          <div>{person.name}</div>
          <div>{person.age} years old</div>
          <div>{person.note}</div>
        </div>
      })}
    </div>
  );
}

export default App;
