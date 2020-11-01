import React from "react";

const SelectBox = ({
  filterType,
  value,
  handleChange,
  data,
  selectKey,
  selectValue,
  result,
}) => {
  return (
    <div className="selectBox">
      <label>{filterType}</label>
      <select value={value} onChange={handleChange}>
        <option value="">Select</option>
        {data.map((item, i) => (
          <option key={item[selectKey] + i} value={item[selectValue]}>
            {item[result]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
