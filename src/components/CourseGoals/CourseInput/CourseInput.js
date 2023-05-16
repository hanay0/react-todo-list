import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

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
      <div className="form-control">
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input
            type="text"
            onChange={goalInputChangeHandler}
            style={{
              border: !isValid ? '2px solid red': '2px solid #ccc',
              backgroundColor: !isValid ? 'salmon' : 'transparent'
            }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
