import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "bootstrap"


function TextFeatures(){
    // create an object 
    const navigate = useNavigate();
    //create a function to set the directory 
    const redirectPage = () => {
        navigate("/")
    }

return(
    <div className="container">
        
        <div className="row mt-3">
            <div className="col col-2">
                <button type="button" onClick={redirectPage} class="btn btn-outline-primary">
                    Back
                </button>
            </div>
            <div className="col col-6 text text-center border-">Testing Features</div>
        </div>
        
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum impedit corrupti eaque eius culpa rem debitis incidunt maxime minima adipisci.</p>
    </div>
)
}

export default TextFeatures