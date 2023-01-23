import React, { useEffect, useState } from "react";
import useCount from "./useCount";

function CalculateComp(props) {
  const [count, plus, minus] = useCount();
  const [isZero, setIsZero] = useState(true);

  useEffect(() => {
    console.log('useEffect')
  }, []);

  useEffect(() => {
    console.log('count')
    if (count === 0) {
      setIsZero(true);
    } else {
      setIsZero(false);
    }
  }, [count]);

  return (
    <div>
      <h3>Count: {count} / {`${isZero}`}</h3>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  )
}

export default CalculateComp;