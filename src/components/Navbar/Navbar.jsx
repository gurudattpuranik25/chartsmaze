import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import home from "../../assets/home.png";
import scanner from "../../assets/scanner.png";
import analytics from "../../assets/analytics.png";
import watchlist from "../../assets/file.png";
import blogs from "../../assets/blog.png";
import "./navbar.css";

const Navbar = () => {
  const [anchorElScanners, setAnchorElScanners] = useState(null);
  const [anchorElAnalytics, setAnchorElAnalytics] = useState(null);

  const openScannersMenu = Boolean(anchorElScanners);
  const openAnalyticsMenu = Boolean(anchorElAnalytics);

  const handleScannersClick = (event) => {
    setAnchorElScanners(event.currentTarget);
    setAnchorElAnalytics(null); // Close the other menu if open
  };

  const handleAnalyticsClick = (event) => {
    setAnchorElAnalytics(event.currentTarget);
    setAnchorElScanners(null); // Close the other menu if open
  };

  const handleClose = () => {
    setAnchorElScanners(null);
    setAnchorElAnalytics(null);
  };

  return (
    <nav>
      <section className="navbar">
        <img src={home} id="home__icon" alt="home icon" />
        <section className="nav__links">
          <div>
            {" "}
            <Button
              id="basic__button"
              aria-controls={openScannersMenu ? "scanners-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openScannersMenu ? "true" : undefined}
              onClick={handleScannersClick}
            >
              {" "}
              <img
                src={scanner}
                className="nav__icons"
                alt="scanner icon"
              />{" "}
              <p className="link__text">Scanners</p>
            </Button>{" "}
            <Menu
              id="scanners-menu"
              anchorEl={anchorElScanners}
              open={openScannersMenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "scanners-button",
              }}
            >
              {" "}
              <MenuItem onClick={handleClose}>Create Scanner</MenuItem>{" "}
              <MenuItem onClick={handleClose}>Horizontal Resistance</MenuItem>{" "}
              <MenuItem onClick={handleClose}>Tight Setup</MenuItem>{" "}
              <MenuItem onClick={handleClose}>IPO Scanner</MenuItem>{" "}
              <MenuItem onClick={handleClose}>Volume Footprint</MenuItem>{" "}
              <MenuItem onClick={handleClose}>Shakeout</MenuItem>{" "}
            </Menu>
          </div>{" "}
          <div>
            {" "}
            <Button
              id="basic__button"
              aria-controls={openAnalyticsMenu ? "analytics-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openAnalyticsMenu ? "true" : undefined}
              onClick={handleAnalyticsClick}
            >
              {" "}
              <img
                src={analytics}
                className="nav__icons"
                alt="market
          analytics icon"
              />{" "}
              <p className="link__text">Market Analytics</p>{" "}
            </Button>{" "}
            <Menu
              id="analytics-menu"
              anchorEl={anchorElAnalytics}
              open={openAnalyticsMenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "analytics-button",
              }}
            >
              {" "}
              <MenuItem onClick={handleClose}>Industry Analytics</MenuItem>{" "}
              <MenuItem onClick={handleClose}>Market Breadth</MenuItem>{" "}
              <MenuItem onClick={handleClose}>Top Gainers</MenuItem>{" "}
            </Menu>{" "}
          </div>
          <div>
            <Button id="basic__button">
              <img
                src={watchlist}
                className="nav__icons"
                alt="watchlist icon"
              />
              <p className="link__text">Create Watchlist</p>
            </Button>
          </div>
          <div>
            <Button id="basic__button">
              <img src={blogs} className="nav__icons" alt="blogs icon" />
              <p className="link__text">Blogs</p>
            </Button>
          </div>
        </section>
        <button id="signin__btn">Sign In</button>
      </section>
    </nav>
  );
};

export default Navbar;
