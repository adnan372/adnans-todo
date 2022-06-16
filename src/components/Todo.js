import React , {useState} from 'react'
import './Todo.css'
import ToDoList from './ToDoList';

const Todo = () => {
    const [inputList , setInputList] = useState("");
    const [data , setData] = useState([])

    const itemEvent = (e) => {
        setInputList(e.target.value)       
    }

    const SendData = () =>  {
        setData((oldItem) =>{
            return [...oldItem , inputList]
        });
        setInputList("");
    };

    const deleteItem = (id) => {
        console.log("Deleted");

        setData((oldItem) => {
            return oldItem.filter((arrElem,index) => {
                return index !== id ;

            })
        })

    };
   

  return (
    <div className='main'>
        <div className="center">
            <h2>ADNANS TO DO LIST</h2>
            <div className="input">
                <input type="text" value={inputList} placeholder='Enter the work' onChange={itemEvent}/>
                <button onClick={SendData}>+</button>
            </div>
            <div className="list">
                <ol>
                    {
                    data.map((itemVal , index)=> {
                        return <ToDoList
                        key={index}
                        id={index}
                        text={itemVal}
                        onSelect = {deleteItem}
                        />
                        // <li>{itemVal}</li>
                    })
                    }
                </ol>
            </div>
        </div>

    </div>
  )
}

export default Todo