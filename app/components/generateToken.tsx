"use client";

import { useState } from "react";
import { SeedPharse } from "./seedPharse";


export function GenerateToken(){
    const [clicked, setClicked] = useState(false);
    
    return (
        <div>
            <div className="flex justify-center">
                <button disabled={clicked} className="my-4 mx-2 px-8 py-4 border-2 rounded-2xl font-bold bg-black text-white" onClick={() => setClicked(!clicked)}>Generate Pharse</button>
            </div>
            <div className="flex justify-center">
                {
                    clicked && <SeedPharse />
                }
            </div>
        </div>
    );
}


