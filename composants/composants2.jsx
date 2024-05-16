"use client";

import { useState } from 'react'

function counter() {
    let [count, setCount] = useState(0)
    const increment = () => setCount(count+1)
    const decrement = () => {if(count!==0){
        setCount(count-1);
    }else{
        alert('on ne peux pas aller dans les negatif');
    }}
    const reset = () => setCount(count = 0)

    return <div>
        <p>Compteur : {count}</p>
        <button onClick={increment}>Incrémenter</button>
        <button onClick={decrement}>Décrémenter</button>
        <button onClick={reset}>reset</button>
    </div>
}
export default counter