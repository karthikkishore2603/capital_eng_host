"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function MobileNav() {
  const [activeMenu, setActiveMenu] = useState({});
  const pathname = usePathname();

  const isChildActive = (links) => {
    return links.some((item) =>
      item.link?.split("/")[1] === pathname?.split("/")[1]
    );
  };

  const toggleMenu = (level, index) => {
    setActiveMenu((prev) => {
      const newMenu = { ...prev };
      newMenu[level] = newMenu[level] === index ? null : index;
      return newMenu;
    });
  };

  return (
    <>
      {menuItems.map((elm, i) => (
        <li
          key={i}
          className={`${
            elm.subMenuItems ? "menu-item-has-children submenu-item-has-children" : ""
          } ${activeMenu["level1"] === i ? "active-class" : ""}`}
        >
          {elm.subMenuItems ? (
            <>
              <a
                // style={{ background: "gray", fontSize:"15px" }}
                href="#"
                onClick={() => toggleMenu("level1", i)}
                className={isChildActive(elm.subMenuItems) ? "activeMenu" : ""}
              >
                {elm.title}
                <span className="mean-expand-class"></span>
              </a>

              <ul
                className="sub-menu submenu-class menu-open overflow-hidden"
                style={
                  activeMenu["level1"] === i
                    ? { maxHeight: "500px" }
                    : { maxHeight: "0px" }
                }
              >
                {elm.subMenuItems.map((elm2, i2) => (
                  <li
                    key={i2}
                    className={`${
                      elm2.subMenuItems
                        ? "menu-item-has-children submenu-item-has-children"
                        : ""
                    } ${activeMenu["level2"] === i2 ? "active-class" : ""}`}
                  >
                    {elm2.subMenuItems ? (
                      <>
                        <a
                        
                          href="#"
                          onClick={() => toggleMenu("level2", i2)}
                          className={
                            isChildActive(elm2.subMenuItems)
                              ? "activeMenu2"
                              : ""
                          }
                        >
                          {elm2.title}
                          <span className="mean-expand-class"></span>
                        </a>
                        <ul
                          className="sub-menu submenu-class overflow-hidden"
                          style={
                            activeMenu["level2"] === i2
                              ? { maxHeight: "500px" }
                              : { maxHeight: "0px" }
                          }
                        >
                          {elm2.subMenuItems.map((elm3, i3) => (
                            <li key={i3}>
                              <Link
                                scroll={false}
                                className={
                                  elm3.link?.split("/")[1] ===
                                  pathname?.split("/")[1]
                                    ? "activeMenu2"
                                    : ""
                                }
                                href={elm3.link}
                              >
                                {elm3.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        scroll={false}
                        className={
                          elm2.link?.split("/")[1] === pathname?.split("/")[1]
                            ? "activeMenu2"
                            : ""
                        }
                        href={elm2.link}
                      >
                        {elm2.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              scroll={false}
              className={
                elm.link?.split("/")[1] === pathname?.split("/")[1]
                  ? "activeMenu"
                  : ""
              }
              href={elm.link}
            >
              {elm.title}
            </Link>
          )}
        </li>
      ))}
    </>
  );
}
