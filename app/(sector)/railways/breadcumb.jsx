import Link from "next/link";
import React from "react";

export default function Breadcumb2() {
  return (
    <div className="breadcumb-wrapper style2 bg-smoke">
      <div className="container-fluid">
        <div className="breadcumb-content">
          <ul className="breadcumb-menu">
            <li>
              <Link scroll={false} href="#">
                Sectors
              </Link>
            </li>
            <li>Railways</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
