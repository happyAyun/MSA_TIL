import React, { useState } from "react";
import { Select } from "semantic-ui-react";

function SelectF(props) {
  const [value, setValue] = useState("coconut");

  const handleSubmit = e => {
    alert("Your favorite flavor is: " + value);
    e.preventDefault();
  };

  const handleChange = (e, data) => {
    // undefined 해결 방법
    setValue(data.value);
  };

  const countryOptions = [
    { key: "grapefruit", value: "grapefruit", text: "grapefruit" },
    { key: "lime", value: "lime", text: "lime" },
    { key: "coconut", value: "coconut", text: "coconut" },
    { key: "mango", value: "mango", text: "mango" },
  ];
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <Select
            placeholder="Select your country"
            options={countryOptions}
            value={value}
            onChange={(e, data) => handleChange(e, data)} // undefined 해결 방법
          />
          {/* <select value={value} onChange={e => handleChange(e)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select> */}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SelectF;
