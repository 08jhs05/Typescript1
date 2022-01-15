import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

export interface Istate {
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
    },
    {
      name: "Doug Ford",
      url: "https://i.guim.co.uk/img/media/3cb2212e6f8d334a4fb6439b8785bd0e1a92254d/127_416_4824_2896/master/4824.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a349febeabf76f948188d12e0e1ed6cf",
      age: 57,
      note: "Gym hater"
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <Form people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
