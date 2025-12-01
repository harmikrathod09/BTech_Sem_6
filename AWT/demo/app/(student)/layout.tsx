import Link from "next/link";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="row">
        <div className="col-2 border border-primary">LOGO HERE</div>
        <div className="col border border-info">
          <Link href="/">Home</Link> &nbsp;
          <Link href="/contact" replace={true}>
            Contact
          </Link>{" "}
          &nbsp;
          <Link href="/about">About</Link> &nbsp;
          <Link href="/about/college">About-college</Link> &nbsp;
          <Link href="/about/university">About-uni</Link> &nbsp;
          <Link href="/login">Login</Link> &nbsp;
        </div>
      </div>
      <div className="row">
        <div className="col-3 border border-primary">SIDEBAR</div>
        <div className="col">{children}</div>
      </div>
    </div>
  );
}

export default layout;
