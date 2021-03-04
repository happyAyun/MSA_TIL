import React, { useState } from "react";
import { Checkbox, Segment } from "semantic-ui-react";
import { Input } from "semantic-ui-react";

function MultiInput(props) {
  const [isGoing, setIsGoing] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(2);

  return (
    <div>
      <form>
        <label>
          Is going:
          <Segment compact>
            <Checkbox toggle />
          </Segment>
          <input
            name="isGoing"
            type="checkbox"
            checked={isGoing}
            onChange={event => setIsGoing(event.target.checked)} //
          />
        </label>
        <br />
        <label>
          Number of guests:
          <Input
            focus
            name="numberOfGuests"
            type="number"
            value={numberOfGuests}
            onChange={event => setNumberOfGuests(event.target.value)}
          />
          {/* <input
            name="numberOfGuests"
            type="number"
            value={numberOfGuests}
            onChange={event => setNumberOfGuests(event.target.value)} //
          /> */}
        </label>
      </form>
    </div>
  );
}

export default MultiInput;
