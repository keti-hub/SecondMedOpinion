import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "./Header.module.scss";

// import WhiteLogo from "../../../assets/white-logo.png";s
import BlackLogo from "../../../assets/black-logo.png";
import Fb from "../../../assets/fb.png";
import Instagram from "../../../assets/insta.png";
import CallIcon from "../../../assets/call-icon.png";
import GeorgiaIcon from "../../../assets/georgia-icon.png";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor:
          theme.palette.mode === "dark" ? "#2ECA45" : "rgb(157, 151, 142)",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const navs = [
  { item: "Home", link: "home" },
  { item: "About Us", link: "about-us" },
  { item: "Magnetic Resonance Imaging (MRI)", link: "mri" },
  { item: "Computer Tomography (CT)", link: "computer-tomography" },
  { item: "Contact Us", link: "contact-us" },
];

const Header = ({ toggleTheme, theme, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles["top-header"]}>
        <div className={styles.wrapper}>
          <a href="https://www.facebook.com/secondmedopinion/" target="blank">
            <img src={Fb} alt="facebook icon" />
          </a>
          <a href="https://www.facebook.com/secondmedopinion/" target="blank">
            <img src={Instagram} alt="instagram icon" />
          </a>
          <div>
            +995 333 333 333
            <img className={styles.call} src={CallIcon} alt="call-icon" />
          </div>
          <img src={GeorgiaIcon} alt="flag" />
        </div>
      </div>

      <div className={`${styles["header-container"]} ${styles[theme]}`}>
        <div className={styles.wrapper}>
          <div className={`${styles.container} ${styles[className]}`}>
            <div className={styles.logo}>
              <Link to="/">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={BlackLogo} alt="logo" style={{ height: "64px" }} />
                  <div>
                    <b>EXPERT</b> MED <br /> OPINION
                  </div>
                </div>
              </Link>
            </div>

            <div className={styles.items}>
              {navs.map((nav, i) => (
                <div key={i}>
                  <NavLink
                    to={nav.link}
                    className={({ isActive, isPending }) =>
                      `${isPending ? "pending" : isActive ? styles.active : ""}`
                    }
                  >
                    {nav.item}
                  </NavLink>
                </div>
              ))}
            </div>

            <div className={styles["last-child-wrapper"]}>
              <FormControlLabel
                control={
                  <IOSSwitch
                    sx={{ m: 1 }}
                    defaultChecked
                    onChange={toggleTheme}
                  />
                }
              />

              <div
                onClick={() => setOpen(!open)}
                className={`${styles["burger-wrapper"]} ${
                  open ? styles.open : styles.close
                }`}
              >
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className={`${styles["open-items"]} ${styles[theme]}`}>
          {navs.map((nav, i) => (
            <div key={i}>
              <NavLink
                to={nav.link}
                className={({ isActive, isPending }) =>
                  `${isPending ? "pending" : isActive ? styles.active : ""}`
                }
              >
                {nav.item}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
