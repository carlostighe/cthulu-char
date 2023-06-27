import EditableVal from "./EditableVal";
import { useState } from "react";

const Characteristic = ({ val, char, index }) => {
  const [value, setValue] = useState(val);

  const updateVal = (val) => {
    setValue(val);
  };
  return <EditableVal name={char} value={value} updateVal={updateVal} />;
};

export default Characteristic;
