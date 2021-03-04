import React, { useState } from "react";
import { Form, TextArea } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

function InputTextarea(props) {
  const [value, setValue] = useState(
    "Please write an essay about your favorite DOM element."
  );

  const handleSubmit = event => {
    alert("An essay was submitted: " + value);
    event.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <TextArea
          placeholder="Tell us more"
          value={value}
          onChange={event => {
            setValue(event.target.value);
          }}
        />
        <Button primary>submit</Button>
      </Form>

      {/* <form onSubmit={handleSubmit}>
        <label>
          Essay:
          <textarea
            value={value}
            onChange={event => {
              setValue(event.target.value);
            }} // 함수
          />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
}

export default InputTextarea;
