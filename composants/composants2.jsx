"use client";

import { useState } from 'react'

function counter() {
    let [count, setCount] = useState(0)
    const increment = () => {setCount(count+1);
        if(count >= 99){
            document.body.style.background='url(https://i.gifer.com/W9k1.gif)'
        }else{
            document.body.style.background='white'
        }
    }
    const decrement = () => {if(count!==0){
        setCount(count-1);
        if(count <= 100){
            document.body.style.background='white'
        }
    }else{
        alert('on ne peux pas aller dans les negatif');
    }}
    const reset = () => {
        setCount(count = 0);
        if(count < 99){
            document.body.style.background='white'
        }
    }

    return <div>
        <p>Compteur : {count}</p>
        <button onClick={increment}>Incrémenter</button>
        <button onClick={decrement}>Décrémenter</button>
        <button onClick={reset}>reset</button>
    </div>
}
export default counter