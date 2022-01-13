import React, { useState } from 'react';
import './App.css';
import List from './components/List';

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
      note: "Danganronpa"
    },
    {
      name: "Ibuki Mioda",
      url: "https://static.wikia.nocookie.net/danganronpagoods/images/a/ae/Ibuki_Mioda_Danganronpa_2_Sidebar.png",
      age: 17,
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
