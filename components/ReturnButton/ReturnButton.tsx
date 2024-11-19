"use client";

import Link from "next/link";
import styles from "./ReturnButton.module.scss";
import { useCallback, useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";

export default function ReturnButton() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    if (window.scrollY > window.innerHeight / 2) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [setVisible]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);
  return (
    <Link href="#hero">
      <div
        className={`${styles.returnButton} ${visible ? styles.visible : ""}`}
      >
        <FaArrowUp />
      </div>
    </Link>
  );
}
