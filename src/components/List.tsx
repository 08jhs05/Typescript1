import React from "react";

interface Istate {
    people: {
      name: string,
      url: string,
      age: number,
      note?: string
    }[]
  }

const List = ( {people} : Istate) => {
    return <div className="partyListView">
        {people.map(person => {
        return <div style={{display: 'flex', width:800, justifyContent:'space-between'}}>
          <div style={{flex: 1}}>
            <img src={person.url} width={150} height={150}/>
          </div>
          <div style={{flex: 1}}>{person.name}</div>
          <div style={{flex: 1.5, display: 'flex'}}>
            <div style={{paddingLeft: 20, paddingRight: 20}}>{person.age} years old</div>
            <div style={{paddingLeft: 20, paddingRight: 20}}>{person.note}</div>
          </div>
        </div>
      })}
    </div>
}

export default List;