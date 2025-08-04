import { useState } from "react";
import React from "react";

function Home() {
const [count, setCount] = useState(0);
const [count1, setCount1] = useState(0);

return (
    
    <div className="container">
        {/* <div className="container">

        </div> */}
        <div className="text-center">
        <div className="row">
            <div className="col col-lg-2">
                1 of 3
            </div>
            <div className="col-md-auto">
                Variable width content
            </div>
            <div className="col col-lg-2">
                3 of 3
            </div>
        </div>
        <div className="row">
            <div className="col">
                1 of 3
            </div>
            <div className="col-md-auto">
                Variable width content
            </div>
            <div className="col col-lg-2">
                3 of 3
            </div>
        </div>
        </div>
    </div>
    
    // <div className="container text-center">

    //     <div className="card">
    //     <div className="d-flex justify-content-start">
    //         <button onClick={() => setCount((count) => count + 1)}>
    //         count is {count}

    //         </button>
    //     </div>
    //     </div>
    //     <div className="row justify-content-md center mt-4">
    //         <div className="col-lg-2  ">
    //             1 of 3
    //         </div>
    //         <div className="col-md-auto">
    //             Variable width content
    //         </div>

    //     </div>

    //     </div>
  );
}

export default Home;
