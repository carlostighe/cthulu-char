import { useState } from "react";

const CharacterSkill = ({ name, val, ticked, index }) => {
  const [value, setValue] = useState(val);
  const [tick, setTick] = useState(ticked);

  const updateTicked = () => {
    console.log('clicked')
    setTick(!tick)
  }
  return (
    <div className={"uk-flex uk-width-1-3 little-pad uk-flex-column uk-flex-between " + (tick ? 'border' : '')}>
      <div className="uk-flex uk-flex-row uk-flex-middle uk-flex-center uk-flex-between characteristic-pad pad-bottom">
        <div
          className="uk-flex uk-flex-middle uk-flex-center uk-width-1-1 uk-text-tiny"
          onClick={updateTicked}>
          {name}
        </div>
        <div className="uk-flex uk-flex-center uk-width-1-2">
          <input
            className="uk-input uk-form-width-xsmall uk-text-tiny uk-text-center"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className="uk-flex uk-flex-row border">
        <div className="uk-text-tiny">
          {Math.floor(value / 2)} / {Math.floor(value / 5)}
        </div>
      </div>
    </div>
  );
};

export default CharacterSkill;
