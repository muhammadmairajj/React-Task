import React from 'react'

const ChildComponent = (props: any) => {

    const arr = ['JavaScript', 'ReactJS', 'NextJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Postgresql', 'Firebase'];

  return (
    <div>
        <h1>Child Component</h1>
        <br />
        <h3>{props.name}</h3>

        <button onClick={() => props.handleClick(arr)}>Click Me</button>
    </div>
  )
}

export default ChildComponent