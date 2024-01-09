import React from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>navbar</h2>
        <nav className={classes.header__content__nav}>
          <ul>
            <li>
              <a href="/">PageOne</a>
            </li>
            <li>
              <a href="/">PageTwo</a>
            </li>
            <li>
              <a href="/">PageThree</a>
            </li>
          </ul>
          <button>CTA Page</button>
        </nav>
        <div className={classes.header__content__toggle}>
          <BiMenuAltRight />
        </div>
      </div>
    </header>
  );
};

export default Header;
