import { useState } from "react";
import React from "react";


function Home() {
const [count, setCount] = useState(0);
const [count1, setCount1] = useState(0);

return (
    
    <div className="container">
        <div className="row">
            <div className="col">
                Column
            </div>
            <div className="col">
                Column
            </div>
            <div className="col">
                Column
            </div>
            <div className="col">
                Column
            </div>
        </div>

        
    </div>
);
}

export default Home
