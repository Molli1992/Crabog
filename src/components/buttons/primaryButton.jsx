import styles from "./primaryButton.module.css";
import { Button } from "primereact/button";
import { ClipLoader } from "react-spinners";

export default function PrimaryButton({
  OnClick,
  Loader,
  Value,
  bgColor,
  Width,
  fontSize,
}) {
  return (
    <Button
      className={styles.button}
      style={{
        backgroundColor: bgColor ? bgColor : "",
        width: Width ? Width : "",
        fontSize: fontSize ? fontSize : "",
      }}
      onClick={() => {
        OnClick();
      }}
    >
      {Loader ? <ClipLoader color="#ffffff" size={30} /> : Value}
    </Button>
  );
}
