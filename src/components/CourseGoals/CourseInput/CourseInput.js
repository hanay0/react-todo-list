import React, { useState } from 'react';
import { styled } from 'styled-components';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';

// create a component inside another component
const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input {
  border: 2px solid red;
  background-color: salmon;
}

&.invalid label {
  color: red;
}
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
      // resetting the styles if the input is not an empty one
      (event.target.value).trim().length > 0 ? setIsValid(true) : setIsValid(false);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false) // update the state to be false , and due to that boolean we will add dynamic styles
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={`${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input
            type="text"
            onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
