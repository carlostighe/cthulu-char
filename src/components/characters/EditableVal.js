const EditableVal = (props) => {
  const hard = Math.floor(props.value / 2);
  const extreme = Math.floor(props.value / 4);
  return (
    <div className="uk-flex uk-width-1-3 side-pad uk-flex-column uk-flex-between">
      <div className="uk-flex uk-flex-row uk-flex-middle uk-flex-center uk-flex-between characteristic-pad ">
        <div className="uk-flex uk-flex-middle uk-flex-center uk-width-1-1">
          {props.name}
        </div>
        <div className="uk-flex uk-width-1-2">
          <input
            className="uk-input uk-form-width-xsmall uk-text-center"
            type="number"
            value={props.value}
            onChange={(e) => props.updateVal(e.target.value)}
          />
        </div>
      </div>

      {props.name !== "move rate" ? (
        <div className="uk-flex uk-flex-row border">
          <div className="uk-text-tiny">
            {hard} / {extreme}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EditableVal;
