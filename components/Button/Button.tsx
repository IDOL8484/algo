import cn from "classnames";

import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button = ({
  color = "blue",
  size = "m",
  className,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.xS]: size == "xS",
        [styles.s]: size == "s",
        [styles.m]: size == "m",

        [styles.blue]: color == "blue",
        [styles.lightBlue]: color == "light-blue",
      })}
      onClick={onClick}
      {...props}
    ></button>
  );
};
