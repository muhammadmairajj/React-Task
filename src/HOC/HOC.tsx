import React, { useState } from 'react'

/* 
A higher-order component (HOC) is an advanced technique in React for reusing component logic. 
HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature. 
Concretely, a higher-order component is a function that takes a component and returns a new component.
*/

const HigherOrderComp = (Student: any) => {
  const HigherOrderContainer = () => {  
    const [num, setNum] = useState<Number>(0);

    const handleNumEvent = () => {
      setNum((prev: any) => prev + 10);
    }

    return (
      <Student num={num} handleNumEvent={handleNumEvent} />
    )
  }

  return HigherOrderContainer;
}

export default HigherOrderComp;