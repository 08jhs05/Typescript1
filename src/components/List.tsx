import React from "react";
import { Istate } from "../App"

const List: React.FC<Istate> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return <li className="List" key={index}>
        <div className="List-header">
          <img src={person.url} alt="profile pic"/>
          <h2 className="List-name">{person.name}</h2>
        </div>
        <div className="List-note">{person.age} years old</div>
        <div className="List-note">{person.note}</div>
      </li>
    })
  }
    return <ul>
        {renderList()}
      </ul>
}

export default List;