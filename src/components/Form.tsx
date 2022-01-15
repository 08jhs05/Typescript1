import React, {useState} from 'react'
import { Istate } from "../App"

interface Iprops {
    people: Istate["people"],
    setPeople: React.Dispatch<React.SetStateAction<Istate["people"]>>
}

const Form: React.FC<Iprops> = ({people, setPeople}) => {

    const [state, setstate] = useState({
        name:"",
        age:"",
        img:"",
        note:""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setstate({
           ...state,
           [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(
            !state.name ||
            !state.age ||
            !state.img ||
            !state.note
        ){
            return
        }
        setPeople([
            ...people,
            {
                name: state.name,
                age: parseInt(state.age),
                url: state.img,
                note: state.note
            }
        ])
        setstate({
            name:"",
            age:"",
            img:"",
            note:""
        })
    }

    return (
        <div className='AddToList'>
            <input type="text" name="name" placeholder="Name" className="AddToList-input" value={state.name} onChange={handleChange}/>
            <input type="number" name="age" placeholder="Age" className="AddToList-input"value={state.age} onChange={handleChange}/>
            <input type="text" name="img" placeholder="Image Url" className="AddToList-input" value={state.img} onChange={handleChange}/>
            <textarea name="note" placeholder="note" className="AddToList-input" value={state.note} onChange={handleChange}/>
            <button className="AddToList-btn" onClick={handleClick}>Add to List</button>
        </div>
    )
}

export default Form