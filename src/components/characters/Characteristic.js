const Characteristic = ({ val, char, index }) => {
  const hard = Math.floor(val / 2);
  const extreme = Math.floor(val / 4);
  return (
    <div className="item">
      <div className="characteristics">
        <div className="item">{char}</div>
        <div className="item border item-pad">{val}</div>
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
