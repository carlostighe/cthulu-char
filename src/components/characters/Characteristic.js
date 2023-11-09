import EditableVal from "./EditableVal";

const Characteristic = ({ val, char, index }) => {
  const hard = Math.floor(val / 2);
  const extreme = Math.floor(val / 4);
  // const updateCharacteristic = () => set;
  return (
    <div className="char">
      <div className="characteristics">
        <div className="item characteristics-text">{char}</div>
        {/* <EditableVal handleCLick={updateCharacteristic} val={val} /> */}
        <div className="item item-pad border">{val}</div>
        {char !== "move rate" ? (
          <div className="item border">
            <div className="item">{hard} </div>
            <div className="item"> {extreme}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Characteristic;
