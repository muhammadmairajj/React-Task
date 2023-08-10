import React from 'react'
import HigherOrderComp from './HOC'

const Student1 = (props: any) => {
  const { num, handleNumEvent } = props;
  return (
    <div>
        <h1>Student-1</h1>

        <h3>Num - {num}</h3>
        <button onClick={handleNumEvent}>Click Me</button>
    </div>
  )
}

export default HigherOrderComp(Student1);