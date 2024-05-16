"use client";

import { useState } from 'react';
import api from "../app/api/hello";

function btn() {
    return <div>
        <h1>api</h1>
            <button onClick={()=>{
                const e = api();
            }}>ajouter</button>
        <div className='citation'>

        </div>
    </div>
}
export default btn