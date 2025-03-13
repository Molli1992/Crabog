import { InputSwitch } from "primereact/inputswitch";

export default function Switch({ Checked, OnChange }) {
  return (
    <InputSwitch
      checked={Checked}
      onChange={OnChange}
      style={{
        cursor: "pointer",
      }}
    />
  );
}
