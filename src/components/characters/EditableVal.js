const EditableVal = (props) => {
  return (
    <div className="item item-pad border" onClick={props.handleClick}>
      {props.val}
    </div>
  );
};

export default EditableVal;
