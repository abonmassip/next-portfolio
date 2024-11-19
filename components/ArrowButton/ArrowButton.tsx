import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

import styles from "./ArrowButton.module.scss";

const ArrowButton = ({
  direction,
}: {
  direction: "up" | "down" | "left" | "right";
}) => {
  return (
    <div className={styles.arrowContainer}>
      {direction === "up" && <MdKeyboardArrowUp />}
      {direction === "down" && <MdKeyboardArrowDown />}
      {direction === "left" && <MdKeyboardArrowLeft />}
      {direction === "right" && <MdKeyboardArrowRight />}
    </div>
  );
};

export default ArrowButton;
