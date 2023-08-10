import React, { useState } from "react";
import "./style.css";

const DynamicInputForm = () => {
  const [formData, setFormData] = useState<any>([{ name: "", email: "" }]);

  // Add Row
  const addRow = () => {
    setFormData([...formData, { name: "", email: "" }]);
  };

  // Remove Row
  const removeRow = (index: number) => {
    const tempList = [...formData];
    tempList.splice(index, 1);
    setFormData(tempList);
  };

  // onChange Handler
  // 1st Method
  //   const onInputChange = (event: any) => {
  //     setFormData({ ...formData, [event.target.name]: event.target.value });
  //   };

  // 2nd Method
  const onInputChange = (event: any, index: number) => {
    const tempList = [...formData];
    tempList[index][event.target.name] = event.target.value;
    setFormData(tempList);
  };

  const formValidation = (formVal: any) => {
    let data = [...formVal];
    let regex = /\S+@\S+\.\S+/;
    let valid = true;

    for (let i = 0; i < data.length; i++) {
      if (data[i].name === "") {
        data[i].nameCheck = "Name is Required";
        data[i].nameLengthCheck = "";
        valid = false;
      } else if (data[i].name.length < 10) {
        data[i].nameLengthCheck = "Name must be greater than 10";
        data[i].nameCheck = "";
        valid = false;
      } else {
        data[i].nameCheck = "";
        data[i].nameLengthCheck = "";
        valid = true;
      }

      if (data[i].email === "") {
        data[i].emailCheck = "Email is Required";
        data[i].emailFormat = "";
        valid = false;
      } else if (!regex.test(data[i].email)) {
        data[i].emailFormat = "Invalid Email";
        data[i].emailCheck = "";
        valid = false;
      } else {
        data[i].emailCheck = "";
        data[i].emailFormat = "";
        valid = true;
      }
    }

    setFormData(data);
    return valid;
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitData", formData);
    const errorRes = formValidation(formData);
    console.log("errorRes", errorRes);
    if (errorRes) {
      // api call
    } else {
      // error msg
    }
  };

  console.log("formData -->", formData);

  return (
    <div className="form-container">
      <form action="" onSubmit={onSubmit}>
        {formData
          ? formData?.map((item: any, index: number) => {
              console.log("item --> ", item);
              return (
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      value={item.name || ""}
                      name="name"
                      onChange={(e) => onInputChange(e, index)}
                    />
                    <div className="error-message">
                      {item.nameCheck}
                      <br />
                      {item.nameLengthCheck}
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={item.email || ""}
                      onChange={(e) => onInputChange(e, index)}
                      placeholder="Enter Your Email"
                    />
                    <div className="error-message">
                      {item.emailCheck}
                      <br />
                      {item.emailFormat}
                    </div>
                  </div>

                  {index === 0 ? (
                    ""
                  ) : (
                    <button onClick={() => removeRow(index)}>Remove</button>
                  )}
                </div>
              );
            })
          : ""}
        <div>
          <button onClick={addRow}>Add Row</button>
          <button type="submit" style={{ marginLeft: "20px" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DynamicInputForm;
