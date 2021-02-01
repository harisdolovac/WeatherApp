import React from "react";

const Select = ({ setCity, city }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  return (
    <div>
      <h3>Choose from popular</h3>
      <form onSubmit={handleSubmit}>
        <select value={city} onChange={handleChange}>
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
