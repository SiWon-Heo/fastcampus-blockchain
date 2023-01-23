import React, { useState } from "react";

function MyButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log('click');
    setIsClicked(true);
  }


  return (
    <button onClick={handleClick} disabled={isClicked}>Button</button>
  );
}

export default MyButton;