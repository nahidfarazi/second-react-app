import React from "react";
import classes from "./layout.module.css";
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className={classes.app}>
      {/* nav section */}
      <nav className={classes.nav}>
        <div>
          <h3>Brand Name</h3>
        </div>
        <div className={classes.menu}>
          <ul className={classes.ul}>
            <li>
              <Link to="/" className={classes.navItem}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={classes.navItem}>
                About
              </Link>
            </li>
            <li>
              <Link to="/help" className={classes.navItem}>
                Help
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* main section */}
      <main className={classes.main}>{props.children}</main>
      {/* footer section */}
      <footer className={classes.footer}>
        <h3>Footer</h3>
        <ul>
          <li>
            <Link to="/" className={classes.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={classes.navItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/help" className={classes.navItem}>
              Help
            </Link>
          </li>
          <li>
            <Link to="/task" className={classes.navItem}>
              Task
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
