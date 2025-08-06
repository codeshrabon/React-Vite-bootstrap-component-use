import React from "react";
import { Button } from "bootstrap";

function Experiment(){
        

    return(
        <div className="container">
          <div className="row">
            <div className="col-3 bg-primary p-2 p-lg-5 m-3 m-lg-5">
              <h5 className="text">I am dev1</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, quae!</p>
              </div>
            <div className="col-3 bg-secondary m-5 p-5">
              <h5>i am dev2</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nisi ex a reiciendis voluptatibus atque!</p>
            </div>
            <div className="col-3 bg-warning m-3 m-lg-5 pt-5">
              <h5 className="border border-black">I am dev 3</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, sapiente!</p>
            </div>
            <div className="col-3 bg-black p-3 p-lg-5 m-3 m-lg-5">
              <h5 className="text-white">I am dev 4</h5>
              <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellat architecto quam tenetur!</p>
            </div>
          </div>
          <div className="row bg-primary text-white p-3 p-lg-5 m-3 m-lg-5 border">
            
            <div className="col col-2 bg-black p-1  border border-white m-1 text-center " >col-sm</div>
            <div className="col-3 text-center">col-sm</div>
            <div className="col col-lg-4 p-1 border m-1 text-center">
              col-sm
            </div>
          
          </div>

          <div className="row p-3 border border-black mb-5">
            <div className="col-2">
              1 of 3
            </div>
            <div className="col-6">
              Variable width content
            </div>
            <div className="col-4">
              3 of 3
            </div>
          </div>
        
        </div>

    );
}

export default Experiment