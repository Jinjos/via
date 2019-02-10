import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <InputGroup>
        <FormControl
          placeholder="Search people"
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={searchChange}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBox;
