import React from "react";

const Translator = (props: any) => {
  return (
    <div className="form-container" style={{marginTop:20}}>
      <form>
        <div className="select-box">
            <select placeholder="Select Language" name='ii8n' onChange={props?.handleChange}>
               <option value={''}>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'ar'}>Arabic</option>
                <option value={'ur'}>Urdu</option>
            </select>
        </div>
      </form>
    </div>
  );
};

export default Translator;
