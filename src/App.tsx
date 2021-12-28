import React, { useState } from 'react';
import './App.css';

interface Istate {
  people: {
    name: string,
    url: string,
    age: number,
    note: string
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
      note: "Ultimate musician"
    }
  ]);

  return (
    <div className="App">
      <h1>People people people</h1>
    </div>
  );
}

export default App;
