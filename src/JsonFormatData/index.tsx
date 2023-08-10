import React, { useState } from "react";

// How to create specific json data format to send api

const structure = {
  status: "Active",
  hr: [
    {
      name: "",
      email: "",
      salary: "",
      phone: "",
      age: "",
      experience: "",
      bonus: "",
    },
  ],
  IT: [
    {
      name: "",
      email: "",
      salary: "",
      phone: "",
      age: "",
      experience: "",
      bonus: "",
    },
  ],
};


function Data() {
  const [checkStatus, setCheckStatus] = useState<string>("inActive");
  const [arr, setArr] = useState<any>([]);
  const [addArr, setAddArr] = useState<any>([]);

  const handleEvent = () => {
    setCheckStatus("Active");
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
    setArr( {...arr, [event.target.name] : event.target.value } );
  } 

  const addRecord = () => {
    // let tempList = []
    let tempList = [...addArr];
    tempList.push(arr);
    console.log('tempList --> ', tempList);
    setAddArr(tempList);
    
  }

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Arr --> ", arr);
    console.log('addArr --> ', addArr);

    const structure: any = {
      status: checkStatus,
      hr: [],
      IT: [],
    }


  //  const hrObj: any = {};
  //  const itObj: any = {};

    addArr.map((item: any) => {
      const hrObj: any = {};
      const itObj: any = {};
      if(item.category === 'IT'){
        itObj['name'] = item.name;
        itObj['email'] = item.email;
        itObj['phone'] = item.phone;
        itObj['age'] = item.name;
        itObj['experience'] = item.experience;
        itObj['salary'] = item.salary;
        itObj['bonus'] = item.bonus;
        structure.IT.push(itObj);
      } else if(item.category === 'hr') {
        hrObj['name'] = item.name;
        hrObj['email'] = item.email;
        hrObj['phone'] = item.phone;
        hrObj['age'] = item.name;   
        hrObj['experience'] = item.experience;
        hrObj['salary'] = item.salary;
        hrObj['bonus'] = item.bonus;
        structure.IT.push(hrObj);
      } else {

      }
    })
    console.log('Structure --> ', structure)

  }
    // console.log('Structure --> ', structure)


  return (
    <div
      style={{
        display: "flex",
        margin: "50px auto",
        width: "600px",
        height: "auto",
      }}
    >
      <form onSubmit={onSubmitHandler} style={{ border: "1px solid #000", padding: "10px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "300px" }}>
            <label htmlFor="status">Select Status: </label>
            <select name="status" placeholder="Select" onChange={handleEvent}>
              <option value="inActive">InActive</option>
              <option value="Active">Active</option>
            </select>
            <br />
            <br />

            {checkStatus === "Active" ? (
              <>
                <label htmlFor="category">Select Category: </label>
                <select name="category" onChange={onChangeHandler}>
                  <option value="hr">HR</option>
                  <option value="IT">IT</option>
                </select>
                <br />
                <br />
                <input type="text" placeholder="Enter Name" name="name" onChange={onChangeHandler} />
                <br />
                <br />
                <input type="email" placeholder="Enter Email" name="email" onChange={onChangeHandler} />
                <br />
                <br />
                <input type="number" placeholder="Enter Phone" name="phone" onChange={onChangeHandler} />
                <br />
                <br />
                <input type="number" placeholder="Enter Age" name="age" onChange={onChangeHandler} />
                <br />
                <br />
                <input type="number" placeholder="Enter Salary" name="salary" onChange={onChangeHandler} />
                <br />
                <br />
                <input
                  type="number"
                  placeholder="Enter Experience"
                  name="experience"
                  onChange={onChangeHandler}
                />
                <br />
                <br />
                <input type="number" placeholder="Enter Bonus" name="bonus" onChange={onChangeHandler} />
              </>
            ) : (
              ""
            )}
            <br />
            <br />
            <button onClick={addRecord}>Add Record</button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Data;
