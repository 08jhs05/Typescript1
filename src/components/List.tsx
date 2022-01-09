import React from "react";

interface Istate {
    people: {
      name: string,
      url: string,
      age: number,
      note?: string
    }[]
  }

const List = (props: Istate) => {
    return <div>
        List components
    </div>
}

export default List;