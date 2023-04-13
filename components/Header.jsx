import React from "react";
import styles from "../styles/Header.module.css";
import { BsGithub } from "react-icons/bs";

export default function Header() {
  return (
    <header className={styles.container}>
      <div>
        <h3>File Compressor</h3>
      </div>
      <a className={styles.icon} href="http://github.io">
        <BsGithub className={styles.github} />
      </a>
    </header>
  );
}
