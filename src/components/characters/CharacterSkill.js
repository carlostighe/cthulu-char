import { useState } from "react";

const CharacterSkill = ({ name, val, ticked, index }) => {
  const [value, setValue] = useState(val);
  const hard = Math.floor(value / 2);
  const extreme = Math.floor(value / 4);
  return (
    <div className="uk-flex uk-width-1-3 side-pad uk-flex-row uk-flex-between">
      <div className="uk-flex uk-flex-middle">{name}</div>
      {/* <div className="uk-flex uk-flex-middle border little-pad">{val}</div> */}
      <div className="uk-flex uk-flex-middle uk-width-1-1">
        <input
          className="uk-input uk-form-width-xsmall"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="border little-pad">
        <div className="">{hard} </div>
        <div className=""> {extreme}</div>
      </div>
    </div>
  );
};

export default CharacterSkill;
