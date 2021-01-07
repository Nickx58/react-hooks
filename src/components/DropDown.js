import React from "react";

const DropDown = ({ options }) => {
  const renderOptions = options.map((option) => {
    return (
      <div key={option.value} className="item">
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">Select color</div>
          <div className="menu visible transition">{renderOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
