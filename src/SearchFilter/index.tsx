import React, { useState } from "react";
import { userData } from "./data";

function SearchFilter() {
  const [arrData, setArrData] = useState<any>(userData);
  // console.log('Arr Data --> ', arrData);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value === "") {
        window.location.reload();
        const tempData = arrData;
        setArrData(tempData);
        return
    }
    const searchFilter = arrData.filter((item: any) => {
      return item?.name
        ?.toLowerCase()
        ?.startsWith(event.target.value.toLowerCase());
    });

    setArrData(searchFilter);
  };

  return (
    <div>
      <h1>Search Filter | Search Bar in ReactJS using HOOK</h1>

      <input
        type="text"
        placeholder="Enter Searching Here ... "
        onChange={onChangeHandler}
      />
      <br />
      <br />

      <div>
        <table style={{ border: "1px solid #000", marginLeft: 20 }}>
          <thead>
            <tr style={{ border: "1px solid #000" }}>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {arrData?.map((val: any) => {
              return (
                <tr key={val?.id} style={{ border: "1px solid #000" }}>
                  <td>{val?.id}</td>
                  <td>{val?.name}</td>
                  <td>{val?.email}</td>
                  <td>{val?.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchFilter;
