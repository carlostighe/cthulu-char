import { useState } from "react";
import EditableVal from "./EditableVal";

const Characteristic = ({ val, char, index }) => {
  const [value, setValue] = useState(val);
  const hard = Math.floor(value / 2);
  const extreme = Math.floor(value / 4);
  // const updateCharacteristic = () => set;

  const updateVal = (val) => {
    setValue(val)
  }
  return (
    <EditableVal name={char} value={value} handleChange={(e) => this.updateVal(e.target.value)} />
  );
};

export default Characteristic;
