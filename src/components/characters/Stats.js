const Stats = (props) => {
  return (
    <div className="uk-flex uk-flex-between uk-flex-column stats border pad">
      <div className="stats-item">{props.name}</div>
      <div className="stats-row">
        <div className="uk-flex uk-flex-between uk-flex-middle">
          <input
            className="uk-input uk-form-width-xsmall stats border-none"
            onChange={(e) => props.updateLuck(e.target.value)}
            value={props.statCurrent}
          />
          /
          <input
            className="uk-input uk-form-width-xsmall stats border-none"
            onChange={(e) => props.updateLuck(e.target.value)}
            value={props.statMax}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
