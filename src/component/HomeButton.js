// Can be removed, only purpose is to show redirect working

import React from "react";
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  

  return (
    <div>
        <div>
            <button>Name</button>
    <input type="text"
    placeholder="TextBox1"
    ></input>
    <input type="text"
    placeholder="TextBox2"></input>
    <button>Logout</button>
</div>
<div>
<textarea
         
        />
</div>

    </div>
  );
}

export default HomeButton;
