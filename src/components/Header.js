import React, { useState, useEffect } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>navbar</h2>

        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="/pageOne" onClick={menuToggleHandler}>
                PageOne
              </a>
            </li>
            <li>
              <a href="/pageTwo" onClick={menuToggleHandler}>
                PageTwo
              </a>
            </li>
            <li>
              <a href="/pageThree" onClick={menuToggleHandler}>
                PageThree
              </a>
            </li>
          </ul>
          <button onClick={menuToggleHandler}>
            <a href="/ctaPage">CTA Page</a>
          </button>
        </nav>
        <div className={classes.header__content__toggle}>
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggleHandler} />
          ) : (
            <BiMenuAltRight onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
