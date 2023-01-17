import React from "react";
import HeaderCss from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    borderBottom: "3px solid #252525",
    paddingBottom: "5px",
  };

  return (
    <div className={HeaderCss.navbar}>
      <div className={HeaderCss.navLeft}>
        <div className={HeaderCss.logo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <circle cx="24" cy="24" r="16" fill="#f2ca00"></circle>
            <path
              fill="#324561"
              d="M24,6c-0.553,0-1-0.447-1-1V1c0-0.553,0.447-1,1-1s1,0.447,1,1v4C25,5.553,24.553,6,24,6z"
            ></path>
            <path
              fill="#324561"
              d="M5,25H1c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S5.553,25,5,25z"
            ></path>
            <path
              fill="#324561"
              d="M7.736,41.264c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2.829-2.829	c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-2.829,2.829C8.248,41.166,7.992,41.264,7.736,41.264z"
            ></path>
            <path
              fill="#324561"
              d="M10.565,11.565c-0.256,0-0.512-0.098-0.707-0.293L7.029,8.443c-0.391-0.391-0.391-1.023,0-1.414	s1.023-0.391,1.414,0l2.829,2.829c0.391,0.391,0.391,1.023,0,1.414C11.077,11.468,10.821,11.565,10.565,11.565z"
            ></path>
            <path
              fill="#324561"
              d="M37.435,11.565c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l2.829-2.829	c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-2.829,2.829C37.946,11.468,37.69,11.565,37.435,11.565z"
            ></path>
            <path
              fill="#324561"
              d="M47,25h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S47.553,25,47,25z"
            ></path>
            <path
              fill="#324561"
              d="M40.264,41.264c-0.256,0-0.512-0.098-0.707-0.293l-2.829-2.829c-0.391-0.391-0.391-1.023,0-1.414	s1.023-0.391,1.414,0l2.829,2.829c0.391,0.391,0.391,1.023,0,1.414C40.775,41.166,40.52,41.264,40.264,41.264z"
            ></path>
            <path
              fill="#324561"
              d="M24,48c-0.553,0-1-0.447-1-1v-4c0-0.553,0.447-1,1-1s1,0.447,1,1v4C25,47.553,24.553,48,24,48z"
            ></path>
          </svg>
        </div>
        <div className={HeaderCss.nav}>
          <ul className={HeaderCss.navLinks}>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/store"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                store
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={HeaderCss.navRight}>
        <div className={HeaderCss.findUs}>
          <NavLink to="/contact">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFMElEQVRoge2Zf0yUdRzHX5+7Q0DlEBQq0yxR2/JXeCIW4q/gFJ0rVMhGOaAC3Wqtv4w1zX9qrrms5VpSYbq0FtlalprgBqmJB6Izo0jNxJxmi/Ru4IS759MfxxE7OI5AOVu8/3r2+fW839/P99eeR7gNMN2em+5RyRYlFWFUm/kCIgfV4NPj5SXlgXKlnzh2iamPrJxgNpneA5kdJLTSQJ89UfbhaX+H6RZxC4pE+9OzzSZLVRv5KyqsNdBEt7iHusU91KSmaSqsBf4A5ghSNW1Bbqp/nZB0wDvylirQGIHPIiIl//CXJa6uYpMzcqyt7kFbgaUKjWIyJdd+88EZnz8kHfBOGy/5Y2VbswORBzi6d4ezNmVMFvC5QCweo7ijv987MN2em26o7AeuREbKOB/5JHveaA+6CUPsbczKTWYpqtlXUg9gSyuIVmk9DcQpRtrxsm0HIAQd8KhkA6jwdkfybuUEKssQohCigEyPR7+bkvHMKIBj5cXXBDYDiJqyffV6JcBZzf2uagpdR9npdHDB6eCM08FrLgcTg+WK4l2IIrvbRaGbBGIV9rgt5tFui3k0sFcg1uI23vgn1+TNEdp3LUtPCF+tZqwYzBIhRWChKveot1BHFCkUOR3UqVKqsG1YMuc6K+BugJYbEWfbbYbYEfBYzIUn977/G0CSPa/QozSALvCFhQ/WM9evA7SfFV0L6Iqwj6z6xT63ZTEIbC742md6QIRXBNY6HRxRKBXlI2syf7YpaAXFNORqWJBx86H9lcYNCQNFoSWgAKeDAyjzAxH2x6mG+EAuE5AikIKwwVnNbmDHvJf1nCoxlpaIBKDGq4lyINPi9hQn2fMKATxIMSiItp/CrTDOG87Zji/xx/wgnHuDCJQslC8W2X6e6CVh2NtJmKVIoRHI8CgNHqUB1YUKjYZS5IvzaFuOSnV3Am4p5k0+Fw4gSJbPVrOvpN5jMU8FKQWcgBPRXYrO7Hh9ENSbY9JdPluPFvHNROLYy8RGXafRFflgYnrenONlWysB2hZvdqA824L8eWroFNBLCdFNlbVt9n7vgNlksOyhOgAE1vQ0Tw3jJe+TvFlaWurx2UNylcic+SNDI1oAMmzp+fZg8dPsefNB7EMiWhAN29LRFxIBg8NbWZH6PQCKbrTZCgJuqTZbQRjKWwA5c05yrLz4Wkd/yK7Tj6eeYvQIJ8BkYlrXBYrTWPd6YNLI4S6WP1zXyR8yAWFmg+cXVyECKhTZ0vJn+cd47/+6RgReXHKEQRZPpzohEwAwY8JFHp3xE4AZMbYnZ+RYfT5bWkE0hmwHzJkz60gaf7HLGv2+jfpjdUY1J8/fwS+XY+5rdYftnDt3/WMA1+T8ToF7x9/VyKqFNQHzQ9oBgPAwNxueKmN4VDMgi11h5z92Dvr1E4FFw6OaeXVleZdTx4eQCwCIH9bE67n7GWFtVoXlqCyLszbpxrz9xFubus0N2RTyv8Um3PkX76z+St7dk4QIrMpwSJy1OWidkAno6hYbb21i3YqKf1XntphCfcGAgFBjQECoMSAg1PjPC+jzQTZpzBVEgn18uXXos4AOH7RCgv/tFLokSgUmKhQqEeJUyRElG4i9mQSDoacCfIQrFSqsSdT7+euBQ/oDL7iayQByUJYAEYEK9mbtKBzwt3X6weE8ykGEhCCEg6KxhmiLwVLgSWAuvZuuwQauf/7QNNUy0u0mSyALSOkm9HeEb1U5rAaHopOpFen++3K//2JyOZiokAM8AYT3tdMDGMAABjCAPuFvB8PoZGhBwCgAAAAASUVORK5CYII=" />
          </NavLink>
        </div>
        <button className={HeaderCss.singIn}>
          <NavLink to="/signin">sign in</NavLink>
        </button>
        <button className={HeaderCss.joinNow}>
          <NavLink to="/register">join now</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
