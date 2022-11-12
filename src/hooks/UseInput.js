import { useState } from 'react';

const UseInput = () => {
  const [value, setValue] = useState('');

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
  };
};

export default UseInput;
