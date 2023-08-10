import React, { useState, useEffect } from 'react'

const SortingData = () => {
    const [userData, setUserData] = useState<any>([]);

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res?.json();
        console.log('data --> ', data);
        setUserData(data);
    }

    // Ascending Sorting
    const ascendingEvent = () => {
        const tempList = [...userData];
        if(tempList.length > 0) {
            let result = tempList.sort((a: any, b: any) => a.username.localeCompare(b.username));
            setUserData(result);
        }
    }

    // Descending Order
    const descendingEvent = () => {
        const tempList = [...userData];
        if(tempList.length > 0) {
            let result = tempList.sort((a: any, b: any) => b.username.localeCompare(a.username));
            setUserData(result);
        }
    }

  return (
    <div style={{width:'60%', marginTop:'20px auto', textAlign:"center"}}>
        <h1>Ascending & Descending Sorting User Data</h1>

        {userData && userData?.length > 0 && userData !== undefined ? userData?.map((item: any) => {
            return (
                <div>{item.username}</div>
            )
        }) : ""}

        <div style={{marginTop:'20px'}}>
          <button onClick={ascendingEvent}>Ascending</button>
          <button style={{margin:'10px'}} onClick={descendingEvent}>Descending</button>
          <button onClick={getUserData}>Prev Data</button>
      </div>
    </div>
  )
}

export default SortingData