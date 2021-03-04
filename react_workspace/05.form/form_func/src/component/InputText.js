import React, { useState } from "react";
import { Input } from "semantic-ui-react";

function InputText(props) {
  const [value, setValue] = useState(" ");

  const handleSubmit = event => {
    alert(value);
    event.preventDefault();
  };

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <Input
          action="Search"
          type="text"
          value={value}
          onChange={event => handleChange(event)}
        />
        {/* <input
          type="text"
          value={value}
          onChange={event => handleChange(event)}
        /> */}
      </label>
      {/* <input type="submit" value="Submit" /> */}
    </form>
  );
}

export default InputText;
