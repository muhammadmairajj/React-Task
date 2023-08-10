import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const name = 'Mairaj';
    const [ArrData, setArrData] = useState<any>([]);

    const handleClick = (arr: any) => {
        // alert('Hello Mairaj');
        console.log('Arr --> ', arr);
        setArrData(arr);
    }


  return (
    <div>
        <h1>Parent Component</h1>
        <hr />
        <ChildComponent name={name} handleClick={handleClick} />
        
       <ul style={{display:'flex', alignItems:'flex-start', listStyleType:'number', flexDirection:'column'}}>
        {ArrData?.map((item: any, index: number) => {
            return <li key={index}>
                <h3>{item}</h3>
            </li>
        })}
       </ul>

    </div>
  )
}

export default ParentComponent