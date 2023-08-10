import React, { useState, useEffect } from "react";
import "./style.css";

const DataFetchAndDisplay = () => {
  const [todoData, setTodoData] = useState<any>([]);
  const [tableDataCopy, setTableDataCopy] = useState<any>([]);
  const [select, setSelect] = useState<boolean>(false);
  const [defaultCheckbox, setDefaultCheckBox] = useState<boolean>(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    // console.log(data);
    setTodoData(data);
    setTableDataCopy(data);
  };

  const onChangeEvent = (event: any, index: number) => {
    let tempList = [...todoData];
    tempList[index].completed = event.target.checked;
    setTodoData(tempList);
  };

  const onChangeSelectBox = (e: any) => {
    setSelect(e.target.checked);
    setDefaultCheckBox(false);
    if (e.target.checked === true) {
      let arr: any = [];
      tableDataCopy.map((item: any) => {
        console.log("item", item);
        if (item.completed === true) {
          arr.push(item);
        }
      });

      setTodoData(arr);
    }
    if (e.target.checked === false) {
      let arr: any = [];
      tableDataCopy.map((item: any) => {
        if (item.completed === false) {
          arr.push(item);
        }
      });
      setTodoData(arr);
    }
  };
  const onChangeDefaultBox = (e: any) => {
    setDefaultCheckBox(e.target.checked);
    setSelect(false);
    setTodoData(tableDataCopy);
  };

  return (
    <div className="main-container">
      <h1>
        GET Method used for Fetch Data from API in React JS and Display Data in
        Web Page... And Also Included with Dynamic CheckBoxes and All Select &
        UnseleSt Checkbox Functionality
      </h1>
      <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <div>
          {select ? "UnSelect" : "Select"}
          <input
            checked={select}
            type="checkbox"
            onChange={(e) => onChangeSelectBox(e)}
          />
        </div>
        <div>
          Default
          <input
            checked={defaultCheckbox}
            type="checkbox"
            onChange={(e) => onChangeDefaultBox(e)}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo</th>
            <th>Completed</th>
            <th>Dynamic CheckBox</th>
          </tr>
        </thead>
        <tbody>
          {todoData &&
            todoData?.map((val: any, index: number) => {
              return (
                <tr key={val?.id}>
                  <td>{val?.id}</td>
                  <td>{val?.title}</td>
                  <td
                    style={{ color: val?.completed === true ? "blue" : "red" }}
                  >
                    {val?.completed.toString()}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={val?.completed}
                      onChange={(e) => onChangeEvent(e, index)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DataFetchAndDisplay;
