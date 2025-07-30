import React, { useState } from "react";
import "./cardd.css";
const Cardd = ({src,dishName,cost}) => {

  const [item, setItem] = useState(0);

  function remove()
  {
    if(item >=1 )
    {
      setItem(item -1);
    }

  }

  function add()
  {
    if(item >=0 && item<=19)
    {
      setItem(item+1);
    }
  }


  return (
    <div id="package">
      <br>
      </br>
      <div className="card">
        <img id="img" src={src}/>
        <div className="card-body">
          <h5 className="card-title">{dishName}</h5>
          <h4 className="card-cost">{cost}</h4>
          <button id="suraj" onClick={remove}>-</button>
          <span id="cartt">{item}</span>
          <button id="suraj1" onClick={add}>+</button>
          <div>
            <a href="#" id="Ad" className="btn btn-primary">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardd;
