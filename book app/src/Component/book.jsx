import React, {useState} from 'react'
import './book.css';

function Book(props) {
    const [count, setCount] = useState(0);
    function increament() {
        setCount(count+1)
    }
    function decreament() {
        setCount(count-1)
    }


  return (
    <div id='book'>
        
        <img src={props.img} alt=""/>
        <h1> {props.title}</h1>
        <h1> {props.price}</h1>
        <button onclick={increament}>+ </button>
        <span>{count}</span>
        <button onclick={decreament}> - </button>

    </div>
  )
}

export default Book