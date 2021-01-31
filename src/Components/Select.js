import React from "react";

const Select = ({ setCity }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  return (
    <div>
      <form onChange={handleChange}>
        <select value="London">
          <option value="Washington">Washington</option>
          <option value="New York">New York</option>
          <option value="Amsterdam">Amsterdam</option>
          <option value="Paris">Paris</option>
          <option value="Rome">Rome</option>
          <option value="Madrid">Madrid</option>
          <option value="Berlin">Berlin</option>
        </select>
      </form>
    </div>
  );
};

export default Select;
