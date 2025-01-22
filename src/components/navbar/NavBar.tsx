import React from "react";
import { NavLink } from "react-router";

const NavMenus = [
  {
    name: "Dashboard",
    link: "/",
  },
  {
    name: "Users",
    link: "users",
    children: [
          {
            name: "View",
            link: "users/view",
            children: [
              {
                name: "Friends",
                link: "users/view/friends",
              },
            ],
          },
          {
            name: "Edit",
            link: "users/edit",
          },
        ],
  },
  {
    name: "Settings",
    link: "settings",
  },
];

const NavItem = ({ item }) => {
  return (
    <li>
      <NavLink
        to={item.link}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {item.name}
      </NavLink>
      {item.children && (
        <ul>
          {item.children.map((child, index) => (
            <NavItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        {NavMenus.map((navitem, index) => (
          <NavItem key={`#-${index}-${navitem.name}`} item={navitem} />
        ))}
      </ul>
    </nav>
  );
};
