const Stats = ({ name, statMax, statCurrent }) => {
  return (
    <div className="stats">
      <div className="stats-item">{name}</div>
      <div className="stats-item">
        {statCurrent} / {statMax}
      </div>
    </div>
  );
};

export default Stats;
