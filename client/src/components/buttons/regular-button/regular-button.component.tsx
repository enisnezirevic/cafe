import {FC} from "react";
import "./regular-button.styles.scss"

interface RegularButtonProps {
  label: string;
  type: "button" | "reset" | "submit" | undefined;
}

export const RegularButton: FC<RegularButtonProps> = ({label, type}) => {
  return (
    <button className="button" type={type}>{label}</button>
  );
};