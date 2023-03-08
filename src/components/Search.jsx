import React from 'react';
import { Divider, Input } from 'antd';

function Search({ handleSearchValue }) {
  const handleChange = (e) => {
    handleSearchValue(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>
      <Input
        value={undefined}
        type="text"
        name="search"
        onChange={handleChange}
      />
    </>
  );
}

export default Search;
