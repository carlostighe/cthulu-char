const Characteristic = ({ val, char, index }) => {
  return (
    <div key={index} className="two columns">
      <div className="one column">{char}</div>
      <div className="one column">{val}</div>
      <div className="one column">
        {val / 2} : {val / 4}
      </div>
    </div>
  );
};

export default Characteristic;
