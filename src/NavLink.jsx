import React from "react";

const NavLink = ({ name, hamButton, setHamButton }) => {
  return (
    <a
      href="#"
      className={`hover:text-zinc-500 ${hamButton ? "" : "max-sm:hidden"}`}
      onClick={() => {
        setHamButton(false);
      }}
    >
      {name}
    </a>
  );
};

export default NavLink;
