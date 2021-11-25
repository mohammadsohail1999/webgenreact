import React from "react";
import { useSelector } from "react-redux";
import { getHeaderState } from "../../Features/HeaderSlice";

const Header = () => {
  const { headerBackground, color, logoImg, headerTitle, links } =
    useSelector(getHeaderState);

  return (
    <nav
      style={{
        background: headerBackground,
        display: "flex",
        minHeight: "10vh",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        color: color,
      }}
    >
      <div
        className="logo"
        style={{ display: "flex", alignItems: "center", marginLeft: ".6rem" }}
      >
        {logoImg && (
          <img
            src={logoImg}
            alt="logo"
            style={{ height: "25px", width: "25px", borderRadius: "50%" }}
          />
        )}

        <h3 style={{ marginLeft: "1rem" }}>
          {headerTitle ? headerTitle : "Title"}
        </h3>
      </div>
      {links.length ? (
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexBasis: "7rem",
          }}
        >
          {links.map((el, i) => (
            <li
              key={i}
              style={{
                margin: "1rem",
              }}
            >
              <a
                href={el.linkUrl || "#"}
                style={{ textDecoration: "none", color: color }}
              >
                {el.linkTitle || "link"}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};

export default Header;
