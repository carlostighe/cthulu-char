const Stats = ({ name, statMax, statCurrent }) => {
  return (
    <div className="stats border pad">
      <div className="stats-item">{name}</div>
      <div className="stats-row">
        <div className="stats-val">
          {statCurrent} / {statMax}
        </div>
      </div>
    </div>
  );
};

export default Stats;
