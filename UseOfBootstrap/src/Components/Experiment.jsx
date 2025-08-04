import React from "react";
import { Button } from "bootstrap";

function Experiment(){
        

    return(
        <div className="container  max-width text-center border">
  <div className="row">
    <div className="col-sm-2">col-sm-2</div>
    <div className="col-sm-10">col-sm-4</div>
  </div>
  <div className="row">
    <div className="col-sm">col-sm</div>
    <div className="col-sm"></div>
    <div className="col-sm"></div>
    <div className="col-sm">col-sm</div>
  </div>

  <div className="row justify-content-md-center">
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

  {/* <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack> */}
  
</div>

    );
}

export default Experiment